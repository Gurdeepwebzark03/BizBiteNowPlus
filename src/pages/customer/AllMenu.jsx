import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { categories } from "../../data/products";
import { useCart } from "../../context/CartContext";
import FoodTypeIndicator from "../../components/customer/FoodTypeIndicator";

const AllMenu = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div
      className="min-h-screen bg-[#FAFAF5]"
      style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div
        className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 flex items-center gap-3"
        style={{ minHeight: "64px" }}>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center text-[#1C1C1C] bg-gray-100 rounded-xl"
          style={{ minHeight: "40px", minWidth: "40px" }}>
          <ChevronLeft size={20} />
        </button>
        <h1 className="font-bold text-[#1C1C1C]" style={{ fontSize: "24px" }}>
          Full Menu
        </h1>
      </div>

      {/* Categories */}
      <div className="px-4 py-4 space-y-6 pb-10">
        {categories.map((category) => (
          <div key={category.id}>
            {/* Category heading */}
            <h2
              className="font-bold text-[#1C1C1C] uppercase tracking-wide mb-3"
              style={{ fontSize: "16px" }}>
              {category.name}
              <span
                className="ml-2 text-gray-400 font-normal normal-case"
                style={{ fontSize: "14px" }}>
                ({category.products.length} items)
              </span>
            </h2>

            {/* Products */}
            <div className="grid grid-cols-2 gap-3">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm cursor-pointer active:opacity-80">
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[#1C1C1C] text-[16px] flex items-center gap-1.5">
                      <FoodTypeIndicator isVeg={product.isVeg} />
                      {product.name}
                    </p>
                    <p
                      className="text-gray-400 mt-0.5 line-clamp-2"
                      style={{ fontSize: "13px" }}>
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold text-[#1C1C1C] text-[16px]">
                        ₹{product.price}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="shrink-0 border-2 border-[#1A4D2E] text-[#1A4D2E] font-bold rounded-full px-4 hover:bg-[#1A4D2E] hover:text-white transition-colors"
                    style={{ minHeight: "38px", fontSize: "15px" }}>
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMenu;
