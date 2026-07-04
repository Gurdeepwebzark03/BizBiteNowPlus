import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Package, Share2, Home, MapPin } from "lucide-react";

const STATUS_STYLES = {
  "Order Placed": "bg-[#F4A300]/20 text-[#1A4D2E]",
  "Delivered": "bg-green-100 text-green-700",
};

const OrderConfirmation = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const order = state?.order;
  const shareUrl = `${window.location.origin}/order/${id}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Order — BizBiteNow",
        text: `Track my order #${id}`,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  if (!order) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-[#FAFAF5]"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <p className="text-gray-400 text-[16px]">Order details not available.</p>
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

  return (
    <div
      className="bg-[#FAFAF5] min-h-screen"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Success Banner */}
      <div className="bg-[#1A4D2E] text-white px-4 py-10 flex flex-col items-center text-center">
        <CheckCircle size={60} className="text-[#F4A300] mb-3" />
        <h1 className="font-bold" style={{ fontSize: "24px" }}>
          Order Placed!
        </h1>
        <p className="text-white/75 text-[16px] mt-1">
          Thank you, {order.name}. Your order is confirmed.
        </p>
        <div className="mt-4 bg-white/10 px-5 py-2 rounded-full text-[16px] font-semibold tracking-wide">
          Order #{order.id}
        </div>
      </div>

      <div className="px-4 py-4 space-y-4 pb-10">

        {/* Status */}
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package size={18} className="text-[#1A4D2E]" />
            <span className="font-semibold text-[#1C1C1C] text-[16px]">
              Order Status
            </span>
          </div>
          <span
            className={`text-[14px] font-bold px-3 py-1 rounded-full ${
              STATUS_STYLES[order.status] || STATUS_STYLES["Order Placed"]
            }`}
          >
            {order.status}
          </span>
        </div>

        {/* Items */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2
            className="font-bold text-[#1C1C1C] mb-3"
            style={{ fontSize: "17px" }}
          >
            Items Ordered
          </h2>

          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-[16px] text-gray-500 mb-2"
            >
              <span>
                {item.name} × {item.qty}
              </span>
              <span className="font-semibold text-[#1C1C1C]">
                ₹{item.price * item.qty}
              </span>
            </div>
          ))}

          <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between font-bold text-[#1C1C1C]">
            <span>Total</span>
            <span className="text-[#1A4D2E]">₹{order.total.toFixed(0)}</span>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={16} className="text-[#1A4D2E] shrink-0" />
            <h2
              className="font-bold text-[#1C1C1C]"
              style={{ fontSize: "17px" }}
            >
              Delivery Address
            </h2>
          </div>
          <p className="text-[16px] text-gray-500 leading-relaxed">
            {order.address}
          </p>
        </div>

        {/* Payment */}
        <div className="bg-white rounded-xl p-4 shadow-sm flex justify-between items-center">
          <span className="font-semibold text-[#1C1C1C] text-[16px]">Payment</span>
          <span className="text-[16px] text-gray-500">{order.paymentMethod}</span>
        </div>

        {/* Share Order Link */}
        <button
          onClick={handleShare}
          className="w-full border-2 border-[#1A4D2E] text-[#1A4D2E] rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
          style={{ minHeight: "48px", fontFamily: "Arial, sans-serif" }}
        >
          <Share2 size={16} />
          {copied ? "Link Copied!" : "Share Order Link"}
        </button>

        {/* Back to Store */}
        <button
          onClick={() => navigate("/")}
          className="w-full bg-[#F4A300] text-[#1C1C1C] rounded-xl font-bold flex items-center justify-center gap-2"
          style={{ minHeight: "52px", fontFamily: "Arial, sans-serif" }}
        >
          <Home size={16} />
          Back to Store
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
