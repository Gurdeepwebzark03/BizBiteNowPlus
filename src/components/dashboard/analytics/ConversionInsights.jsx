import {
  Users,
  ShoppingCart,
  BadgeCheck,
  Percent,
} from "lucide-react";

export default function ConversionInsights({
  summary,
  chartData,
}) {
  const visitors = chartData.reduce(
    (sum, item) => sum + (item.visitors || 0),
    0
  );

  const orders = summary.orders;

  const conversion = summary.conversion;

  const addToCart = Math.round(visitors * 0.43);

  const checkout = Math.round(addToCart * 0.68);

  const abandoned = checkout - orders;

  const bestDay = chartData.reduce((prev, current) => {
    const prevRate =
      (prev.orders / prev.visitors) * 100;

    const currentRate =
      (current.orders / current.visitors) * 100;

    return currentRate > prevRate ? current : prev;
  });

  const cards = [
    {
      title: "Visitors",
      value: visitors.toLocaleString(),
      icon: Users,
    },
    {
      title: "Add To Cart",
      value: addToCart.toLocaleString(),
      icon: ShoppingCart,
    },
    {
      title: "Completed Orders",
      value: orders.toLocaleString(),
      icon: BadgeCheck,
    },
    {
      title: "Conversion",
      value: `${conversion}%`,
      icon: Percent,
    },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Conversion Insights
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Understand how visitors become customers.
          </p>
        </div>

        <div className="rounded-xl bg-[#1A4D2E]/5 px-4 py-2">
          <p className="text-xs text-slate-500">
            Best Conversion
          </p>

          <p className="font-semibold text-[#1A4D2E]">
            {bestDay.day}
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
                {card.value}
              </h4>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">
            Checkout Started
          </p>

          <h4 className="mt-2 text-2xl font-bold text-slate-900">
            {checkout.toLocaleString()}
          </h4>
        </div>

        <div className="rounded-xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">
            Abandoned Checkout
          </p>

          <h4 className="mt-2 text-2xl font-bold text-slate-900">
            {abandoned.toLocaleString()}
          </h4>
        </div>

        <div className="rounded-xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">
            Conversion Rate
          </p>

          <h4 className="mt-2 text-2xl font-bold text-[#1A4D2E]">
            {conversion}%
          </h4>
        </div>
      </div>
    </div>
  );
}