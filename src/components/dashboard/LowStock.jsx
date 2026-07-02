import React from "react";
import Card from "../UI/Card";
import { AlertTriangle, Package } from "lucide-react";
import { lowStock } from "../../data/dashboardData";

export default function LowStock() {
  return (
    <Card className="p-6 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Inventory Alerts
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Products that need attention
          </p>
        </div>

        <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center">
          <AlertTriangle
            size={22}
            className="text-red-600"
          />
        </div>
      </div>

      {/* Inventory List */}
      <div className="space-y-4">
        {lowStock.map((item) => {
          const percentage = Math.min((item.stock / 10) * 100, 100);

          return (
            <div
              key={item.id}
              className="rounded-xl border border-slate-200 p-4 hover:border-red-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Package
                      size={18}
                      className="text-slate-600"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      Only {item.stock} items remaining
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.stock <= 3
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {item.stock <= 3 ? "Critical" : "Low"}
                </span>
              </div>

              {/* Stock Progress */}
              <div className="mt-4">
                <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      item.stock <= 3
                        ? "bg-red-500"
                        : "bg-amber-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
                  Restock
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}