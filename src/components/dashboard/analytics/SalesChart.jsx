import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import ChartHeader from "./ChartHeader";
import RevenueSummary from "./RevenueSummary";
import { salesChartData } from "../../../data/salesChartData";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
      <p className="font-semibold">{label}</p>

      <p className="mt-2 text-[#1A4D2E]">
        Revenue: ₹{payload[0].value.toLocaleString()}
      </p>
    </div>
  );
};

const SalesChart = () => {
  return (
    <div className="rounded-3xl h-full border border-gray-200 bg-white p-6 shadow-sm">

      <ChartHeader
        title="Sales Analytics"
        subtitle="Track your weekly sales performance"
      />

      <RevenueSummary />

      <div className="mt-8 h-[350px]">

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={salesChartData}>

            <defs>
              <linearGradient
                id="salesGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#1A4D2E"
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#1A4D2E"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#1A4D2E"
              strokeWidth={3}
              fill="url(#salesGradient)"
            />

          </AreaChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default SalesChart;