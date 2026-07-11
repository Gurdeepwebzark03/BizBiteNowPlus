import { Link } from "react-router-dom";
import DashboardWidget from "../../DashboardWidget";
import EmptyState from "../../../UI/EmptyState";
import ProductItem from "./ProductItem";
import { topProducts } from "../../../../data/dashboardData";

const TopProducts = () => {
  return (
    <DashboardWidget
      title="Top Products"
      subtitle="Best performing products"
      action={
        <Link
          to="/seller/products"
          className="text-xs font-medium text-[#1A4D2E] hover:underline transition-colors"
        >
          View All
        </Link>
      }
    >
      {topProducts.length === 0 ? (
        <EmptyState
          title="No products found"
          description="Products will appear here."
        />
      ) : (
      <div className="max-h-[700px] space-y-3 overflow-y-auto scrollbar-hide pr-1">
        {topProducts.map((product, index) => (
          <ProductItem
            key={product.id}
            product={product}
            rank={index + 1}
          />
        ))}
      </div>
      )}
    </DashboardWidget>
  );
};

export default TopProducts;