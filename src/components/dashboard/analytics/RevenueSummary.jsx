import {
  ArrowUpRight,
  ArrowDownRight,
  IndianRupee,
} from "lucide-react";

const RevenueSummary = ({
  revenue = 18540,
  growth = 12.5,
  orders = 42,
  averageOrder = 441,
}) => {
  const isPositive = growth >= 0;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {/* Revenue */}
      <div className="rounded-2xl bg-[#1A4D2E] p-6 text-white">
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/80">
            Total Revenue
          </p>

          <IndianRupee size={22} />
        </div>

        <h2 className="mt-4 text-3xl font-bold">
          ₹{revenue.toLocaleString()}
        </h2>

        <div className="mt-3 flex items-center gap-2 text-sm">
          {isPositive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}

          <span>
            {Math.abs(growth)}%
          </span>

          <span className="text-white/70">
            vs last week
          </span>
        </div>
      </div>

      {/* Orders */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <p className="text-sm text-gray-500">
          Orders
        </p>

        <h3 className="mt-3 text-3xl font-bold text-gray-900">
          {orders}
        </h3>
      </div>

      {/* Average Order */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <p className="text-sm text-gray-500">
          Avg Order
        </p>

        <h3 className="mt-3 text-3xl font-bold text-gray-900">
          ₹{averageOrder}
        </h3>
      </div>

      {/* Conversion */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <p className="text-sm text-gray-500">
          Conversion
        </p>

        <h3 className="mt-3 text-3xl font-bold text-gray-900">
          6.8%
        </h3>
      </div>
    </div>
  );
};

export default RevenueSummary;