import React from "react";
import {
  Plus,
  ShoppingBag,
  BarChart3,
  Store,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const DashboardHero = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1A4D2E] via-[#23663D] to-[#2E7D4F] p-8 text-white shadow-xl">
      {/* Background Decoration */}
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
      <div className="absolute bottom-0 right-24 h-36 w-36 rounded-full bg-[#FFB703]/20" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <Store size={16} />
            <span>Store Status: Online</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Welcome back 👋
          </h1>

          <p className="mt-2 text-white/80">
            {today}
          </p>

          <p className="mt-5 max-w-xl text-white/90">
            Track sales, manage products, process orders, and grow your
            business—all from one dashboard.
          </p>
        </div>

        {/* Right */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Link
            to="/seller/products"
            className="rounded-2xl bg-white p-5 text-[#1A4D2E] transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Plus className="mb-3" />
            <h3 className="font-semibold">Add Product</h3>
            <p className="mt-1 text-sm text-gray-500">
              Create a new listing
            </p>
          </Link>

          <Link
            to="/seller/orders"
            className="rounded-2xl bg-white p-5 text-[#1A4D2E] transition hover:-translate-y-1 hover:shadow-lg"
          >
            <ShoppingBag className="mb-3" />
            <h3 className="font-semibold">Orders</h3>
            <p className="mt-1 text-sm text-gray-500">
              Manage customer orders
            </p>
          </Link>

          <Link
            to="/seller/analytics"
            className="rounded-2xl bg-[#FFB703] p-5 text-[#1A4D2E] transition hover:-translate-y-1 hover:shadow-lg"
          >
            <BarChart3 className="mb-3" />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">
                  Analytics
                </h3>

                <p className="mt-1 text-sm">
                  View reports
                </p>
              </div>

              <ArrowUpRight />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashboardHero;