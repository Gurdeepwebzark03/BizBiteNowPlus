import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Users,
  Gift,
  IndianRupee,
  Percent,
  TrendingUp,
  Trophy,
  Target,
} from "lucide-react";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

import { getCampaigns } from "../../../api/offers";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const dateFormatter = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });

const COLORS = [
  "#16522D",
  "#1E3A5F",
  "#D4A017",
  "#8FA6C1",
  "#B7C4D3",
];

const RedemptionTracking = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaigns()
      .then(setCampaigns)
      .catch(() => {
        setCampaigns([
          {
            id: "1",
            name: "Eid Special",
            sentAt: "2026-06-20",
            sentCount: 142,
            redeemedCount: 37,
            revenue: 1840000,
          },
          {
            id: "2",
            name: "Diwali Dhamaka",
            sentAt: "2026-06-12",
            sentCount: 210,
            redeemedCount: 98,
            revenue: 4200000,
          },
          {
            id: "3",
            name: "Birthday Surprise",
            sentAt: "2026-06-02",
            sentCount: 1,
            redeemedCount: 1,
            revenue: 45000,
            auto: true,
          },
        ]);
      });
  }, []);

  const stats = useMemo(() => {
    const totalSent = campaigns.reduce(
      (sum, c) => sum + c.sentCount,
      0
    );

    const totalRedeemed = campaigns.reduce(
      (sum, c) => sum + c.redeemedCount,
      0
    );

    const totalRevenue = campaigns.reduce(
      (sum, c) => sum + c.revenue,
      0
    );

    const redemptionRate = totalSent
      ? ((totalRedeemed / totalSent) * 100).toFixed(1)
      : 0;

    return {
      totalSent,
      totalRedeemed,
      totalRevenue,
      redemptionRate,
    };
  }, [campaigns]);

  const chartData = campaigns
    .map((campaign) => ({
      name: campaign.name,
      redeemed: campaign.redeemedCount,
      revenue: campaign.revenue / 100,
      sent: campaign.sentCount,
      conversion:
        ((campaign.redeemedCount / campaign.sentCount) * 100).toFixed(1),
    }))
    .sort((a, b) => b.redeemed - a.redeemed);

  const bestRevenue = [...campaigns].sort(
    (a, b) => b.revenue - a.revenue
  )[0];

  const highestConversion = [...campaigns].sort(
    (a, b) =>
      b.redeemedCount / b.sentCount -
      a.redeemedCount / a.sentCount
  )[0];

  const highestReach = [...campaigns].sort(
    (a, b) => b.sentCount - a.sentCount
  )[0];

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;

    const item = payload[0].payload;

    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
        <h3 className="font-semibold text-slate-900">{item.name}</h3>

        <div className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between gap-8">
            <span className="text-slate-500">Redeemed</span>
            <span className="font-semibold">
              {item.redeemed}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Conversion</span>
            <span className="font-semibold text-[#16522D]">
              {item.conversion}%
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Revenue</span>
            <span className="font-semibold">
              {currency.format(item.revenue)}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-[#16522D]/10 p-3">
            <TrendingUp
              className="text-[#16522D]"
              size={24}
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#16522D]">
              Offer Performance
            </h2>

            <p className="text-sm text-slate-500">
              Track campaign performance, revenue and
              customer engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8 p-6">

        {/* KPI Cards */}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Campaigns"
            value={campaigns.length}
            icon={<Megaphone size={22} />}
            dark
          />

          <StatCard
            title="Customers Reached"
            value={stats.totalSent}
            icon={<Users size={22} />}
          />

          <StatCard
            title="Redeemed"
            value={stats.totalRedeemed}
            icon={<Gift size={22} />}
          />

          <StatCard
            title="Conversion"
            value={`${stats.redemptionRate}%`}
            icon={<Percent size={22} />}
          />

        </div>

        {/* Revenue + Best Campaign */}

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 p-6">

            <div className="flex justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Revenue Generated
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#16522D]">
                  {currency.format(stats.totalRevenue / 100)}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Total campaign revenue
                </p>

              </div>

              <div className="rounded-xl bg-[#16522D]/10 p-3">
                <IndianRupee
                  className="text-[#16522D]"
                  size={24}
                />
              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-slate-200 p-6 lg:col-span-2">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  🏆 Best Campaign
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#16522D]">
                  {bestRevenue?.name}
                </h2>

                <p className="mt-2 text-slate-500">
                  Highest revenue generated
                </p>

              </div>

              <div className="rounded-full bg-yellow-100 p-4">
                <Trophy className="text-yellow-600" />
              </div>

            </div>
          </div>

        </div>

        {/* Horizontal Performance Chart */}

        <div className="rounded-2xl border border-slate-200 p-6">

          <div className="mb-6">

            <h3 className="text-lg font-semibold text-[#16522D]">
              Top Performing Campaigns
            </h3>

            <p className="text-sm text-slate-500">
              Ranked by redeemed offers.
            </p>

          </div>

          <div className="h-[340px]">

            <ResponsiveContainer>

              <BarChart
                layout="vertical"
                data={chartData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 50,
                  bottom: 10,
                }}
              >

                <defs>
                  <linearGradient
                    id="offerGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#16522D" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#E5E7EB"
                />

                <XAxis type="number" />

                <YAxis
                  dataKey="name"
                  type="category"
                  width={130}
                />

                <Tooltip content={<CustomTooltip />} />

                <Bar
                  dataKey="redeemed"
                  radius={[0, 10, 10, 0]}
                >
                  {chartData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>
                {/* Performance Insights */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Highest Revenue
              </p>

              <div className="rounded-xl bg-green-100 p-3">
                <IndianRupee
                  size={20}
                  className="text-green-700"
                />
              </div>
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {bestRevenue?.name}
            </h3>

            <p className="mt-2 text-2xl font-bold text-[#16522D]">
              {currency.format(bestRevenue?.revenue / 100 || 0)}
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Best performing campaign
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Best Conversion
              </p>

              <div className="rounded-xl bg-blue-100 p-3">
                <Target
                  size={20}
                  className="text-blue-700"
                />
              </div>
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {highestConversion?.name}
            </h3>

            <p className="mt-2 text-2xl font-bold text-blue-700">
              {(
                (highestConversion?.redeemedCount /
                  highestConversion?.sentCount) *
                100
              ).toFixed(1)}
              %
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Highest redemption rate
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Largest Reach
              </p>

              <div className="rounded-xl bg-purple-100 p-3">
                <Users
                  size={20}
                  className="text-purple-700"
                />
              </div>
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {highestReach?.name}
            </h3>

            <p className="mt-2 text-2xl font-bold text-purple-700">
              {highestReach?.sentCount}
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Customers reached
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Total Revenue
              </p>

              <div className="rounded-xl bg-yellow-100 p-3">
                <TrendingUp
                  size={20}
                  className="text-yellow-700"
                />
              </div>
            </div>

            <h3 className="mt-5 text-3xl font-bold text-[#16522D]">
              {currency.format(stats.totalRevenue / 100)}
            </h3>

            <p className="mt-3 text-sm text-slate-500">
              Across all campaigns
            </p>
          </div>

        </div>

        {/* Campaign History */}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

          <div className="border-b border-slate-200 px-6 py-5">

            <h3 className="text-lg font-semibold text-[#16522D]">
              Campaign History
            </h3>

            <p className="text-sm text-slate-500">
              Performance summary for every campaign.
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-slate-50">

                <tr>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Campaign
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Sent
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Progress
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Revenue
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Date
                  </th>

                </tr>

              </thead>

              <tbody>

                {campaigns.map((campaign) => {

                  const conversion =
                    (campaign.redeemedCount /
                      campaign.sentCount) *
                    100;

                  return (

                    <tr
                      key={campaign.id}
                      className="border-t border-slate-100 transition hover:bg-slate-50"
                    >

                      <td className="px-6 py-5">

                        <div>

                          <p className="font-semibold text-slate-800">
                            {campaign.name}
                          </p>

                          {campaign.auto && (
                            <span className="mt-2 inline-flex rounded-full bg-[#16522D]/10 px-3 py-1 text-xs font-medium text-[#16522D]">
                              🤖 Auto Campaign
                            </span>
                          )}

                        </div>

                      </td>

                      <td className="px-6 py-5">
                        {campaign.sentCount}
                      </td>

                      <td className="px-6 py-5">

                        <div className="w-44">

                          <div className="mb-2 flex justify-between text-xs text-slate-500">

                            <span>
                              {campaign.redeemedCount}/
                              {campaign.sentCount}
                            </span>

                            <span>
                              {conversion.toFixed(1)}%
                            </span>

                          </div>

                          <div className="h-2 rounded-full bg-slate-200">

                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-[#16522D] to-green-400 transition-all duration-700"
                              style={{
                                width: `${conversion}%`,
                              }}
                            />

                          </div>

                        </div>

                      </td>

                      <td className="px-6 py-5 font-semibold text-[#16522D]">
                        {currency.format(
                          campaign.revenue / 100
                        )}
                      </td>

                      <td className="px-6 py-5 text-slate-500">
                        {dateFormatter(campaign.sentAt)}
                      </td>

                    </tr>

                  );

                })}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </motion.section>

  );
};

/* ---------- Reusable KPI Card ---------- */

const StatCard = ({
  title,
  value,
  icon,
  dark = false,
}) => (
  <div
    className={`rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-lg ${
      dark
        ? "bg-[#16522D] text-white"
        : "border border-slate-200 bg-white"
    }`}
  >
    <div className="flex items-center justify-between">

      <p
        className={`text-sm ${
          dark ? "text-white/80" : "text-slate-500"
        }`}
      >
        {title}
      </p>

      <div
        className={
          dark
            ? ""
            : "rounded-xl bg-[#16522D]/10 p-2 text-[#16522D]"
        }
      >
        {icon}
      </div>

    </div>

    <h2
      className={`mt-5 text-3xl font-bold ${
        dark ? "text-white" : "text-slate-900"
      }`}
    >
      {value}
    </h2>

  </div>
);

export default RedemptionTracking;