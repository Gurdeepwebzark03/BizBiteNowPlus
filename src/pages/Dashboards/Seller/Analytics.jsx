import SalesChart from "../../../components/dashboard/analytics/SalesChart";
import TopProducts from "../../../components/dashboard/widgets/TopProducts/TopProducts";
import RecentOrders from "../../../components/dashboard/widgets/RecentOrders/RecentOrders";
import RecentActivity from "../../../components/dashboard/widgets/RecentActivity/RecentActivity";
import LoyaltyChart from "../../../components/dashboard/analytics/LoyaltyChart";

export default function Analytics() {
  return (
    <div className="flex flex-col gap-2">

    <h1 className="text-3xl font-bold text-slate-900">
        Analytics
    </h1>

    <p className="text-slate-500">
        Track revenue, products, customer orders and business activity.
    </p>


    <div className="space-y-8">

      {/* Sales */}
      <SalesChart />

      {/* Widgets */}
      <div className="grid gap-8 xl:grid-cols-2">

        <TopProducts />

        <RecentOrders />
      </div>

      {/* Timeline */}
      <RecentActivity />
        <LoyaltyChart/>   

    </div>
    </div>
  );
}