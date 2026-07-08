import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

const CartBar = () => {
  const { totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <button
        onClick={() => navigate("/cart")}
        className="w-full text-white px-4 flex items-center justify-between shadow-lg"
        style={{
          backgroundColor: "#1A4D2E",
          minHeight: "56px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div className="flex items-center gap-2">
          <ShoppingCart size={18} />
          <span className="font-semibold text-[15px]">
            {totalItems} item{totalItems > 1 ? "s" : ""} in cart
          </span>
        </div>
        <span className="font-bold text-[15px]">₹{totalPrice.toFixed(0)} →</span>
      </button>
    </div>
  );
};

export default CartBar;
