import { Link } from "react-router-dom";
import DashboardWidget from "../../DashboardWidget";
import EmptyState from "../../../UI/EmptyState";
import OrderItem from "./OrderItem";
import { recentOrders } from "../../../../data/dashboardData";

const RecentOrders = () => {
  return (
    <DashboardWidget
      title="Recent Orders"
      subtitle="Latest customer purchases"
      action={
        <Link
          to="/seller/orders"
          className="text-sm font-medium text-[#1A4D2E] hover:underline"
        >
          View All
        </Link>
      }
    >
      {recentOrders.length === 0 ? (
        <EmptyState
          title="No recent orders"
          description="Orders will appear here."
        />
      ) : (
        <div className="max-h-[700px] space-y-3 overflow-y-auto scrollbar-hide pr-1">
          {recentOrders.map((order) => (
            <OrderItem
              key={order.id}
              order={order}
            />
          ))}
        </div>
      )}
    </DashboardWidget>
  );
};

export default RecentOrders;