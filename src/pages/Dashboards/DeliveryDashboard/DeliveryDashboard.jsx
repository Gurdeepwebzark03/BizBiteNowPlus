import React, { useState } from "react";
import DeliveryProfileCard from "../../../components/delivery/DeliveryProfileCard";
import TodayEarnings from "../../../components/delivery/TodayEarnings";
import DeliveryStats from "../../../components/delivery/DeliveryStats";
import DeliveryTable from "../../../components/delivery/DeliveryTable";
import deliveryData from "../../../data/deliveryData";

export default function DeliveryDashboard() {
  const [orders, setOrders] = useState(deliveryData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [isOnline, setIsOnline] = useState(true);

  // Search & Filter
  const filteredOrders = orders.filter((order) => {
    const matchSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "All" ? true : order.status === filter;

    return matchSearch && matchFilter;
  });

  // Today's Earnings (₹120 per completed delivery)
  const completedOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  return (
    <div className="min-h-screen bg-amber-50 p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

        <div>
          <h1 className="text-3xl font-bold text-amber-700">
            Delivery Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all delivery orders
          </p>
        </div>

        <button
          onClick={() => setIsOnline(!isOnline)}
          className={`px-5 py-2 rounded-lg text-white font-semibold transition ${
            isOnline
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {isOnline ? "🟢 Online" : "🔴 Offline"}
        </button>

      </div>

      {/* Delivery Partner Profile */}
      <DeliveryProfileCard isOnline={isOnline} />

      {/* Today's Earnings */}
      {/* <TodayEarnings completedOrders={completedOrders} /> */}

      {/* Dashboard Stats */}
      <DeliveryStats orders={orders} />

      {/* Search & Filter */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-col md:flex-row justify-between gap-4">

        <input
          type="text"
          placeholder="Search by Order ID or Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-80 outline-none focus:ring-2 focus:ring-amber-500"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-60 outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Picked Up</option>
          <option>Out for Delivery</option>
          <option>Delivered</option>
        </select>

      </div>

      {/* Orders Table */}
      <DeliveryTable
        orders={filteredOrders}
        setOrders={setOrders}
      />

    </div>
  );
}