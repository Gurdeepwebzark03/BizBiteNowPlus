import React from "react";
import Card from "../UI/Card";
import { Trophy, TrendingUp } from "lucide-react";
import { topProducts } from "../../data/dashboardData";

export default function TopProducts() {
  const maxSold = Math.max(...topProducts.map((p) => p.sold));

  return (
    <Card className="p-6 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Top Products
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Best performing products this week
          </p>
        </div>

        <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center">
          <Trophy
            size={22}
            className="text-amber-600"
          />
        </div>
      </div>

      {/* Products */}
      <div className="space-y-5">
        {topProducts.map((product, index) => (
          <div key={product.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">
                  #{index + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {product.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {product.sold} Units Sold
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-emerald-600 font-medium">
                <TrendingUp size={16} />
                <span>{product.sold}</span>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-3 h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-600 transition-all duration-700"
                style={{
                  width: `${(product.sold / maxSold) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}