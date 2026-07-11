import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Card from "../UI/Card";

const StatsCard = ({
  title,
  value,
  icon: Icon,
  trend = 0,
  subtitle = "vs last week",
  iconBg = "bg-[#1A4D2E]/10",
  iconColor = "text-[#1A4D2E]",
}) => {
  const isPositive = trend >= 0;

  return (
    <Card
      hover
      className="relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gray-100 opacity-50" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            {value}
          </h2>

          <div
            className={`mt-4 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
              isPositive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {isPositive ? (
              <ArrowUpRight size={14} />
            ) : (
              <ArrowDownRight size={14} />
            )}

            {Math.abs(trend)}%
          </div>

          <span className="ml-2 text-xs text-gray-500">
            {subtitle}
          </span>
        </div>

        <div
          className={`rounded-2xl p-4 ${iconBg}`}
        >
          <Icon
            size={28}
            className={iconColor}
          />
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;