import {
  Banknote,
  ShoppingBag,
  Wallet,
  CreditCard,
  BadgeCheck,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

export default function TodaysEarnings({ summary }) {
  const codPercentage = Math.round(
    (summary.codPending / (summary.codPending + summary.onlineReceived)) * 100,
  );

  const onlinePercentage = 100 - codPercentage;

  const metrics = [
    {
      title: "Today's Orders",
      value: summary.todayOrders,
      icon: ShoppingBag,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
    },
    {
      title: "Average Order",
      value: `₹${summary.averageOrderValue.toLocaleString("en-IN")}`,
      icon: Wallet,
      iconColor: "text-violet-600",
      iconBg: "bg-violet-100",
    },
    {
      title: "COD Collection",
      value: `₹${summary.codPending.toLocaleString("en-IN")}`,
      icon: CreditCard,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-100",
    },
    {
      title: "Online Received",
      value: `₹${summary.onlineReceived.toLocaleString("en-IN")}`,
      icon: BadgeCheck,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-100",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero */}

      <div className="relative overflow-hidden rounded-3xl bg-white p-8 text-black shadow-2xl">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full  blur-3xl" />

        <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl mt-7 bg-green-100 p-4 text-green-700 ">
                <Banknote size={32} />
              </div>

              <div>
                <p className="text-white/80">Today's Earnings</p>

                <h2 className="mt-0 text-5xl  font-black">
                  ₹{summary.todayEarnings.toLocaleString("en-IN")}
                </h2>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-lg">
              <ArrowUpRight size={22} />

              <span>
                Revenue increased by <strong>{summary.revenueGrowth}%</strong>{" "}
                compared to yesterday.
              </span>
            </div>
          </div>

          <div className="w-full max-w-sm">
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-black">Daily Progress</span>

                <TrendingUp size={20} />
              </div>

              <div className="mt-6 h-4 overflow-hidden rounded-full bg-green-200">
                <div
                  className="h-full rounded-full bg-green-700 transition-all duration-700"
                  style={{
                    width: `${Math.min(summary.revenueGrowth * 4, 100)}%`,
                  }}
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-white/80">
                <span>Target Progress</span>

                <span>{Math.min(summary.revenueGrowth * 4, 100)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">{metric.title}</p>

                  <h3 className="mt-3 text-3xl font-bold text-slate-900">
                    {metric.value}
                  </h3>
                </div>

                <div className={`rounded-2xl p-4 ${metric.iconBg}`}>
                  <Icon size={24} className={metric.iconColor} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Payment Distribution */}

      <div className="grid gap-6 xl:grid-cols-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-7">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Payment Distribution
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Revenue collected by payment method
              </p>
            </div>

            <TrendingUp className="text-green-600" size={24} />
          </div>

          {/* COD */}

          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-slate-700">
                Cash on Delivery
              </span>

              <span className="font-bold text-green-600">
                {codPercentage}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-green-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-900 transition-all duration-700"
                style={{
                  width: `${codPercentage}%`,
                }}
              />
            </div>

            <p className="mt-2 text-sm text-slate-500">
              ₹{summary.codPending.toLocaleString("en-IN")}
            </p>
          </div>

          {/* Online */}

          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-slate-700">
                Online Payments
              </span>

              <span className="font-bold text-green-600">
                {onlinePercentage}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-green-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-900 transition-all duration-700"
                style={{
                  width: `${onlinePercentage}%`,
                }}
              />
            </div>

            <p className="mt-2 text-sm text-slate-500">
              ₹{summary.onlineReceived.toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        {/* Insights */}

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-5">
          <h3 className="text-xl font-bold text-slate-900">
            Business Insights
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Today's performance highlights
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4 rounded-2xl bg-white shadow-lg p-4">
              <div className="rounded-xl bg-green-300 p-2 text-green-700">
                <TrendingUp size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">Revenue Growth</h4>

                <p className="mt-1 text-sm text-slate-500">
                  Revenue increased by <strong>{summary.revenueGrowth}%</strong>{" "}
                  over yesterday.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white shadow-lg p-4">
              <div className="rounded-xl bg-blue-300 p-2 text-blue-700">
                <Wallet size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Healthy Average Order
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Current average order value is ₹
                  {summary.averageOrderValue.toLocaleString("en-IN")}.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white shadow-lg p-4">
              <div className="rounded-xl bg-violet-300 p-2 text-violet-700">
                <BadgeCheck size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Digital Payments
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Online payments account for{" "}
                  <strong>{onlinePercentage}%</strong> of today's earnings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white shadow-lg p-4">
              <div className="rounded-xl bg-orange-300 p-2 text-orange-700">
                <CreditCard size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">COD Collection</h4>

                <p className="mt-1 text-sm text-slate-500">
                  Pending COD collection is ₹
                  {summary.codPending.toLocaleString("en-IN")}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
