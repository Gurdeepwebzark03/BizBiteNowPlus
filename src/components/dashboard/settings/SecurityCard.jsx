import { motion } from "framer-motion";
import {
  ShieldCheck,
  KeyRound,
  Smartphone,
  Laptop,
  LogOut,
  Trash2,
  Save,
} from "lucide-react";

const sessions = [
  {
    device: "Windows 11 • Chrome",
    location: "Ambala, Haryana",
    active: true,
  },
  {
    device: "Android • Chrome",
    location: "Ambala, Haryana",
    active: false,
  },
];

const SecurityCard = () => {
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
          <ShieldCheck size={22} className="text-[#16522d]" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#16522d]">
            Security
          </h2>

          <p className="text-sm text-slate-500">
            Protect your store and manage account access.
          </p>
        </div>
      </div>

      {/* Password */}
      <div className="border-b border-slate-200 p-6">
        <h3 className="mb-5 text-lg font-semibold text-[#16522d]">
          Change Password
        </h3>

        <div className="grid gap-5 md:grid-cols-3">
          <input
            type="password"
            placeholder="Current Password"
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />

          <input
            type="password"
            placeholder="New Password"
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />
        </div>
      </div>

      {/* Security Options */}
      <div className="border-b border-slate-200 p-6">
        <h3 className="mb-5 text-lg font-semibold text-[#16522d]">
          Security Options
        </h3>

        <div className="space-y-4">
          <label className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8faf8] p-4">
            <div className="flex items-center gap-4">
              <KeyRound
                className="text-[#16522d]"
                size={22}
              />

              <div>
                <h4 className="font-medium text-[#16522d]">
                  Two-Factor Authentication
                </h4>

                <p className="text-sm text-slate-500">
                  Require OTP during login.
                </p>
              </div>
            </div>

            <input
              defaultChecked
              type="checkbox"
              className="h-5 w-5 accent-[#16522d]"
            />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8faf8] p-4">
            <div className="flex items-center gap-4">
              <Smartphone
                className="text-[#16522d]"
                size={22}
              />

              <div>
                <h4 className="font-medium text-[#16522d]">
                  Login Alerts
                </h4>

                <p className="text-sm text-slate-500">
                  Notify on every new login.
                </p>
              </div>
            </div>

            <input
              defaultChecked
              type="checkbox"
              className="h-5 w-5 accent-[#16522d]"
            />
          </label>
        </div>
      </div>

      {/* Active Sessions */}
      <div className="border-b border-slate-200 p-6">
        <h3 className="mb-5 text-lg font-semibold text-[#16522d]">
          Active Sessions
        </h3>

        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.device}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8faf8] p-4"
            >
              <div className="flex items-center gap-4">
                <Laptop
                  className="text-[#16522d]"
                  size={22}
                />

                <div>
                  <h4 className="font-medium text-[#16522d]">
                    {session.device}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {session.location}
                  </p>
                </div>
              </div>

              {session.active && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Current Session
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap justify-between gap-4 p-6">
        <button className="flex items-center gap-2 rounded-xl border border-red-500 px-5 py-3 font-medium text-red-600 transition hover:bg-red-500 hover:text-white">
          <Trash2 size={18} />
          Delete Store
        </button>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-[#16522d] px-5 py-3 font-medium text-[#16522d] transition hover:bg-[#16522d] hover:text-white">
            <LogOut size={18} />
            Logout All Devices
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-[#ffc700] px-6 py-3 font-semibold text-[#16522d] transition hover:bg-[#e6b800]">
            <Save size={18} />
            Save Security Settings
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default SecurityCard;