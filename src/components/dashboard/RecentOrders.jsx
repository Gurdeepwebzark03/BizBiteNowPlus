import React from "react";
import Card from "../UI/Card";
import {
  ChevronRight,
  Clock3,
  CheckCircle2,
  ChefHat,
} from "lucide-react";

import { recentOrders } from "../../data/dashboardData";

const statusConfig = {
  Delivered: {
    icon: CheckCircle2,
    color: "bg-emerald-100 text-emerald-700",
  },
  Preparing: {
    icon: ChefHat,
    color: "bg-amber-100 text-amber-700",
  },
  Pending: {
    icon: Clock3,
    color: "bg-red-100 text-red-700",
  },
};

export default function RecentOrders() {
  return (
    <Card className="p-6 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Recent Orders
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Latest customer orders
          </p>
        </div>

        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
          View All
        </button>
      </div>

      {/* Orders */}
      <div className="space-y-4">
        {recentOrders.map((order) => {
          const StatusIcon =
            statusConfig[order.status]?.icon;

          const badge =
            statusConfig[order.status]?.color;

          return (
            <div
              key={order.id}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-slate-200
                p-4
                hover:border-emerald-500
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <div>
                <h3 className="font-semibold text-slate-900">
                  {order.id}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {order.customer}
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold text-slate-900">
                  {order.amount}
                </p>

                <div
                  className={`
                    inline-flex
                    items-center
                    gap-1
                    rounded-full
                    px-3
                    py-1
                    mt-2
                    text-xs
                    font-medium
                    ${badge}
                  `}
                >
                  <StatusIcon size={14} />
                  {order.status}
                </div>
              </div>

              <ChevronRight
                className="text-slate-400"
                size={20}
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
}