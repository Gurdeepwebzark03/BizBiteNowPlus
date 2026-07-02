import { useState } from "react";
import OrderTabs from "../../components/UI/OrdersTab";
import OrderGrid from "../../components/UI/OrderGrid";
import useOrders from "../../hooks/useOrders";
import LoadingOrderCard from "../../components/UI/LoadingCard";
import OrderCard from "../../components/UI/OrderCard";

import PaginatedList from "../../components/UI/Pagination";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("new");

  const { orders, loading, error, markAsDelivered } = useOrders();

  // helper function to filter todays orders
  const isToday = (date) => {
    const today = new Date();
    const orderDate = new Date(date);

    return (
      today.getFullYear() === orderDate.getFullYear() &&
      today.getMonth() === orderDate.getMonth() &&
      today.getDate() === orderDate.getDate()
    );
  };

  // filtering orders as new orders and delivered orders
  const filteredOrders = orders.filter((order) => {
    if (activeTab === "new") {
      return order.status === "NEW";
    }

    return order.status === "DELIVERED" && isToday(order.createdAt);
  });

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <LoadingOrderCard key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mx-auto max-w-7xl p-6">
      <OrderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-6">
        <PaginatedList
          data={filteredOrders}
          renderItem={(order) => (
            <OrderCard
              order={order}
              activeTab={activeTab}
              markAsDelivered={markAsDelivered}
            />
          )}
        />
      </div>

      {/* <OrderGrid
        orders={filteredOrders}
        activeTab={activeTab}
        markAsDelivered={markAsDelivered}
      /> */}
    </div>
  );
};

export default Orders;
