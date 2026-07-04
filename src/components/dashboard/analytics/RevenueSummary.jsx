import {
  ArrowUpRight,
  ArrowDownRight,
  IndianRupee,
  ShoppingBag,
  Receipt,
  Percent,
} from "lucide-react";

export default function RevenueSummary({
  summary,
  activeMetric,
  onMetricChange,
}) {
  const cards = [
    {
      key: "revenue",
      title: "Revenue",
      value: `₹${summary.revenue.toLocaleString()}`,
      growth: summary.revenueGrowth,
      icon: IndianRupee,
      primary: true,
    },
    {
      key: "orders",
      title: "Orders",
      value: summary.orders.toLocaleString(),
      growth: summary.ordersGrowth,
      icon: ShoppingBag,
    },
    {
      key: "averageOrder",
      title: "Avg Order",
      value: `₹${summary.averageOrder.toLocaleString()}`,
      growth: summary.averageOrderGrowth,
      icon: Receipt,
    },
    {
      key: "conversion",
      title: "Conversion",
      value: `${summary.conversion}%`,
      growth: summary.conversionGrowth,
      icon: Percent,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        const positive = card.growth >= 0;

        return (
          <button
            key={card.key}
            type="button"
            onClick={() => onMetricChange(card.key)}
            className={`
              group
              w-full
              rounded-xl
              border
              p-4
              text-left
              transition-all
              duration-300
              ${
                activeMetric === card.key
                  ? "scale-[1.02] shadow-lg ring-2 ring-[#1A4D2E]"
                  : "hover:-translate-y-1 hover:shadow-md"
              }
              ${
                card.primary
                  ? "border-[#1A4D2E] bg-[#1A4D2E] text-white"
                  : "border-slate-200 bg-white hover:border-[#1A4D2E]/30"
              }
            `}
          >
            <div className="flex items-start justify-between">
              <div>
                <p
                  className={`text-[13px] font-medium ${
                    card.primary
                      ? "text-white/75"
                      : "text-slate-500"
                  }`}
                >
                  {card.title}
                </p>

                <h2
                  className={`mt-2 text-[28px] font-bold leading-none ${
                    card.primary
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {card.value}
                </h2>
              </div>

              <div
                className={`
                  flex h-9 w-9 items-center justify-center rounded-lg
                  transition-all
                  ${
                    card.primary
                      ? "bg-white/10"
                      : "bg-[#1A4D2E]/5 group-hover:bg-[#1A4D2E]/10"
                  }
                `}
              >
                <Icon
                  size={18}
                  className={
                    card.primary
                      ? "text-white"
                      : "text-[#1A4D2E]"
                  }
                />
              </div>
            </div>

            <div
              className={`mt-4 flex items-center gap-1 text-[12px] ${
                card.primary
                  ? "text-white"
                  : positive
                  ? "text-emerald-600"
                  : "text-red-500"
              }`}
            >
              {positive ? (
                <ArrowUpRight size={14} />
              ) : (
                <ArrowDownRight size={14} />
              )}

              <span className="font-semibold">
                {Math.abs(card.growth)}%
              </span>

              <span
                className={
                  card.primary
                    ? "text-white/70"
                    : "text-slate-500"
                }
              >
                vs previous period
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}