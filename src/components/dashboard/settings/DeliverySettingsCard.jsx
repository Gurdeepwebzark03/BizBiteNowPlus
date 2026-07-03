import { motion } from "framer-motion";
import {
  Bike,
  Save,
  Clock3,
  IndianRupee,
  MapPinned,
} from "lucide-react";

const DeliverySettingsCard = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
        <div className="rounded-xl bg-[#16522d]/10 p-3">
          <Bike size={22} className="text-[#16522d]" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#16522d]">
            Delivery Settings
          </h2>

          <p className="text-sm text-slate-500">
            Configure delivery options for your customers.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="grid gap-5 p-6 md:grid-cols-2">
        <label className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8faf8] p-4">
          <span className="font-medium text-[#16522d]">
            Enable Home Delivery
          </span>

          <input
            type="checkbox"
            className="h-5 w-5 accent-[#16522d]"
          />
        </label>

        <label className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8faf8] p-4">
          <span className="font-medium text-[#16522d]">
            Enable Pickup
          </span>

          <input
            type="checkbox"
            className="h-5 w-5 accent-[#16522d]"
          />
        </label>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#16522d]">
            <MapPinned size={16} />
            Delivery Radius (KM)
          </label>

          <input
            type="number"
            placeholder="10"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#16522d]">
            <IndianRupee size={16} />
            Delivery Charge
          </label>

          <input
            type="number"
            placeholder="40"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Minimum Order Value
          </label>

          <input
            type="number"
            placeholder="199"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Free Delivery Above
          </label>

          <input
            type="number"
            placeholder="499"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#16522d]">
            <Clock3 size={16} />
            Estimated Delivery Time
          </label>

          <input
            placeholder="30 - 45 Minutes"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end border-t border-slate-200 px-6 py-5">
        <button className="flex items-center gap-2 rounded-xl bg-[#ffc700] px-6 py-3 font-semibold text-[#16522d] transition hover:bg-[#e6b800]">
          <Save size={18} />
          Save Delivery Settings
        </button>
      </div>
    </motion.section>
  );
};

export default DeliverySettingsCard;