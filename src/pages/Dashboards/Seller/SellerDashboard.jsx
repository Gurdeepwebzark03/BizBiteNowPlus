import DashboardHero from "../../../components/dashboard/DashboardHero";
import StatsCard from "../../../components/dashboard/StatsCard";
import SalesChart from "../../../components/dashboard/analytics/SalesChart";
import RecentOrders from "../../../components/dashboard/widgets/RecentOrders/RecentOrders";
import TopProducts from "../../../components/dashboard/widgets/TopProducts/TopProducts";
import LowStock from "../../../components/dashboard/widgets/LowStock/LowStock";
import RecentActivity from "../../../components/dashboard/widgets/RecentActivity/RecentActivity";
import QuickActions from "../../../components/dashboard/widgets/QuickActions/QuickActions";

import { stats } from "../../../data/dashboardData";

export default function SellerDashboard() {
  return (
    <div className="space-y-6">

      {/* Hero */}
      <DashboardHero />

      {/* Overview */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatsCard
            key={item.id}
            {...item}
          />
        ))}
      </section>

      {/* Quick Actions */}
      <QuickActions />


    </div>
  );
}