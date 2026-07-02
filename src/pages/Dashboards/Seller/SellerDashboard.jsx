import DashboardLayout from "../../../components/Shared/DashboardLayout";

// Components
import DashboardHero from "../../../components/dashboard/DashboardHero";
import StatsCard from "../../../components/dashboard/StatsCard.jsx";
import SalesChart from "../../../components/dashboard/analytics/SalesChart";
import RecentOrders from "../../../components/dashboard/widgets/RecentOrders/RecentOrders.jsx";
import TopProducts from "../../../components/dashboard/widgets/TopProducts/TopProducts.jsx";
import LowStock from "../../../components/dashboard/widgets/LowStock/LowStock.jsx";
import RecentActivity from "../../../components/dashboard/widgets/RecentActivity/RecentActivity.jsx";
import QuickActions from "../../../components/dashboard/widgets/QuickActions/QuickActions.jsx";

// Demo Data
import {
  stats,
} from "../../../data/dashboardData";

export default function SellerDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Page Header */}
        <DashboardHero
        />

        {/* Statistics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((item) => (
            <StatsCard
              key={item.id}
              {...item}
            />
          ))}
        </section>

        {/* Analytics */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <SalesChart />
          </div>

          <QuickActions />
        </section>

        {/* Orders & Products */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <RecentOrders />
          <TopProducts />
        </section>

        {/* Activity & Stock */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <RecentActivity />
          <LowStock />
        </section>

      </div>
    </DashboardLayout>
  );
}