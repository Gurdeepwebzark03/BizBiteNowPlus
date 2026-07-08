import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { allProducts } from "../../data/products";
import CartBar from "../../components/customer/CartBar";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-[#FAFAF5]"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <p className="text-gray-400 text-[16px]">Product not found</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-[#1A4D2E] font-bold underline"
          style={{ minHeight: "44px" }}
        >
          Back to Store
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
    navigate("/cart");
  };

  return (
    <div className="bg-[#FAFAF5] min-h-screen" style={{ fontFamily: "Arial, sans-serif" }}>

      {/* Banner with Back Button */}
      <div
        className="relative overflow-hidden"
        style={{
          height: "260px",
          background: "linear-gradient(135deg, #1A4D2E 0%, #143D24 100%)",
        }}
      >
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "-70px",
            right: "-70px",
            width: "280px",
            height: "280px",
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white rounded-full shadow-md flex items-center justify-center"
          style={{ minHeight: "44px", minWidth: "44px" }}
        >
          <ChevronLeft size={22} className="text-[#1C1C1C]" />
        </button>
      </div>

      {/* Product Info */}
      <div className="px-4 pt-4">
        <div className="flex items-start justify-between gap-2">
          <h1
            className="font-bold text-[#1C1C1C] flex-1"
            style={{ fontSize: "26px" }}
          >
            {product.name}
          </h1>
          <span
            className="font-bold text-[#1A4D2E] shrink-0"
            style={{ fontSize: "22px" }}
          >
            ₹{product.price}
          </span>
        </div>

        <span
          className="inline-block mt-2 text-[14px] font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: "#F4E9D8", color: "#1C1C1C" }}
        >
          {product.category}
        </span>

        <p className="text-gray-500 text-[16px] mt-3 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Quantity Selector */}
      <div className="mt-4 px-4 py-4" style={{ backgroundColor: "#F0F0EA" }}>
        <p className="font-bold text-[#1C1C1C] text-[16px] mb-3">Quantity</p>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="bg-white border border-gray-200 rounded-lg flex items-center justify-center"
            style={{ minHeight: "40px", minWidth: "40px" }}
          >
            <Minus size={16} className="text-[#1C1C1C]" />
          </button>

          <span
            className="font-bold text-[#1C1C1C] w-8 text-center"
            style={{ fontSize: "20px" }}
          >
            {qty}
          </span>

          <button
            onClick={() => setQty((q) => q + 1)}
            className="rounded-lg flex items-center justify-center"
            style={{ minHeight: "40px", minWidth: "40px", backgroundColor: "#1A4D2E" }}
          >
            <Plus size={16} color="#fff" />
          </button>
        </div>

        <p className="text-[15px] text-gray-500 mt-3">
          Total: <span className="font-bold text-[#1C1C1C]">₹{product.price * qty}</span>
        </p>
      </div>

      {/* Add to Cart Button */}
      <div className="px-4 pt-6 pb-28">
        <button
          onClick={handleAddToCart}
          className="w-full text-white rounded-xl font-bold flex items-center justify-center gap-2"
          style={{ minHeight: "52px", fontSize: "17px", fontFamily: "Arial, sans-serif", backgroundColor: "#1A4D2E" }}
        >
          <ShoppingCart size={18} />
          Add to Cart — ₹{product.price * qty}
        </button>
      </div>

      <CartBar />
    </div>
  );
};

export default ProductDetail;
