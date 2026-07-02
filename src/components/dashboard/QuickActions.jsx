import React from "react";
import {
  Plus,
  Package,
  Truck,
  Gift,
  ArrowRight,
} from "lucide-react";
import Card from "../UI/Card";

const actions = [
  {
    id: 1,
    title: "Add Product",
    description: "Create a new product",
    icon: Plus,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 2,
    title: "Manage Products",
    description: "View & update inventory",
    icon: Package,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    title: "Delivery Board",
    description: "Assign delivery partners",
    icon: Truck,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 4,
    title: "Special Offers",
    description: "Create festive offers",
    icon: Gift,
    color: "bg-purple-100 text-purple-700",
  },
];

export default function QuickActions() {
  return (
    <Card className="p-6 h-full">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Frequently used shortcuts
        </p>
      </div>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.id}
              className="
                w-full
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-slate-200
                p-4
                hover:border-emerald-500
                hover:bg-emerald-50
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${action.color}`}
                >
                  <Icon size={22} />
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-slate-900">
                    {action.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {action.description}
                  </p>
                </div>
              </div>

              <ArrowRight
                size={18}
                className="text-slate-400"
              />
            </button>
          );
        })}
      </div>
    </Card>
  );
}