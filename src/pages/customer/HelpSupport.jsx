import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Truck,
  ReceiptText,
  Utensils,
  CreditCard,
  ChevronDown,
  MessageCircle,
  Phone,
  Mail,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

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

const HelpSupport = () => {
  const navigate = useNavigate();
  const [helpSearch, setHelpSearch] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const filteredFaqs = faqItems.filter((item) =>
    item.q.toLowerCase().includes(helpSearch.trim().toLowerCase()),
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="px-4 py-5 pb-28"
    >
      <div className="w-full min-w-0 max-w-[1760px]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate("/customer/profile")}
            className="flex items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer shrink-0"
            style={{ width: "40px", height: "40px" }}
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Help and Support
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              We're here to help with your order, anytime.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-[#181A1B] rounded-2xl shadow-sm p-5">
          <div className="flex flex-col items-center text-center mb-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
              style={{ backgroundColor: "var(--primary-light)" }}
            >
              <Headphones size={22} style={{ color: "var(--primary)" }} />
            </div>
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
                }}
              >
                <Icon size={17} style={{ color: "#FFFFFF" }} />
                <p className="font-bold text-white" style={{ fontSize: "12px" }}>
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
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(open ? null : i)}
                    className="w-full flex items-center justify-between px-3.5 py-3 text-left cursor-pointer"
                  >
                    <span className="font-bold text-white" style={{ fontSize: "13px" }}>
                      {item.q}
                    </span>
                    <ChevronDown
                      size={16}
                      className="text-white/80 shrink-0 transition-transform"
                      style={{ transform: open ? "rotate(180deg)" : "none" }}
                    />
                  </button>
                  {open && (
                    <p className="px-3.5 pb-3 text-white/80" style={{ fontSize: "12px" }}>
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
            {filteredFaqs.length === 0 && (
              <p className="text-center text-gray-500 dark:text-slate-400 py-3" style={{ fontSize: "13px" }}>
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
              style={{ minHeight: "44px", fontSize: "12.5px", backgroundColor: "var(--primary)" }}
            >
              <MessageCircle size={15} />
              Live chat
            </button>
            <button
              className="flex items-center justify-center gap-1.5 rounded-xl font-semibold text-white cursor-pointer"
              style={{ minHeight: "44px", fontSize: "12.5px", backgroundColor: "var(--primary)" }}
            >
              <Phone size={15} />
              Call us
            </button>
            <button
              className="col-span-2 flex items-center justify-center gap-1.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
              style={{ minHeight: "44px", fontSize: "12.5px", backgroundColor: "var(--primary)" }}
            >
              <Mail size={15} />
              Email support
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HelpSupport;
