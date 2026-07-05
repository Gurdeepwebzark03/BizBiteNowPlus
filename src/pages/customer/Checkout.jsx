import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, MapPin, Loader2, Lock } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { getMyProfile } from "../../api/customer/authApi";

const GREEN = "#1A4D2E";
const LIGHT_GREEN = "#E6F4EA";
const CHARCOAL = "#1C1C1C";
const CREAM = "#FAFAF5";

const loyalty = { earned: 6, total: 10 };

const PlusBadge = () => (
  <span
    className="absolute -top-2.5 left-3 z-10 text-white text-[14px] font-bold px-2.5 py-0.5 rounded-full shadow-sm"
    style={{ backgroundColor: GREEN }}
  >
    Plus
  </span>
);

const PlusSection = ({ label, children }) => (
  <div className="relative rounded-2xl pt-6 px-4 pb-4" style={{ backgroundColor: LIGHT_GREEN }}>
    <PlusBadge />
    {label && (
      <h3 className="font-bold text-[18px] mb-2.5" style={{ color: GREEN }}>
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
            backgroundColor: active ? GREEN : "#FFFFFF",
            color: active ? "#FFFFFF" : GREEN,
          }}
        >
          {opt.label}
        </button>
      );
    })}
  </div>
);

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [errors, setErrors] = useState({});
  const [locLoading, setLocLoading] = useState(false);
  const [placing, setPlacing] = useState(false);
  const [editingAddress, setEditingAddress] = useState(false);
  const [autoFilled, setAutoFilled] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  // Prefill delivery details from the customer's saved auth profile
  useEffect(() => {
    getMyProfile()
      .then((user) => {
        setForm((prev) => ({
          ...prev,
          name: user.name || prev.name,
          phone: user.phone || prev.phone,
          address: user.address || prev.address,
        }));
        setAutoFilled(!!(user.name && user.address));
      })
      .catch(() => {});
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported. Please enter address manually.");
      return;
    }
    setLocLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
          );
          const data = await res.json();
          setForm((prev) => ({
            ...prev,
            address: data.display_name || `${latitude}, ${longitude}`,
          }));
        } catch {
          setForm((prev) => ({
            ...prev,
            address: `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`,
          }));
        }
        setAutoFilled(true);
        setLocLoading(false);
      },
      () => {
        alert("Could not get location. Please enter your address manually.");
        setLocLoading(false);
      },
    );
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      errs.phone = "Enter a valid 10-digit mobile number";
    if (!form.address.trim()) errs.address = "Address is required";
    return errs;
  };

  const handleDoneEditing = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setAutoFilled(false);
    setEditingAddress(false);
  };

  const deliveryFee = 0;
  const grandTotal = totalPrice + deliveryFee;

  const handlePlaceOrder = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setEditingAddress(true);
      return;
    }
    setPlacing(true);
    setTimeout(() => {
      const orderId = "BN" + Date.now().toString().slice(-6);
      const order = {
        id: orderId,
        items: cart,
        total: grandTotal,
        name: form.name,
        phone: form.phone,
        address: form.address,
        status: "Order Placed",
        paymentMethod: paymentMethod === "upi" ? "UPI" : "Cash on Delivery",
      };
      clearCart();
      navigate(`/order/${orderId}`, { state: { order } });
    }, 1200);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "Arial, sans-serif", backgroundColor: CREAM }}>
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
          Checkout
        </h1>
      </div>

      <div className="px-4 pb-40 space-y-3">
        {/* Delivery Address */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold" style={{ fontSize: "19px", color: CHARCOAL }}>
              Delivery address
            </h2>
            <button
              onClick={() =>
                editingAddress ? handleDoneEditing() : setEditingAddress(true)
              }
              className="font-bold text-[16px]"
              style={{ color: GREEN }}
            >
              {editingAddress ? "Done" : "Change"}
            </button>
          </div>

          {!editingAddress ? (
            <>
              <div className="flex items-start gap-2.5">
                <MapPin size={18} style={{ color: GREEN }} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[18px]" style={{ color: CHARCOAL }}>
                    {form.name || "Add your name"}
                  </p>
                  <p className="text-[16px] text-gray-400 mt-0.5">
                    {form.address || "Add your delivery address"}
                  </p>
                  <p className="text-[16px] text-gray-400">
                    {form.phone ? `+91 ${form.phone}` : "Add your phone number"}
                  </p>
                </div>
              </div>
              {autoFilled && (
                <div className="flex items-center gap-1.5 mt-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GREEN }} />
                  <span className="text-[14px] font-semibold" style={{ color: GREEN }}>
                    Auto-filled from your location
                  </span>
                </div>
              )}
            </>
          ) : (
            <div>
              <div className="mb-3">
                <label className="block text-[14px] font-semibold text-gray-500 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full border rounded-xl px-3 text-[16px] outline-none transition-colors ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                  style={{ minHeight: "44px", color: CHARCOAL, fontFamily: "Arial, sans-serif" }}
                />
                {errors.name && <p className="text-red-500 text-[14px] mt-1">{errors.name}</p>}
              </div>

              <div className="mb-3">
                <label className="block text-[14px] font-semibold text-gray-500 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className={`w-full border rounded-xl px-3 text-[16px] outline-none transition-colors ${
                    errors.phone ? "border-red-400" : "border-gray-200"
                  }`}
                  style={{ minHeight: "44px", color: CHARCOAL, fontFamily: "Arial, sans-serif" }}
                />
                {errors.phone && <p className="text-red-500 text-[14px] mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-gray-500 mb-1">
                  Delivery Address *
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your full delivery address"
                  rows={3}
                  className={`w-full border rounded-xl px-3 py-3 text-[16px] outline-none resize-none transition-colors ${
                    errors.address ? "border-red-400" : "border-gray-200"
                  }`}
                  style={{ color: CHARCOAL, fontFamily: "Arial, sans-serif" }}
                />
                {errors.address && <p className="text-red-500 text-[14px] mt-1">{errors.address}</p>}
                <button
                  onClick={getLocation}
                  disabled={locLoading}
                  className="mt-1 flex items-center gap-2 font-semibold text-[14px]"
                  style={{ minHeight: "44px", color: GREEN }}
                >
                  {locLoading ? <Loader2 size={14} className="animate-spin" /> : <MapPin size={14} />}
                  {locLoading ? "Getting location..." : "Use my current location"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Loyalty stamp progress */}
        <PlusSection label="Loyalty stamp progress">
          <p className="text-[16px] font-semibold" style={{ color: CHARCOAL }}>
            {loyalty.earned} of {loyalty.total} stamps - {loyalty.total - loyalty.earned} more for a free item
          </p>
        </PlusSection>

        {/* Payment method */}
        <PlusSection label="Payment method">
          <Toggle
            options={[
              { key: "cash", label: "Cash" },
              { key: "upi", label: "UPI" },
            ]}
            value={paymentMethod}
            onChange={setPaymentMethod}
          />
        </PlusSection>

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
            <div className="flex justify-between text-[18px] text-gray-500">
              <span>Delivery fee</span>
              <span className="font-semibold" style={{ color: CHARCOAL }}>₹{deliveryFee}</span>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between items-center">
            <span className="font-bold" style={{ fontSize: "19px", color: CHARCOAL }}>
              Grand total
            </span>
            <span className="font-bold" style={{ fontSize: "21px", color: GREEN }}>
              ₹{grandTotal}
            </span>
          </div>
        </div>
      </div>

      {/* Place Order Button — fixed bottom */}
      <div className="fixed bottom-0 left-0 right-0">
        <button
          onClick={handlePlaceOrder}
          disabled={placing}
          className="w-full text-white font-bold flex items-center justify-center gap-2 transition-opacity"
          style={{
            minHeight: "56px",
            fontSize: "19px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: GREEN,
            opacity: placing ? 0.8 : 1,
          }}
        >
          {placing ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Placing Order...
            </>
          ) : (
            <>
              <Lock size={16} />
              Place order · ₹{grandTotal}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
