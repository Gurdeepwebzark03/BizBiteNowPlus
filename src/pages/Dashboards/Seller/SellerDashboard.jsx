import DashboardLayout from "../../../components/Shared/DashboardLayout";

// Components
import StatCard from "../../../components/dashboard/StatCard";
import SalesChart from "../../../components/dashboard/SalesChart";
import RecentOrders from "../../../components/dashboard/RecentOrders";
import TopProducts from "../../../components/dashboard/TopProducts";
import LowStock from "../../../components/dashboard/LowStock";
import RecentActivity from "../../../components/dashboard/RecentActivity";
import QuickActions from "../../../components/dashboard/QuickActions";

// Demo Data
import {
  stats,
} from "../../../data/dashboardData";

export default function SellerDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Page Header */}
        <section>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-600">
            Monitor your business performance, orders, inventory and delivery from one place.
          </p>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((item) => (
            <StatCard
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