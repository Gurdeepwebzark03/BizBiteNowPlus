import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getMyProfile,
  saveProfile,
  logoutCustomer,
} from "../../api/customer/authApi";
import { useTheme } from "../../context/ThemeContext";
import {
  ChevronRight,
  ChevronDown,
  X,
  Check,
  Loader2,
  User,
  MapPin,
  CreditCard,
  SlidersHorizontal,
  Settings as SettingsIcon,
  Home,
  Banknote,
  Smartphone,
  Search,
  Truck,
  ReceiptText,
  Utensils,
  MessageCircle,
  Phone,
  Mail,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import Modal from "../../components/customer/common/Modal";
import Avatar from "../../components/customer/common/Avatar";
import PrimaryButton from "../../components/customer/common/PrimaryButton";
import SecondaryButton from "../../components/customer/common/SecondaryButton";
import SettingsCard from "../../components/customer/profile/SettingsCard";
import NotificationSettings from "../../components/customer/profile/NotificationSettings";

const PAYMENT_STORAGE_KEY = "customerPaymentMethod";
const NOTIF_STORAGE_KEY = "customerNotificationSettings";

const defaultNotifSettings = {
  orders: true,
  offers: true,
  rewards: true,
  email: false,
  security: true,
};

const helpQuickActions = [
  { icon: Truck, label: "Delivery and tracking" },
  { icon: ReceiptText, label: "Refunds and cancellations" },
  { icon: Utensils, label: "Menu and orders" },
  { icon: CreditCard, label: "Payments and billing" },
];

const faqItems = [
  {
    q: "Where is my order?",
    a: "Track your order in real time from the My Orders tab.",
  },
  {
    q: "How do I get a refund?",
    a: "Refunds are processed within 3-5 business days after approval.",
  },
  {
    q: "Can I edit my order after placing it?",
    a: "You can edit an order within 2 minutes of placing it, from My Orders.",
  },
  {
    q: "Do you offer table reservations?",
    a: "Table reservations aren't available yet — we're working on it!",
  },
];

const STEP_COUNT = 4;

const Profile = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [user, setUser] = useState(null);

  const [paymentMethod, setPaymentMethod] = useState(
    () => localStorage.getItem(PAYMENT_STORAGE_KEY) || "upi",
  );
  const [paymentSet, setPaymentSet] = useState(
    () => !!localStorage.getItem(PAYMENT_STORAGE_KEY),
  );
  const [showPayment, setShowPayment] = useState(false);

  const [showAddresses, setShowAddresses] = useState(false);
  const [editingAddress, setEditingAddress] = useState(false);
  const [addressForm, setAddressForm] = useState({ address: "" });
  const [addressErrors, setAddressErrors] = useState({});
  const [locLoading, setLocLoading] = useState(false);
  const [savingAddress, setSavingAddress] = useState(false);

  const [showAccountSettings, setShowAccountSettings] = useState(false);
  const [showAppSettings, setShowAppSettings] = useState(false);
  const [notifSettings, setNotifSettings] = useState(() => {
    const stored = localStorage.getItem(NOTIF_STORAGE_KEY);
    if (!stored) return defaultNotifSettings;
    try {
      return JSON.parse(stored);
    } catch {
      return defaultNotifSettings;
    }
  });
  const [showHelp, setShowHelp] = useState(false);
  const [helpSearch, setHelpSearch] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    getMyProfile()
      .then(setUser)
      .catch(() => setUser({ name: "", phone: "", address: "" }));
  }, [navigate]);

  const handleLogout = async () => {
    await logoutCustomer();
    navigate("/", { replace: true });
  };

  const openPersonalDetails = () => navigate("/customer/profile/personal-details");

  // ---- Address ----
  const openAddresses = () => {
    setAddressForm({ address: user.address || "" });
    setAddressErrors({});
    setEditingAddress(!user.address);
    setShowAddresses(true);
  };

  const getAddressLocation = () => {
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
          setAddressForm((prev) => ({
            ...prev,
            address: data.display_name || `${latitude}, ${longitude}`,
          }));
        } catch {
          setAddressForm((prev) => ({
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

  const handleSaveAddress = async () => {
    if (!addressForm.address.trim()) {
      setAddressErrors({ address: "Address is required" });
      return;
    }
    setSavingAddress(true);
    try {
      const { user: updatedUser } = await saveProfile({
        address: addressForm.address,
      });
      setUser(updatedUser);
      setEditingAddress(false);
    } catch (err) {
      setAddressErrors({ address: err.message || "Could not save address" });
    }
    setSavingAddress(false);
  };

  // ---- Payment ----
  const handleSavePayment = () => {
    localStorage.setItem(PAYMENT_STORAGE_KEY, paymentMethod);
    setPaymentSet(true);
    setShowPayment(false);
  };

  // ---- App settings ----
  const handleToggleNotif = (id, value) => {
    setNotifSettings((prev) => {
      const next = { ...prev, [id]: value };
      localStorage.setItem(NOTIF_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const handleSettingsItemClick = (id) => {
    if (id === "support") {
      setShowAccountSettings(false);
      setShowHelp(true);
    } else if (id === "favorites") {
      navigate("/customer/menu");
    } else if (id === "language") {
      setShowAccountSettings(false);
      navigate("/customer/profile/language");
    } else if (id === "appearance") {
      setShowAccountSettings(false);
      navigate("/customer/profile/appearance");
    }
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This can't be undone.",
      )
    ) {
      alert("Account deletion isn't available yet.");
    }
  };

  const filteredFaqs = faqItems.filter((item) =>
    item.q.toLowerCase().includes(helpSearch.trim().toLowerCase()),
  );

  if (!user) return null;

  // ---- Profile completion ----
  const steps = [
    { key: "name", done: !!user.name, action: openPersonalDetails },
    { key: "phone", done: !!user.phone, action: openPersonalDetails },
    { key: "address", done: !!user.address, action: openAddresses },
    { key: "payment", done: paymentSet, action: () => setShowPayment(true) },
  ];
  const completedCount = steps.filter((s) => s.done).length;
  const percent = Math.round((completedCount / STEP_COUNT) * 100);
  const nextStep = steps.find((s) => !s.done);
  const stepMarks = [0, 25, 50, 75, 100];

  const menuItems = [
    { icon: User, label: "Personal Details", action: openPersonalDetails },
    { icon: MapPin, label: "Saved Addresses", action: openAddresses },
    {
      icon: CreditCard,
      label: "Payment Methods",
      action: () => setShowPayment(true),
    },
    {
      icon: SettingsIcon,
      label: "Account Settings",
      action: () => setShowAccountSettings(true),
    },
    {
      icon: SlidersHorizontal,
      label: "App Settings",
      action: () => setShowAppSettings(true),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6">
      <div className="px-4 py-5">
        <div className="w-full min-w-0 max-w-[1760px]">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1
                className="font-bold text-slate-900 dark:text-white"
                style={{ fontSize: "26px" }}>
                My Profile
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1" style={{ fontSize: "14px" }}>
                Manage your account, addresses, and preferences.
              </p>
            </div>
            <button
              onClick={openPersonalDetails}
              className="shrink-0 cursor-pointer">
              <Avatar name={user.name} size="md" />
            </button>
          </div>

          {/* Complete your profile */}
          {percent < 100 ? (
            <div className="bg-white dark:bg-[#181A1B] rounded-2xl shadow-sm p-5 mb-5">
              {/* Stepper */}
              <div className="flex items-center mb-4">
                {stepMarks.map((mark, i) => (
                  <div
                    key={mark}
                    className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center">
                      <div
                        className="rounded-full flex items-center justify-center shrink-0"
                        style={{
                          width: "18px",
                          height: "18px",
                          backgroundColor:
                            mark <= percent ? "var(--primary)" : darkMode ? "#374151" : "#E5E7EB",
                        }}>
                        {mark <= percent && mark > 0 && (
                          <Check size={11} color="#fff" strokeWidth={3} />
                        )}
                      </div>
                      <span
                        className="text-gray-400 dark:text-slate-500 mt-1"
                        style={{ fontSize: "10px" }}>
                        {mark}%
                      </span>
                    </div>
                    {i < stepMarks.length - 1 && (
                      <div
                        className="flex-1 h-[2px] mx-1 mb-4"
                        style={{
                          backgroundColor:
                            stepMarks[i + 1] <= percent
                              ? "var(--primary)"
                              : darkMode ? "#374151" : "#E5E7EB",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p
                    className="font-bold text-slate-900 dark:text-white"
                    style={{ fontSize: "15px" }}>
                    Complete your profile
                  </p>
                  <p
                    className="text-gray-500 dark:text-slate-400 mt-0.5"
                    style={{ fontSize: "13px" }}>
                    {STEP_COUNT - completedCount} step
                    {STEP_COUNT - completedCount > 1 ? "s" : ""} left — unlock
                    faster checkout and personalized offers.
                  </p>
                </div>
                <PrimaryButton size="sm" onClick={nextStep?.action}>
                  Continue
                </PrimaryButton>
              </div>
            </div>
          ) : (
            <div
              className="rounded-2xl p-5 mb-5 flex items-center gap-3"
              style={{
                backgroundColor: "var(--primary-light)",
                border: "1px solid var(--primary-border)",
              }}>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "var(--primary)" }}>
                <Check size={16} color="#fff" strokeWidth={3} />
              </div>
              <p
                className="font-semibold"
                style={{ color: "var(--primary)", fontSize: "14px" }}>
                Your profile is complete!
              </p>
            </div>
          )}

          {/* Menu list */}
          <div className="bg-white dark:bg-[#181A1B] rounded-2xl shadow-sm overflow-hidden mb-5">
            {menuItems.map(({ icon: Icon, label, action }, i) => (
              <button
                key={label}
                onClick={action}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer ${
                  i < menuItems.length - 1 ? "border-b border-gray-100 dark:border-[#A9BDCF]/20" : ""
                }`}>
                <Icon size={19} className="text-gray-500 dark:text-slate-400 shrink-0" />
                <span
                  className="flex-1 font-medium text-slate-900 dark:text-white"
                  style={{ fontSize: "15px" }}>
                  {label}
                </span>
                <ChevronRight size={18} className="text-gray-300 dark:text-slate-600 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Address modal */}
        <Modal
          open={showAddresses}
          onClose={() => setShowAddresses(false)}
          title="Delivery Address"
          size="sm">
          {!editingAddress ? (
            <>
              {user.address ? (
                <div
                  className="w-full flex items-start gap-3 rounded-2xl p-4 text-left"
                  style={{
                    border: "2px solid var(--primary)",
                    backgroundColor: "var(--primary-light)",
                  }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--primary)" }}>
                    <Home size={18} style={{ color: "#FFFFFF" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-bold text-slate-900 dark:text-white"
                      style={{ fontSize: "15px" }}>
                      {user.name}
                    </p>
                    <p
                      className="text-gray-400 dark:text-slate-500 mt-0.5"
                      style={{ fontSize: "13px" }}>
                      {user.address}
                    </p>
                  </div>
                  <span
                    className="shrink-0 rounded-full flex items-center justify-center"
                    style={{
                      width: "22px",
                      height: "22px",
                      backgroundColor: "var(--primary)",
                    }}>
                    <Check size={13} color="#fff" strokeWidth={3} />
                  </span>
                </div>
              ) : (
                <div className="text-center py-6">
                  <MapPin size={28} className="mx-auto text-gray-300 dark:text-slate-600 mb-2" />
                  <p className="text-gray-400 dark:text-slate-500" style={{ fontSize: "14px" }}>
                    No address on file
                  </p>
                </div>
              )}

              <SecondaryButton
                fullWidth
                className="mt-5"
                onClick={() => setEditingAddress(true)}>
                Change Address
              </SecondaryButton>
            </>
          ) : (
            <div>
              <label className="block text-[14px] font-semibold text-gray-500 dark:text-slate-400 mb-1">
                Delivery Address *
              </label>
              <textarea
                name="address"
                value={addressForm.address}
                onChange={(e) => {
                  setAddressForm({ address: e.target.value });
                  if (addressErrors.address) setAddressErrors({});
                }}
                placeholder="Enter your full delivery address"
                rows={3}
                className={`w-full border rounded-xl px-3 py-3 text-[15px] outline-none resize-none transition-colors bg-transparent text-slate-900 dark:text-white ${
                  addressErrors.address ? "border-red-400" : "border-gray-200 dark:border-[#A9BDCF]/40"
                }`}
              />
              {addressErrors.address && (
                <p className="text-red-500 text-[13px] mt-1">
                  {addressErrors.address}
                </p>
              )}
              <button
                onClick={getAddressLocation}
                disabled={locLoading}
                className="mt-1 flex items-center gap-2 font-semibold text-[14px]"
                style={{ minHeight: "40px", color: "var(--primary)" }}>
                {locLoading ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <MapPin size={14} />
                )}
                {locLoading ? "Getting location..." : "Use my current location"}
              </button>

              <div className="flex gap-3 mt-4">
                {user.address && (
                  <SecondaryButton
                    fullWidth
                    onClick={() => {
                      setEditingAddress(false);
                      setAddressErrors({});
                    }}>
                    Cancel
                  </SecondaryButton>
                )}
                <PrimaryButton
                  fullWidth
                  onClick={handleSaveAddress}
                  loading={savingAddress}>
                  Save
                </PrimaryButton>
              </div>
            </div>
          )}
        </Modal>

        {/* Payment method modal */}
        <Modal
          open={showPayment}
          onClose={() => setShowPayment(false)}
          title="Payment Method"
          size="sm">
          <div className="space-y-3">
            {[
              {
                key: "cod",
                label: "Cash on Delivery",
                desc: "Pay when your order arrives",
                Icon: Banknote,
              },
              {
                key: "upi",
                label: "UPI",
                desc: "Pay instantly via UPI apps",
                Icon: Smartphone,
              },
            ].map(({ key, label, desc, Icon }) => {
              const active = paymentMethod === key;
              return (
                <button
                  key={key}
                  onClick={() => setPaymentMethod(key)}
                  className="w-full flex items-center gap-3 rounded-2xl p-4 text-left transition-colors cursor-pointer"
                  style={{
                    border: `2px solid ${active ? "var(--primary)" : darkMode ? "#374151" : "#E5E7EB"}`,
                    backgroundColor: active
                      ? "var(--primary-light)"
                      : darkMode ? "#181A1B" : "#FFFFFF",
                  }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: active ? "var(--primary)" : darkMode ? "#232627" : "#F3F4F6",
                    }}>
                    <Icon
                      size={18}
                      style={{ color: active ? "#FFFFFF" : darkMode ? "#94A3B8" : "#6B7280" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-bold text-slate-900 dark:text-white"
                      style={{ fontSize: "15px" }}>
                      {label}
                    </p>
                    <p className="text-gray-400 dark:text-slate-500" style={{ fontSize: "12px" }}>
                      {desc}
                    </p>
                  </div>
                  {active && (
                    <span
                      className="shrink-0 rounded-full flex items-center justify-center"
                      style={{
                        width: "22px",
                        height: "22px",
                        backgroundColor: "var(--primary)",
                      }}>
                      <Check size={13} color="#fff" strokeWidth={3} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <PrimaryButton fullWidth className="mt-5" onClick={handleSavePayment}>
            Save
          </PrimaryButton>
        </Modal>

        {/* Account Settings modal */}
        <Modal
          open={showAccountSettings}
          onClose={() => setShowAccountSettings(false)}
          title="Settings"
          subtitle="Personalize your account and preferences."
          size="md">
          <SettingsCard
            onItemClick={handleSettingsItemClick}
            onLogout={handleLogout}
            onDeleteAccount={handleDeleteAccount}
          />
        </Modal>

        {/* App Settings modal */}
        <Modal
          open={showAppSettings}
          onClose={() => setShowAppSettings(false)}
          title="Notification Settings"
          subtitle="Choose which notifications you'd like to receive."
          size="md">
          <NotificationSettings
            settings={notifSettings}
            onToggle={handleToggleNotif}
          />
        </Modal>

        {/* Help & Support modal */}
        {showHelp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setShowHelp(false)}
            />
            <div
              className="relative rounded-2xl shadow-2xl w-full max-w-sm p-5 max-h-[85vh] overflow-y-auto scrollbar-hide"
              style={{ backgroundColor: darkMode ? "#181A1B" : "#FFFFFF" }}>
              <button
                onClick={() => setShowHelp(false)}
                className="absolute top-4 right-4 flex items-center justify-center rounded-full text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                style={{ width: "32px", height: "32px" }}>
                <X size={18} />
              </button>

              <div className="flex flex-col items-center text-center mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "var(--primary-light)" }}>
                  <Headphones size={22} style={{ color: "var(--primary)" }} />
                </div>
                <h2
                  className="font-bold text-slate-900 dark:text-white"
                  style={{ fontSize: "19px" }}>
                  Help and support
                </h2>
                <p className="text-gray-500 dark:text-slate-400 mt-1" style={{ fontSize: "13px" }}>
                  We're here to help with your order, anytime.
                </p>
              </div>

              <div className="relative mb-4">
                <Search
                  size={16}
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-white/70"
                />
                <input
                  type="text"
                  value={helpSearch}
                  onChange={(e) => setHelpSearch(e.target.value)}
                  placeholder="Search for help, e.g. refund, delivery time"
                  className="w-full rounded-xl pl-9 pr-3 text-[13px] outline-none transition-colors text-white placeholder-white/70"
                  style={{
                    minHeight: "42px",
                    backgroundColor: "var(--primary)",
                    border: "1px solid transparent",
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {helpQuickActions.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1.5"
                    style={{
                      backgroundColor: "var(--primary)",
                      minHeight: "80px",
                    }}>
                    <Icon size={17} style={{ color: "#FFFFFF" }} />
                    <p
                      className="font-bold text-white"
                      style={{ fontSize: "12px" }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 dark:text-slate-400 mb-2" style={{ fontSize: "12px" }}>
                Frequently asked
              </p>
              <div className="space-y-2 mb-5">
                {filteredFaqs.map((item, i) => {
                  const open = openFaqIndex === i;
                  return (
                    <div
                      key={item.q}
                      className="rounded-xl overflow-hidden"
                      style={{ backgroundColor: "var(--primary)" }}>
                      <button
                        onClick={() => setOpenFaqIndex(open ? null : i)}
                        className="w-full flex items-center justify-between px-3.5 py-3 text-left cursor-pointer">
                        <span
                          className="font-bold text-white"
                          style={{ fontSize: "13px" }}>
                          {item.q}
                        </span>
                        <ChevronDown
                          size={16}
                          className="text-white/80 shrink-0 transition-transform"
                          style={{
                            transform: open ? "rotate(180deg)" : "none",
                          }}
                        />
                      </button>
                      {open && (
                        <p
                          className="px-3.5 pb-3 text-white/80"
                          style={{ fontSize: "12px" }}>
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
                {filteredFaqs.length === 0 && (
                  <p
                    className="text-center text-gray-500 dark:text-slate-400 py-3"
                    style={{ fontSize: "13px" }}>
                    No results for "{helpSearch}"
                  </p>
                )}
              </div>

              <p className="text-gray-500 dark:text-slate-400 mb-2" style={{ fontSize: "12px" }}>
                Still need help
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  className="flex items-center justify-center gap-1.5 rounded-xl font-semibold text-white cursor-pointer"
                  style={{
                    minHeight: "44px",
                    fontSize: "12.5px",
                    backgroundColor: "var(--primary)",
                  }}>
                  <MessageCircle size={15} />
                  Live chat
                </button>
                <button
                  className="flex items-center justify-center gap-1.5 rounded-xl font-semibold text-white cursor-pointer"
                  style={{
                    minHeight: "44px",
                    fontSize: "12.5px",
                    backgroundColor: "var(--primary)",
                  }}>
                  <Phone size={15} />
                  Call us
                </button>
                <button
                  className="col-span-2 flex items-center justify-center gap-1.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
                  style={{
                    minHeight: "44px",
                    fontSize: "12.5px",
                    backgroundColor: "var(--primary)",
                  }}>
                  <Mail size={15} />
                  Email support
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Profile;
