import { motion } from "framer-motion";
import {
  Bell,
  Mail,
  Smartphone,
  Package,
  ShoppingBag,
  Wallet,
  AlertTriangle,
  Save,
} from "lucide-react";

const notificationSettings = [
  {
    title: "New Orders",
    description: "Receive notifications for every new order.",
    icon: ShoppingBag,
    enabled: true,
  },
  {
    title: "Payment Updates",
    description: "Notify when payments are received or refunded.",
    icon: Wallet,
    enabled: true,
  },
  {
    title: "Low Stock Alerts",
    description: "Get notified when products are running low.",
    icon: Package,
    enabled: true,
  },
  {
    title: "System Alerts",
    description: "Maintenance, outages and important announcements.",
    icon: AlertTriangle,
    enabled: true,
  },
];

const deliveryChannels = [
  // {
  //   title: "Email Notifications",
  //   icon: Mail,
  //   enabled: true,
  // },
  // {
  //   title: "SMS Notifications",
  //   icon: Smartphone,
  //   enabled: false,
  // },
  {
    title: "Push Notifications",
    icon: Bell,
    enabled: true,
  },
];

const NotificationsCard = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
        <div className="rounded-xl bg-[#16522d]/10 p-3">
          <Bell size={22} className="text-[#16522d]" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#16522d]">
            Notification Preferences
          </h2>

          <p className="text-sm text-slate-500">
            Choose how you want to receive important updates.
          </p>
        </div>
      </div>

      {/* Notification Types */}
      <div className="space-y-4 p-6">
        {notificationSettings.map((item) => (
          <label
            key={item.title}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8faf8] p-4"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#16522d]/10 p-3">
                <item.icon
                  size={20}
                  className="text-[#16522d]"
                />
              </div>

              <div>
                <h4 className="font-medium text-[#16522d]">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>

            <input
              defaultChecked={item.enabled}
              type="checkbox"
              className="h-5 w-5 accent-[#16522d]"
            />
          </label>
        ))}
      </div>

      {/* Delivery Channels */}
      <div className="border-t border-slate-200 p-6">
        <h3 className="mb-5 text-lg font-semibold text-[#16522d]">
          Delivery Channels
        </h3>

        <div className="grid gap-4 md:grid-cols-3">
          {deliveryChannels.map((item) => (
            <label
              key={item.title}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8faf8] p-4"
            >
              <div className="flex items-center gap-3">
                <item.icon
                  className="text-[#16522d]"
                  size={20}
                />

                <span className="font-medium text-[#16522d]">
                  {item.title}
                </span>
              </div>

              <input
                defaultChecked={item.enabled}
                type="checkbox"
                className="h-5 w-5 accent-[#16522d]"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end border-t border-slate-200 px-6 py-5">
        <button className="flex items-center gap-2 rounded-xl bg-[#ffc700] px-6 py-3 font-semibold text-[#16522d] transition hover:bg-[#e6b800]">
          <Save size={18} />
          Save Notification Settings
        </button>
      </div>
    </motion.section>
  );
};

export default NotificationsCard;