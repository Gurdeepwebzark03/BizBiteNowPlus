import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import ChartHeader from "./ChartHeader";
import RevenueSummary from "./RevenueSummary";
import RevenueInsights from "./RevenueInsights";
import OrdersInsights from "./OrdersInsights";
import AverageOrderInsights from "./AverageOrderInsights";
import ConversionInsights from "./ConversionInsights";

import { analyticsData } from "../../../data/salesChartData";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  const data = payload[0].payload;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
      <p className="font-semibold text-gray-900">{label}</p>

      <div className="mt-3 space-y-1 text-sm">
        <p className="font-medium text-[#1A4D2E]">
          Revenue: ₹{data.revenue.toLocaleString()}
        </p>

        <p className="text-gray-700">
          Orders: {data.orders}
        </p>

        <p className="text-gray-700">
          Avg Order: ₹{Math.round(data.revenue / data.orders)}
        </p>

        {data.visitors && (
          <p className="text-gray-700">
            Visitors: {data.visitors}
          </p>
        )}
      </div>
    </div>
  );
};

export default function SalesChart() {
  const [filter, setFilter] = useState("7d");
  const [activeMetric, setActiveMetric] = useState("revenue");

  const [chartData, setChartData] = useState([]);

  const [summary, setSummary] = useState({
    revenue: 0,
    revenueGrowth: 0,

    orders: 0,
    ordersGrowth: 0,

    averageOrder: 0,
    averageOrderGrowth: 0,

    conversion: 0,
    conversionGrowth: 0,
  });

  const loadAnalytics = (selectedFilter = filter) => {
    const analytics =
      analyticsData[selectedFilter] ||
      analyticsData["7d"];

    setChartData(analytics.chart);

    setSummary({
      revenue: analytics.summary.revenue,
      revenueGrowth: analytics.summary.revenueGrowth,

      orders: analytics.summary.orders,
      ordersGrowth: analytics.summary.ordersGrowth,

      averageOrder: analytics.summary.averageOrder,
      averageOrderGrowth:
        analytics.summary.averageOrderGrowth,

      conversion: analytics.summary.conversion,
      conversionGrowth:
        analytics.summary.conversionGrowth,
    });
  };

  useEffect(() => {
    loadAnalytics(filter);
  }, [filter]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <ChartHeader
        title="Sales Analytics"
        subtitle="Track your business performance"
        filter={filter}
        onFilterChange={setFilter}
        onRefresh={() => loadAnalytics(filter)}
      />

      <RevenueSummary
        summary={summary}
        activeMetric={activeMetric}
        onMetricChange={setActiveMetric}
      />

      <div className="mt-8 h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient
                id="salesGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#1A4D2E"
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#1A4D2E"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#E5E7EB"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#1A4D2E"
              strokeWidth={3}
              fill="url(#salesGradient)"
              activeDot={{
                r: 6,
                stroke: "#1A4D2E",
                strokeWidth: 2,
                fill: "#fff",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8">

        {activeMetric === "revenue" && (
          <RevenueInsights
            summary={summary}
            chartData={chartData}
          />
        )}

        {activeMetric === "orders" && (
          <OrdersInsights
            summary={summary}
            chartData={chartData}
          />
        )}

        {activeMetric === "averageOrder" && (
          <AverageOrderInsights
            summary={summary}
            chartData={chartData}
          />
        )}

        {activeMetric === "conversion" && (
          <ConversionInsights
            summary={summary}
            chartData={chartData}
          />
        )}

      </div>

    </div>
  );
}