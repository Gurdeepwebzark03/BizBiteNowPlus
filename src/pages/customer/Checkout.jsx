import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, MapPin, Loader2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, totalItems, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [errors, setErrors] = useState({});
  const [locLoading, setLocLoading] = useState(false);
  const [placing, setPlacing] = useState(false);

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

  const handlePlaceOrder = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setPlacing(true);
    setTimeout(() => {
      const orderId = "BN" + Date.now().toString().slice(-6);
      const order = {
        id: orderId,
        items: cart,
        total: totalPrice,
        name: form.name,
        phone: form.phone,
        address: form.address,
        status: "Order Placed",
        paymentMethod: "Cash on Delivery",
      };
      clearCart();
      navigate(`/order/${orderId}`, { state: { order } });
    }, 1200);
  };

  return (
    <div
      className="bg-[#FAFAF5] min-h-screen"
      style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div
        className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 flex items-center gap-2"
        style={{ minHeight: "56px" }}>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center text-[#1C1C1C]"
          style={{ minHeight: "44px", minWidth: "44px" }}>
          <ChevronLeft size={22} />
        </button>
        <h1 className="font-bold text-[#1C1C1C]" style={{ fontSize: "20px" }}>
          Checkout
        </h1>
      </div>

      <div className="px-4 py-4 space-y-4 pb-10">
        Delivery Details
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2
            className="font-bold text-[#1C1C1C] mb-4"
            style={{ fontSize: "17px" }}>
            Delivery Details
          </h2>

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
              className={`w-full border rounded-xl px-3 text-[16px] text-[#1C1C1C] outline-none focus:border-[#1A4D2E] transition-colors ${
                errors.name ? "border-red-400" : "border-gray-200"
              }`}
              style={{ minHeight: "44px", fontFamily: "Arial, sans-serif" }}
            />
            {errors.name && (
              <p className="text-red-500 text-[14px] mt-1">{errors.name}</p>
            )}
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
              className={`w-full border rounded-xl px-3 text-[16px] text-[#1C1C1C] outline-none focus:border-[#1A4D2E] transition-colors ${
                errors.phone ? "border-red-400" : "border-gray-200"
              }`}
              style={{ minHeight: "44px", fontFamily: "Arial, sans-serif" }}
            />
            {errors.phone && (
              <p className="text-red-500 text-[14px] mt-1">{errors.phone}</p>
            )}
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
              className={`w-full border rounded-xl px-3 py-3 text-[16px] text-[#1C1C1C] outline-none resize-none focus:border-[#1A4D2E] transition-colors ${
                errors.address ? "border-red-400" : "border-gray-200"
              }`}
              style={{ fontFamily: "Arial, sans-serif" }}
            />
            {errors.address && (
              <p className="text-red-500 text-[14px] mt-1">{errors.address}</p>
            )}
            <button
              onClick={getLocation}
              disabled={locLoading}
              className="mt-1 flex items-center gap-2 text-[#1A4D2E] text-[14px] font-semibold"
              style={{ minHeight: "44px" }}>
              {locLoading ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <MapPin size={14} />
              )}
              {locLoading ? "Getting location..." : "Use my current location"}
            </button>
          </div>
        </div>
        {/* Payment Method — COD only */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2
            className="font-bold text-[#1C1C1C] mb-3"
            style={{ fontSize: "17px" }}>
            Payment Method
          </h2>
          <div className="flex items-center gap-3 border-2 border-[#1A4D2E] rounded-xl px-4 py-3 bg-[#1A4D2E]/5">
            <div className="w-4 h-4 rounded-full border-2 border-[#1A4D2E] flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#1A4D2E]" />
            </div>
            <div>
              <p className="font-semibold text-[#1C1C1C] text-[16px]">
                Cash on Delivery
              </p>
              <p className="text-[14px] text-gray-400 mt-0.5">
                Pay when your order arrives
              </p>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2
            className="font-bold text-[#1C1C1C] mb-3"
            style={{ fontSize: "17px" }}>
            Order Summary
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-[16px] text-gray-500 mb-2">
              <span>
                {item.name} × {item.qty}
              </span>
              <span className="font-semibold text-[#1C1C1C]">
                ₹{item.price * item.qty}
              </span>
            </div>
          ))}

          <div className="flex justify-between text-[16px] text-gray-500 mt-2 pt-2 border-t border-gray-100">
            <span>Delivery</span>
            <span className="text-green-600 font-semibold">Free</span>
          </div>

          <div className="flex justify-between font-bold text-[#1C1C1C] mt-3 pt-3 border-t border-gray-100">
            <span>Total ({totalItems} items)</span>
            <span className="text-[#1A4D2E]">₹{totalPrice.toFixed(0)}</span>
          </div>
        </div>
        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          disabled={placing}
          className="w-full bg-[#1A4D2E] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-opacity"
          style={{
            minHeight: "52px",
            fontSize: "17px",
            fontFamily: "Arial, sans-serif",
            opacity: placing ? 0.8 : 1,
          }}>
          {placing ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Placing Order...
            </>
          ) : (
            <>Place Order — ₹{totalPrice.toFixed(0)}</>
          )}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
