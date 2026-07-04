import {
  ShoppingBag,
  CheckCircle2,
  XCircle,
  Clock3,
} from "lucide-react";

export default function OrdersInsights({
  summary,
  chartData,
}) {
  const totalOrders = summary.orders;

  const completed = Math.round(totalOrders * 0.89);
  const cancelled = Math.round(totalOrders * 0.05);
  const pending = Math.round(totalOrders * 0.04);
  const returned =
    totalOrders - completed - cancelled - pending;

  const peakDay = chartData.reduce((prev, current) =>
    current.orders > prev.orders ? current : prev
  );

  const avgOrders = Math.round(
    totalOrders / chartData.length
  );

  const cards = [
    {
      title: "Total Orders",
      value: totalOrders,
      icon: ShoppingBag,
    },
    {
      title: "Completed",
      value: completed,
      icon: CheckCircle2,
    },
    {
      title: "Cancelled",
      value: cancelled,
      icon: XCircle,
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
    },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Order Insights
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Order performance for the selected period.
          </p>
        </div>

        <div className="rounded-xl bg-[#1A4D2E]/5 px-4 py-2">
          <p className="text-xs text-slate-500">
            Peak Period
          </p>

          <p className="font-semibold text-[#1A4D2E]">
            {peakDay.day}
          </p>
        </div>
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
                {card.value.toLocaleString()}
              </h4>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">
            Average Orders / Period
          </p>

          <h4 className="mt-2 text-2xl font-bold text-slate-900">
            {avgOrders}
          </h4>
        </div>

        <div className="rounded-xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">
            Return Rate
          </p>

          <h4 className="mt-2 text-2xl font-bold text-slate-900">
            {((returned / totalOrders) * 100).toFixed(1)}%
          </h4>
        </div>
      </div>
    </div>
  );
}