import { useState } from "react";

import AnalyticsSummaryCards from "./AnalyticsSummaryCards";
import ActualVsBudgetChart from "./ActualVsBudgetChart";
import CurrentVsPastChart from "./CurrentVsPastChart";
import ProductSalesChart from "./ProductSalesChart";
import BudgetDonutChart from "./BudgetDonutChart";


import {
  analyticsSummary,
  actualVsBudgetData,
  currentVsPastData,
  productSalesData,
  budgetDonutData,
  availableYears,
  selectedYear,
} from "./analyticsData";

export default function SalesChart() {
  const [year, setYear] = useState(selectedYear);

  return (
    <div className="space-y-8">

      {/* KPI Cards */}
      <AnalyticsSummaryCards
        summary={analyticsSummary}
      />

      {/* Revenue Section */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">

        <div className="xl:col-span-8">
          <ActualVsBudgetChart
            data={actualVsBudgetData}
          />
        </div>

        <div className="space-y-6 xl:col-span-4">


          <CurrentVsPastChart
            data={currentVsPastData}
          />

        </div>

      </div>

      {/* Product & Orders */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">

        <div className="xl:col-span-8">
          <ProductSalesChart
            data={productSalesData}
          />
        </div>

        <div className="xl:col-span-4">
          <BudgetDonutChart
            data={budgetDonutData}
          />
        </div>

      </div>

    </div>
  );
}