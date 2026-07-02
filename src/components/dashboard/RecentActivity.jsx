import React from "react";
import Card from "../UI/Card";
import {
  ShoppingCart,
  Package,
  CreditCard,
  Truck,
} from "lucide-react";

import { activities } from "../../data/dashboardData";

const activityIcons = {
  order: ShoppingCart,
  product: Package,
  payment: CreditCard,
  delivery: Truck,
};

const activityColors = {
  order: "bg-blue-100 text-blue-600",
  product: "bg-purple-100 text-purple-600",
  payment: "bg-emerald-100 text-emerald-600",
  delivery: "bg-orange-100 text-orange-600",
};

export default function RecentActivity() {
  return (
    <Card className="p-6 h-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Latest updates from your store
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200" />

        <div className="space-y-6">
          {activities.map((activity) => {
            const Icon = activityIcons[activity.type];
            const color = activityColors[activity.type];

            return (
              <div
                key={activity.id}
                className="relative flex gap-4"
              >
                {/* Timeline Icon */}
                <div
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full ${color}`}
                >
                  <Icon size={18} />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900">
                      {activity.title}
                    </h3>

                    <span className="text-xs text-slate-400">
                      {activity.time}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-600">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}