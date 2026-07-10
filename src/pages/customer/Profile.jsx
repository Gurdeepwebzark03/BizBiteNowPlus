import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyProfile, logoutCustomer } from "../../api/customer/authApi";
import {
  Bell, Crown, Wallet, Gift, ClipboardList, MapPin,
  CreditCard, HelpCircle, LogOut, ChevronRight,
  X, Banknote, Smartphone, Check,
} from "lucide-react";
import NotificationPanel from "../../components/customer/NotificationPanel";
import { allProducts } from "../../data/products";

const ORANGE = "#E8622D";
const CREAM = "#FBE7DD";
const CHARCOAL = "#1C1C1C";

const wallet = { balance: 0 };
const rewards = { points: 0 };

const notificationTags = ["New", "Offer", "Trending", "Back in stock", "Chef's pick"];
const notifications = allProducts.slice(0, 5).map((p, i) => ({
  id: p.id,
  image: p.image,
  tag: notificationTags[i % notificationTags.length],
  title: p.name,
  meta: p.category,
  price: p.price,
}));

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  useEffect(() => {
    getMyProfile()
      .then(setUser)
      .catch(() => navigate("/customer/onboarding", { replace: true }));
  }, [navigate]);

  const handleLogout = async () => {
    await logoutCustomer();
    navigate("/", { replace: true });
  };

  if (!user) return null;

  const initials = user.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const menuItems = [
    { icon: ClipboardList, label: "My Orders", action: () => navigate("/customer/orders") },
    { icon: MapPin, label: "Addresses" },
    { icon: CreditCard, label: "Payment Methods", action: () => setShowPayment(true) },
    { icon: Gift, label: "Rewards & Offers" },
    { icon: HelpCircle, label: "Help & Support" },
  ];

  return (
    <div
      className="min-h-screen bg-[#FAFAF5] px-4 py-5"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shrink-0"
              style={{ backgroundColor: ORANGE, fontSize: "18px" }}
            >
              {initials}
            </div>
            <div>
              <p className="font-bold" style={{ color: CHARCOAL, fontSize: "18px" }}>
                {user.name}
              </p>
              <span
                className="inline-flex items-center gap-1 text-white font-bold rounded-full px-2.5 py-0.5 mt-1"
                style={{ backgroundColor: ORANGE, fontSize: "11px" }}
              >
                <Crown size={11} fill="currentColor" />
                Premium Member
              </span>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowNotifications((v) => !v)}
              className="relative flex items-center justify-center text-gray-500 shrink-0 rounded-xl hover:bg-[#FBE7DD] hover:text-[#E8622D] transition-colors cursor-pointer"
              style={{ minHeight: "40px", minWidth: "40px" }}
            >
              <Bell size={20} />
            </button>
            {showNotifications && (
              <NotificationPanel
                notifications={notifications}
                onClose={() => setShowNotifications(false)}
                onBrowseMenu={() => {
                  setShowNotifications(false);
                  navigate("/menu");
                }}
              />
            )}
          </div>
        </div>

        {/* Wallet + Rewards */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: CREAM }}
            >
              <Wallet size={18} style={{ color: ORANGE }} />
            </div>
            <div className="min-w-0">
              <p className="text-gray-400 truncate" style={{ fontSize: "12px" }}>
                QuickBite Wallet
              </p>
              <p className="font-bold" style={{ color: CHARCOAL, fontSize: "16px" }}>
                ₹{wallet.balance}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: CREAM }}
            >
              <Gift size={18} style={{ color: ORANGE }} />
            </div>
            <div className="min-w-0">
              <p className="text-gray-400 truncate" style={{ fontSize: "12px" }}>
                Rewards Points
              </p>
              <p className="font-bold" style={{ color: CHARCOAL, fontSize: "16px" }}>
                {rewards.points.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>

        {/* Menu list */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-5">
          {menuItems.map(({ icon: Icon, label, action }, i) => (
            <button
              key={label}
              onClick={action}
              className={`w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-gray-50 transition-colors cursor-pointer ${
                i < menuItems.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <Icon size={19} className="text-gray-500 shrink-0" />
              <span className="flex-1 font-medium" style={{ color: CHARCOAL, fontSize: "15px" }}>
                {label}
              </span>
              <ChevronRight size={18} className="text-gray-300 shrink-0" />
            </button>
          ))}
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 bg-white rounded-2xl shadow-sm px-4 py-3.5 text-red-500 font-semibold hover:bg-red-50 transition-colors cursor-pointer"
          style={{ fontSize: "15px" }}
        >
          <LogOut size={19} className="shrink-0" />
          Logout
        </button>
      </div>

      {/* Payment method modal */}
      {showPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowPayment(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold" style={{ color: CHARCOAL, fontSize: "20px" }}>
                Payment Method
              </h2>
              <button
                onClick={() => setShowPayment(false)}
                className="flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
                style={{ width: "32px", height: "32px" }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3">
              {[
                { key: "cod", label: "Cash on Delivery", desc: "Pay when your order arrives", Icon: Banknote },
                { key: "upi", label: "UPI", desc: "Pay instantly via UPI apps", Icon: Smartphone },
              ].map(({ key, label, desc, Icon }) => {
                const active = paymentMethod === key;
                return (
                  <button
                    key={key}
                    onClick={() => setPaymentMethod(key)}
                    className="w-full flex items-center gap-3 rounded-2xl p-4 text-left transition-colors cursor-pointer"
                    style={{
                      border: `2px solid ${active ? ORANGE : "#E5E7EB"}`,
                      backgroundColor: active ? CREAM : "#FFFFFF",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: active ? ORANGE : "#F3F4F6" }}
                    >
                      <Icon size={18} style={{ color: active ? "#FFFFFF" : "#6B7280" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold" style={{ color: CHARCOAL, fontSize: "15px" }}>
                        {label}
                      </p>
                      <p className="text-gray-400" style={{ fontSize: "12px" }}>
                        {desc}
                      </p>
                    </div>
                    {active && (
                      <span
                        className="shrink-0 rounded-full flex items-center justify-center"
                        style={{ width: "22px", height: "22px", backgroundColor: ORANGE }}
                      >
                        <Check size={13} color="#fff" strokeWidth={3} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setShowPayment(false)}
              className="w-full mt-5 font-bold rounded-full text-white transition-opacity hover:opacity-90 cursor-pointer"
              style={{ minHeight: "48px", fontSize: "15px", backgroundColor: ORANGE }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
