import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Trash2, ShoppingBag, Plus, Minus, AlertTriangle } from "lucide-react";
import { useCart } from "../../context/CartContext";

const PLUS_PURPLE = "#1A4D2E";
const PLUS_LAVENDER = "#E6F4EA";
const PRIMARY_GREEN = "#1A4D2E";
const CHARCOAL = "#1C1C1C";
const CREAM = "#FAFAF5";

const MIN_ORDER = 1000;

const PlusBadge = () => (
  <span
    className="absolute -top-2.5 left-3 z-10 text-white text-[14px] font-bold px-2.5 py-0.5 rounded-full shadow-sm"
    style={{ backgroundColor: PLUS_PURPLE }}
  >
    Plus
  </span>
);

const PlusSection = ({ label, children }) => (
  <div
    className="relative rounded-2xl pt-6 px-4 pb-4"
    style={{ backgroundColor: PLUS_LAVENDER }}
  >
    <PlusBadge />
    {label && (
      <h3
        className="font-bold text-[18px] mb-2.5"
        style={{ color: PLUS_PURPLE }}
      >
        {label}
      </h3>
    )}
    {children}
  </div>
);

const Toggle = ({ options, value, onChange }) => (
  <div className="flex items-center gap-2.5">
    {options.map((opt) => {
      const active = value === opt.key;
      return (
        <button
          key={opt.key}
          onClick={() => onChange(opt.key)}
          className="flex-1 rounded-xl font-bold text-[18px] transition-colors"
          style={{
            minHeight: "44px",
            backgroundColor: active ? PLUS_PURPLE : "#FFFFFF",
            color: active ? "#FFFFFF" : PLUS_PURPLE,
          }}
        >
          {opt.label}
        </button>
      );
    })}
  </div>
);

const Cart = () => {
  const { cart, updateQty, removeFromCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [schedule, setSchedule] = useState("now");
  const [orderNotes, setOrderNotes] = useState("");

  // Empty state
  if (cart.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen px-4 text-center"
        style={{ fontFamily: "Arial, sans-serif", backgroundColor: CREAM }}
      >
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-5">
          <ShoppingBag size={40} className="text-gray-300" />
        </div>
        <h2 className="font-bold" style={{ fontSize: "24px", color: CHARCOAL }}>
          Your cart is empty
        </h2>
        <p className="text-gray-400 text-[18px] mt-2">
          Add items from the store to get started
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 text-white rounded-xl px-8 font-bold"
          style={{ minHeight: "48px", fontFamily: "Arial, sans-serif", backgroundColor: PRIMARY_GREEN }}
        >
          Browse Store
        </button>
      </div>
    );
  }

  const grandTotal = totalPrice;
  const amountToMinOrder = Math.max(0, MIN_ORDER - totalPrice);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "Arial, sans-serif", backgroundColor: CREAM }}
    >
      {/* Header */}
      <div className="px-4 pt-5 pb-3 flex items-center gap-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center -ml-1"
          style={{ minHeight: "36px", minWidth: "36px", color: CHARCOAL }}
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="font-bold" style={{ fontSize: "22px", color: CHARCOAL }}>
          Your cart
        </h1>
        <span className="text-[18px] text-gray-400 ml-1">({totalItems} items)</span>
      </div>

      <div className="px-4 pb-40 space-y-3">

        {/* Cart Items */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {cart.map((item, index) => (
            <div key={item.id}>
              <div className="p-4 flex items-center gap-3">

                {/* Image */}
                <div className="w-16 h-16 rounded-xl bg-gray-100 shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[18px]" style={{ color: CHARCOAL }}>{item.name}</h3>
                  <p className="font-bold text-[18px] mt-0.5" style={{ color: PRIMARY_GREEN }}>
                    ₹{item.price}
                  </p>
                </div>

                {/* Qty stepper + remove */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="flex items-center justify-center font-bold"
                      style={{ minHeight: "36px", minWidth: "36px", color: PRIMARY_GREEN }}
                    >
                      <Minus size={14} />
                    </button>
                    <span
                      className="font-bold text-[18px] px-2"
                      style={{ minWidth: "24px", textAlign: "center", color: CHARCOAL }}
                    >
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="flex items-center justify-center font-bold"
                      style={{ minHeight: "36px", minWidth: "36px", color: PRIMARY_GREEN }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center justify-center text-red-400"
                    style={{ minHeight: "36px", minWidth: "36px" }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Item subtotal */}
              <div className="px-4 pb-3 flex justify-between items-center">
                <span className="text-[16px] text-gray-400">
                  {item.qty} x ₹{item.price}
                </span>
                <span className="text-[18px] font-bold" style={{ color: CHARCOAL }}>
                  ₹{item.price * item.qty}
                </span>
              </div>

              {index < cart.length - 1 && (
                <div className="mx-4 border-t border-gray-100" />
              )}
            </div>
          ))}
        </div>

        {/* Pickup vs Delivery */}
        <PlusSection label="Pickup vs delivery">
          <Toggle
            options={[
              { key: "delivery", label: "Delivery" },
              { key: "pickup", label: "Pickup" },
            ]}
            value={deliveryMethod}
            onChange={setDeliveryMethod}
          />
        </PlusSection>

        {/* Schedule order */}
        <PlusSection label="Schedule order">
          <Toggle
            options={[
              { key: "now", label: "Now" },
              { key: "later", label: "Later" },
            ]}
            value={schedule}
            onChange={setSchedule}
          />
        </PlusSection>

        {/* Order notes */}
        <PlusSection label="Order notes">
          <input
            type="text"
            value={orderNotes}
            onChange={(e) => setOrderNotes(e.target.value)}
            placeholder="Any special instructions"
            className="w-full rounded-xl px-4 text-[18px] placeholder-gray-400"
            style={{ minHeight: "44px", backgroundColor: "#FFFFFF", color: CHARCOAL }}
          />
        </PlusSection>

        {/* Minimum order nudge */}
        {amountToMinOrder > 0 && (
          <PlusSection>
            <p className="font-semibold text-[18px] flex items-center gap-2" style={{ color: PLUS_PURPLE }}>
              <AlertTriangle size={16} />
              Add ₹{amountToMinOrder} more to reach ₹{MIN_ORDER.toLocaleString("en-IN")} minimum order
            </p>
          </PlusSection>
        )}

        {/* Bill Summary */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="font-bold mb-3" style={{ fontSize: "19px", color: CHARCOAL }}>
            Bill summary
          </h2>

          <div className="space-y-2">
            <div className="flex justify-between text-[18px] text-gray-500">
              <span>Item total</span>
              <span className="font-semibold" style={{ color: CHARCOAL }}>₹{totalPrice}</span>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between items-center">
            <span className="font-bold" style={{ fontSize: "19px", color: CHARCOAL }}>
              Running total
            </span>
            <span className="font-bold" style={{ fontSize: "21px", color: PRIMARY_GREEN }}>
              ₹{grandTotal}
            </span>
          </div>
        </div>

      </div>

      {/* Checkout Button — fixed bottom */}
      <div className="fixed bottom-0 left-0 right-0">
        <button
          onClick={() => navigate("/checkout")}
          className="w-full text-white font-bold flex items-center justify-center"
          style={{
            minHeight: "56px",
            fontSize: "19px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: PRIMARY_GREEN,
          }}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
