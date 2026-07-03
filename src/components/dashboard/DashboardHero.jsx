import React from "react";
import {
  Plus,
  ShoppingBag,
  BarChart3,
  Store,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning ☀️";
  if (hour < 17) return "Good Afternoon 🌤️";
  if (hour < 21) return "Good Evening 🌇";

  return "Good Night 🌙";
};

const DashboardHero = () => {
  const greeting = getGreeting();

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1A4D2E] via-[#205C38] to-[#2D6A4F] px-6 py-4 text-white shadow-xl">
      {/* Background */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute right-16 bottom-0 h-24 w-24 rounded-full bg-[#ffc700]/20" />

      <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-xl">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Store className="h-5 w-5" />

            <h1 className="text-xl font-bold md:text-2xl">
              {greeting}
            </h1>

            <span className="text-xs text-green-100">
              {today}
            </span>
          </div>

          <h2 className="text-base font-semibold md:text-lg">
            Welcome back, Seller
          </h2>

          <p className="mt-1 max-w-lg text-xs leading-5 text-green-100 md:text-sm">
            Manage products, orders and customers from one place.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-2">
          {/* Status */}
          <div className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/15 px-4 py-2 backdrop-blur">
            <Sparkles
              size={18}
              className="text-[#ffc700]"
            />

            <div>
              <p className="text-[11px] text-green-100">
                Store Status
              </p>

              <h3 className="text-sm font-semibold">
                Active
              </h3>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-2">
            <Link
              to="/seller/products"
              className="rounded-xl bg-white px-4 py-3 text-[#16522d] transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Plus
                size={18}
                className="mb-1"
              />

              <h3 className="text-xs font-semibold">
                Add
              </h3>

              <p className="text-[10px] text-gray-500">
                Product
              </p>
            </Link>

            <Link
              to="/seller/orders"
              className="rounded-xl bg-white px-4 py-3 text-[#16522d] transition hover:-translate-y-1 hover:shadow-lg"
            >
              <ShoppingBag
                size={18}
                className="mb-1"
              />

              <h3 className="text-xs font-semibold">
                Orders
              </h3>

              <p className="text-[10px] text-gray-500">
                Manage
              </p>
            </Link>

            <Link
              to="/seller/analytics"
              className="rounded-xl bg-[#ffc700] px-4 py-3 text-[#16522d] transition hover:-translate-y-1 hover:shadow-lg"
            >
              <BarChart3
                size={18}
                className="mb-1"
              />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-semibold">
                    Analytics
                  </h3>

                  <p className="text-[10px]">
                    Reports
                  </p>
                </div>

                <ArrowUpRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHero;