import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { Users } from "lucide-react";
import ChartHeader from "./ChartHeader";

const loyaltyData = [
  { stamp: "1", customers: 18 },
  { stamp: "2", customers: 22 },
  { stamp: "3", customers: 14 },
  { stamp: "4", customers: 9 },
  { stamp: "5", customers: 6 },
];

const LoyaltyTooltip = ({
  active,
  payload,
  label,
}) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
      <p className="font-semibold">
        Stamp Level {label}
      </p>

      <p className="mt-2 text-[#1A4D2E]">
        Customers: {payload[0].value}
      </p>
    </div>
  );
};

const LoyaltySummary = () => {
  const totalCustomers = loyaltyData.reduce(
    (sum, item) => sum + item.customers,
    0
  );

  const highestLevel = loyaltyData.reduce(
    (prev, current) =>
      current.customers > prev.customers
        ? current
        : prev
  );

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-2xl bg-[#1A4D2E] p-6 text-white">
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/80">
            Loyalty Members
          </p>

          <Users size={22} />
        </div>

        <h2 className="mt-4 text-3xl font-bold">
          {totalCustomers}
        </h2>

        <p className="mt-3 text-sm text-white/70">
          Active loyalty customers
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <p className="text-sm text-gray-500">
          Highest Engagement
        </p>

        <h3 className="mt-3 text-3xl font-bold text-gray-900">
          {highestLevel.customers}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Customers at Stamp {highestLevel.stamp}
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <p className="text-sm text-gray-500">
          Reward Threshold
        </p>

        <h3 className="mt-3 text-3xl font-bold text-gray-900">
          5 Stamps
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Current programme target
        </p>
      </div>
    </div>
  );
};

const LoyaltyChart = () => {
  return (
    <div className="h-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <ChartHeader
        title="Customer Loyalty Analytics"
        subtitle="Track customer progress through the loyalty programme"
      />

      <LoyaltySummary />

      <div className="mt-8 h-[350px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={loyaltyData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="stamp"
              tickLine={false}
              axisLine={false}
              label={{
                value: "Stamp Level",
                position: "insideBottom",
                offset: -5,
              }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              content={<LoyaltyTooltip />}
            />

            <Bar
              dataKey="customers"
              fill="#1A4D2E"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default LoyaltyChart;