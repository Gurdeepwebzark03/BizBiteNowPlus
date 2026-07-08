import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const CustomTooltip = ({
  active,
  payload,
  label,
}) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
      <p className="mb-2 font-semibold text-slate-900">
        {label}
      </p>

      {payload.map((item) => (
        <div
          key={item.dataKey}
          className="flex items-center justify-between gap-6 text-sm"
        >
          <span
            style={{
              color: item.color,
            }}
          >
            {item.name}
          </span>

          <span className="font-semibold text-slate-900">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function ProductSalesChart({
  data,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Top Selling Products
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Compare actual product sales with monthly sales targets.
        </p>
      </div>

      <div className="h-[380px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={data}
            layout="vertical"
            barGap={8}
            barCategoryGap={20}
          >
            <CartesianGrid
              stroke="#E2E8F0"
              strokeDasharray="4 4"
            />

            <XAxis
              type="number"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#64748B",
                fontSize: 12,
              }}
            />

            <YAxis
              type="category"
              dataKey="product"
              tickLine={false}
              axisLine={false}
              width={110}
              tick={{
                fill: "#334155",
                fontSize: 13,
              }}
            />

            <Tooltip
              content={<CustomTooltip />}
            />

            <Legend
              wrapperStyle={{
                paddingTop: 12,
              }}
            />

            <Bar
              dataKey="actual"
              name="Units Sold"
              fill="#16522D"
              radius={[0, 8, 8, 0]}
            />

            <Bar
              dataKey="budget"
              name="Target"
              fill="#1E3A5F"
              radius={[0, 8, 8, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}