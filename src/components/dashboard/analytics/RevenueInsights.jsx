import {
  IndianRupee,
  TrendingUp,
  Wallet,
  BadgePercent,
} from "lucide-react";

export default function RevenueInsights({
  summary,
  chartData,
}) {
  const highestRevenue = Math.max(
    ...chartData.map((item) => item.revenue)
  );

  const lowestRevenue = Math.min(
    ...chartData.map((item) => item.revenue)
  );

  const totalRevenue = chartData.reduce(
    (sum, item) => sum + item.revenue,
    0
  );

  const avgRevenue = Math.round(
    totalRevenue / chartData.length
  );

  const cards = [
    {
      title: "Highest Revenue",
      value: `₹${highestRevenue.toLocaleString()}`,
      icon: TrendingUp,
    },
    {
      title: "Lowest Revenue",
      value: `₹${lowestRevenue.toLocaleString()}`,
      icon: BadgePercent,
    },
    {
      title: "Average Revenue",
      value: `₹${avgRevenue.toLocaleString()}`,
      icon: Wallet,
    },
    {
      title: "Gross Revenue",
      value: `₹${summary.revenue.toLocaleString()}`,
      icon: IndianRupee,
    },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Revenue Insights
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Revenue performance based on the selected period.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1A4D2E]/30 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">
                  {card.title}
                </p>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1A4D2E]/5">
                  <Icon
                    size={18}
                    className="text-[#1A4D2E]"
                  />
                </div>
              </div>

              <h4 className="mt-4 text-2xl font-bold text-slate-900">
                {card.value}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}