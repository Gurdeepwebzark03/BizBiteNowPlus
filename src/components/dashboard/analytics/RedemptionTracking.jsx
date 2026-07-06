import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Users,
  Gift,
  IndianRupee,
  Percent,
  TrendingUp,
} from "lucide-react";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
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

const RedemptionTracking = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaigns()
      .then(setCampaigns)
      .catch(() => {
        setCampaigns([
          {
            id: "1",
            name: "Diwali Dhamaka",
            sentAt: "2026-06-20",
            sentCount: 142,
            redeemedCount: 37,
            revenue: 1840000,
          },
          {
            id: "2",
            name: "Eid Special",
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
      ? Math.round((totalRedeemed / totalSent) * 100)
      : 0;

    return {
      totalSent,
      totalRedeemed,
      totalRevenue,
      redemptionRate,
    };
  }, [campaigns]);

  const chartData = campaigns.map((campaign) => ({
    name: campaign.name,
    redeemed: campaign.redeemedCount,
  }));

  const CustomTooltip = ({
    active,
    payload,
    label,
  }) => {
    if (!active || !payload?.length) return null;

    return (
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
        <p className="font-semibold">
          {label}
        </p>

        <p className="mt-2 text-[#16522d]">
          Redeemed : {payload[0].value}
        </p>
      </div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Header */}

      <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">

        <div className="rounded-xl bg-[#16522d]/10 p-3">
          <TrendingUp
            size={22}
            className="text-[#16522d]"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#16522d]">
            Offer Performance
          </h2>

          <p className="text-sm text-slate-500">
            Track campaign performance and
            customer engagement.
          </p>
        </div>

      </div>

      <div className="space-y-8 p-6">

        {/* Summary Cards */}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl bg-[#16522d] p-6 text-white">

            <div className="flex items-center justify-between">

              <p className="text-sm text-white/80">
                Campaigns Sent
              </p>

              <Megaphone size={22} />

            </div>

            <h2 className="mt-4 text-3xl font-bold">
              {campaigns.length}
            </h2>

          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-500">
                Customers Reached
              </p>

              <Users
                size={22}
                className="text-[#16522d]"
              />

            </div>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              {stats.totalSent}
            </h2>

          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-500">
                Offers Redeemed
              </p>

              <Gift
                size={22}
                className="text-[#16522d]"
              />

            </div>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              {stats.totalRedeemed}
            </h2>

          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-500">
                Redemption Rate
              </p>

              <Percent
                size={22}
                className="text-[#16522d]"
              />

            </div>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              {stats.redemptionRate}%
            </h2>

          </div>

        </div>
                {/* Revenue + Chart */}

        <div className="grid gap-6 xl:grid-cols-3">

          {/* Revenue Card */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Revenue Generated
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#16522d]">
                  {currency.format(stats.totalRevenue / 100)}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Total revenue from redeemed offers
                </p>

              </div>

              <div className="rounded-xl bg-[#16522d]/10 p-3">

                <IndianRupee
                  size={24}
                  className="text-[#16522d]"
                />

              </div>

            </div>

          </div>

          {/* Redemption Chart */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 xl:col-span-2">

            <div className="mb-6">

              <h3 className="text-lg font-semibold text-[#16522d]">
                Campaign Redemption
              </h3>

              <p className="text-sm text-slate-500">
                Number of customers who redeemed each campaign.
              </p>

            </div>

            <div className="h-80">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <BarChart data={chartData}>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#E5E7EB"
                  />

                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                  />

                  <YAxis
                    tickLine={false}
                    axisLine={false}
                  />

                  <Tooltip
                    content={<CustomTooltip />}
                  />

                  <Bar
                    dataKey="redeemed"
                    radius={[8, 8, 0, 0]}
                    fill="#16522d"
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

        {/* Campaign History */}

        <div className="rounded-2xl border border-slate-200 bg-white">

          <div className="border-b border-slate-200 px-6 py-5">

            <h3 className="text-lg font-semibold text-[#16522d]">
              Campaign History
            </h3>

            <p className="text-sm text-slate-500">
              Review all manual and automatic campaigns.
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-slate-50">

                <tr>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Campaign
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Sent
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Redeemed
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Revenue
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                    Date
                  </th>

                </tr>

              </thead>

              <tbody>

                {campaigns.map((campaign) => (

                  <tr
                    key={campaign.id}
                    className="border-t border-slate-100 hover:bg-slate-50"
                  >

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div>

                          <p className="font-medium text-slate-800">
                            {campaign.name}
                          </p>

                          {campaign.auto && (
                            <span className="mt-1 inline-flex rounded-full bg-[#16522d]/10 px-2 py-1 text-xs font-medium text-[#16522d]">
                              Auto
                            </span>
                          )}

                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-5">
                      {campaign.sentCount}
                    </td>

                    <td className="px-6 py-5">
                      {campaign.redeemedCount}
                    </td>

                    <td className="px-6 py-5 font-medium text-[#16522d]">
                      {currency.format(campaign.revenue / 100)}
                    </td>

                    <td className="px-6 py-5 text-slate-500">
                      {dateFormatter(campaign.sentAt)}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </motion.section>
  );
};

export default RedemptionTracking;