import React, { memo, useMemo, useState } from "react";

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
  selectedYear,
} from "./analyticsData";

function SalesChart() {
  const [year] = useState(selectedYear);

  const summary = useMemo(() => analyticsSummary, []);
  const actualBudget = useMemo(() => actualVsBudgetData, []);
  const currentPast = useMemo(() => currentVsPastData, []);
  const productSales = useMemo(() => productSalesData, []);
  const budgetData = useMemo(() => budgetDonutData, []);

  return (
    <div className="space-y-8">
      <AnalyticsSummaryCards summary={summary} />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <ActualVsBudgetChart
            data={actualBudget}
            year={year}
          />
        </div>

        <div className="space-y-6 xl:col-span-4">
          <CurrentVsPastChart
            data={currentPast}
            year={year}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <ProductSalesChart
            data={productSales}
            year={year}
          />
        </div>

        <div className="xl:col-span-4">
          <BudgetDonutChart
            data={budgetData}
            year={year}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(SalesChart);