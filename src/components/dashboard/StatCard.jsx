import React from "react";
import {
  IndianRupee,
  ShoppingBag,
  Package,
  Users,
  TrendingUp,
} from "lucide-react";

const icons = {
  "Today's Revenue": IndianRupee,
  Orders: ShoppingBag,
  Products: Package,
  Customers: Users,
};

const colors = {
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    badge: "text-emerald-600",
  },
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    badge: "text-blue-600",
  },
  amber: {
    bg: "bg-amber-50",
    icon: "text-amber-600",
    badge: "text-amber-600",
  },
  purple: {
    bg: "bg-purple-50",
    icon: "text-purple-600",
    badge: "text-purple-600",
  },
};

export default function StatCard({
  title,
  value,
  change,
  color = "emerald",
}) {
  const Icon = icons[title];
  const theme = colors[color];

  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-slate-200
        p-6
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {value}
          </h2>

          <div className="mt-4 flex items-center gap-2">
            <TrendingUp
              size={16}
              className={theme.badge}
            />

            <span
              className={`text-sm font-semibold ${theme.badge}`}
            >
              {change}
            </span>

            <span className="text-sm text-slate-500">
              vs last week
            </span>
          </div>
        </div>

        <div
          className={`
            w-14
            h-14
            rounded-xl
            flex
            items-center
            justify-center
            ${theme.bg}
          `}
        >
          <Icon
            className={theme.icon}
            size={26}
          />
        </div>
      </div>
    </div>
  );
}