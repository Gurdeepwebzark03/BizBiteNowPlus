import React from "react";
import Chart from "react-apexcharts";
import Card from "../UI/Card";
import { salesData } from "../../data/dashboardData";

export default function SalesChart() {
  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      fontFamily: "Inter, sans-serif",
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    colors: ["#1A4D2E"],

    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 5,
    },

    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: salesData.map((item) => item.day),

      labels: {
        style: {
          colors: "#64748B",
          fontSize: "13px",
        },
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      labels: {
        formatter: (value) => `₹${value}`,
        style: {
          colors: "#64748B",
          fontSize: "13px",
        },
      },
    },

    tooltip: {
      y: {
        formatter: (value) => `₹${value}`,
      },
    },

    legend: {
      show: false,
    },
  };

  const chartSeries = [
    {
      name: "Revenue",
      data: salesData.map((item) => item.sales),
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Revenue Analytics
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Last 7 days revenue overview
          </p>
        </div>

        <div className="mt-4 sm:mt-0">
          <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
            This Week
          </button>
        </div>
      </div>

      <Chart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height={340}
      />
    </Card>
  );
}