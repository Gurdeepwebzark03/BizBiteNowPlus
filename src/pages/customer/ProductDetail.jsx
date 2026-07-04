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

      {/* Banner Image with Back Button */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
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
            style={{ fontSize: "22px" }}
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

        <span className="inline-block mt-2 text-[14px] font-semibold px-3 py-1 rounded-full bg-[#F4A300]/20 text-[#1A4D2E]">
          {product.category}
        </span>

        <p className="text-gray-500 text-[16px] mt-3 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Divider */}
      <div className="mx-4 mt-4 border-t border-gray-100" />

      {/* Quantity Selector */}
      <div className="px-4 pt-4">
        <p className="font-bold text-[#1C1C1C] text-[16px] mb-3">Quantity</p>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="bg-gray-100 rounded-xl flex items-center justify-center"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            <Minus size={18} className="text-[#1C1C1C]" />
          </button>

          <span
            className="font-bold text-[#1C1C1C] w-8 text-center"
            style={{ fontSize: "22px" }}
          >
            {qty}
          </span>

          <button
            onClick={() => setQty((q) => q + 1)}
            className="bg-[#1A4D2E] text-white rounded-xl flex items-center justify-center"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            <Plus size={18} />
          </button>
        </div>

        <p className="text-[16px] text-gray-500 mt-2">
          Total:{" "}
          <span className="font-bold text-[#1A4D2E]">₹{product.price * qty}</span>
        </p>
      </div>

      {/* Add to Cart Button */}
      <div className="px-4 pt-6 pb-28">
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#1A4D2E] text-white rounded-xl font-bold flex items-center justify-center gap-2"
          style={{ minHeight: "52px", fontSize: "17px", fontFamily: "Arial, sans-serif" }}
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
