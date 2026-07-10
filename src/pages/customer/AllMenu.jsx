import { useCallback, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeft, CheckCircle } from "lucide-react";
import { categories, allProducts } from "../../data/products";
import { useCart } from "../../context/CartContext";
import FoodTypeIndicator from "../../components/customer/FoodTypeIndicator";

const DARK_BG = "#B75527";
const CREAM = "#F5EBDD";
const ORANGE = "#E8622D";
const CHARCOAL = "#2E1509";

const AllMenu = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [toast, setToast] = useState("");
  const [searchParams] = useSearchParams();
  const searchQuery = (searchParams.get("search") || "").toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories;
    return categories
      .map((category) => ({
        ...category,
        products: category.products.filter((p) =>
          p.name.toLowerCase().includes(searchQuery)
        ),
      }))
      .filter((category) => category.products.length > 0);
  }, [searchQuery]);

  const showToast = useCallback((name) => {
    setToast(name);
    setTimeout(() => setToast(""), 2000);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "Arial, sans-serif", backgroundColor: DARK_BG }}>
      {/* Back button */}
      <div className="px-4 pt-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center rounded-xl text-white/80 hover:text-white transition-colors"
          style={{ minHeight: "40px", minWidth: "40px", backgroundColor: "rgba(255,255,255,0.08)" }}>
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Hero */}
      <div className="px-6 pt-6 pb-10 text-center">
        <h1
          className="font-black uppercase tracking-tight leading-none text-white"
          style={{ fontSize: "42px" }}>
          Crafted to Crave
        </h1>
        <p
          className="mt-4 max-w-md mx-auto text-white/70"
          style={{ fontSize: "14px" }}>
          {searchQuery
            ? `Showing results for "${searchParams.get("search")}"`
            : `${allProducts.length} dishes, one obsession — quality. Every plate is prepared fresh and dressed with ingredients that actually taste like something.`}
        </p>
      </div>

      {/* Categories */}
      <div className="px-4 pb-16 space-y-10 max-w-5xl mx-auto">
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 text-white/60" style={{ fontSize: "16px" }}>
            No dishes found
          </div>
        )}
        {filteredCategories.map((category) => (
          <div key={category.id}>
            {/* Category heading */}
            <h2
              className="font-bold uppercase tracking-wide mb-4 text-white"
              style={{ fontSize: "16px" }}>
              {category.name}
              <span
                className="ml-2 font-normal normal-case text-white/50"
                style={{ fontSize: "14px" }}>
                ({category.products.length} items)
              </span>
            </h2>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="rounded-2xl p-3 flex flex-col shadow-sm cursor-pointer active:opacity-80 transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: CREAM }}>
                  <div className="w-full rounded-xl bg-black/5 overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-3 flex-1">
                    <p
                      className="font-bold flex items-center gap-1.5"
                      style={{ color: CHARCOAL, fontSize: "15px" }}>
                      <FoodTypeIndicator isVeg={product.isVeg} />
                      {product.name}
                    </p>
                    <p
                      className="mt-1 line-clamp-2"
                      style={{ color: "rgba(46,21,9,0.55)", fontSize: "12px" }}>
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="font-bold" style={{ color: ORANGE, fontSize: "16px" }}>
                      ₹{product.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                        showToast(product.name);
                      }}
                      className="shrink-0 font-bold rounded-full px-4 text-white transition-opacity hover:opacity-90"
                      style={{ minHeight: "34px", fontSize: "13px", backgroundColor: ORANGE }}>
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* TOAST */}
      {toast && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 text-white px-5 py-3 rounded-2xl shadow-lg"
          style={{ backgroundColor: ORANGE, fontSize: "15px", whiteSpace: "nowrap" }}>
          <CheckCircle size={16} />
          <span><strong>{toast}</strong> added to cart</span>
        </div>
      )}
    </div>
  );
};

export default AllMenu;
