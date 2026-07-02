import { Link } from "react-router-dom";
import DashboardWidget from "../../DashboardWidget";
import EmptyState from "../../../ui/EmptyState";
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
          className="text-sm font-medium text-[#1A4D2E] hover:underline"
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
        <div className="space-y-3">
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