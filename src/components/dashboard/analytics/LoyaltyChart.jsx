import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Tooltip,
} from "recharts";

import { Users, Award, Gift } from "lucide-react";
import ChartHeader from "./ChartHeader";

const loyaltyData = [
  { name: "Stamp 1", customers: 18, fill: "#16522D" },
  { name: "Stamp 2", customers: 22, fill: "#1E3A5F" },
  { name: "Stamp 3", customers: 14, fill: "#D4A017" },
  { name: "Stamp 4", customers: 9, fill: "#8FA6C1" },
  { name: "Stamp 5", customers: 6, fill: "#B7C4D3" },
];

const LoyaltyTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;

  const item = payload[0].payload;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
      <p className="font-semibold text-slate-900">{item.name}</p>
      <p className="mt-2 text-sm text-slate-500">Customers</p>
      <p className="text-xl font-bold text-[#16522D]">{item.customers}</p>
    </div>
  );
};

const LoyaltySummary = () => {
  const totalCustomers = loyaltyData.reduce((sum, item) => sum + item.customers, 0);

  const highestLevel = loyaltyData.reduce((prev, current) =>
    current.customers > prev.customers ? current : prev
  );

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">Loyalty Members</p>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16522D]/10">
            <Users size={20} className="text-[#16522D]" />
          </div>
        </div>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">{totalCustomers}</h2>
        <p className="mt-2 text-sm text-slate-500">Active enrolled customers</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">Highest Engagement</p>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E3A5F]/10">
            <Award size={20} className="text-[#1E3A5F]" />
          </div>
        </div>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">{highestLevel.customers}</h2>
        <p className="mt-2 text-sm text-slate-500">{highestLevel.name}</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">Reward Target</p>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D4A017]/10">
            <Gift size={20} className="text-[#D4A017]" />
          </div>
        </div>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">5 Stamps</h2>
        <p className="mt-2 text-sm text-slate-500">Free reward eligibility</p>
      </div>
    </div>
  );
};

export default function LoyaltyChart() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      <ChartHeader
        title="Customer Loyalty Analytics"
        subtitle="Monitor loyalty programme participation"
      />

      <LoyaltySummary />

      <div className="flex flex-col items-center gap-8 lg:flex-row">
        <div className="h-[360px] w-full lg:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="20%"
              outerRadius="95%"
              data={loyaltyData}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis type="number" domain={[0, 25]} tick={false} />
              <RadialBar
                dataKey="customers"
                background
                clockWise
                cornerRadius={12}
              />
              <Tooltip content={<LoyaltyTooltip />} />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 space-y-4 w-full">
          {loyaltyData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-[#16522D]/20 hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-4 w-4 rounded-full"
                  style={{ background: item.fill }}
                />
                <span className="font-medium text-slate-700">{item.name}</span>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-slate-900">{item.customers}</p>
                <p className="text-xs text-slate-500">Customers</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
