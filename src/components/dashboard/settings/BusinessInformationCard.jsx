import { motion } from "framer-motion";
import { Building2, Save } from "lucide-react";

const BusinessInformationCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
        <div className="rounded-xl bg-[#16522d]/10 p-3">
          <Building2 className="text-[#16522d]" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#16522d]">
            Business Information
          </h2>

          <p className="text-sm text-slate-500">
            Legal and restaurant business details.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="grid gap-5 p-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Business Name
          </label>

          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            placeholder="BizBite Restaurant"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Business Type
          </label>

          <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20">
            <option>Restaurant</option>
            <option>Cafe</option>
            <option>Cloud Kitchen</option>
            <option>Bakery</option>
            <option>Food Truck</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Cuisine Category
          </label>

          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            placeholder="North Indian"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            GST Number
          </label>

          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            placeholder="22ABCDE1234F1Z5"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            FSSAI License
          </label>

          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            placeholder="12345678901234"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            PAN Number
          </label>

          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            placeholder="ABCDE1234F"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Business Registration Number
          </label>

          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            placeholder="Enter registration number"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end border-t border-slate-200 px-6 py-5">
        <button className="flex items-center gap-2 rounded-xl bg-[#ffc700] px-6 py-3 font-semibold text-[#16522d] transition hover:bg-[#e6b800]">
          <Save size={18} />
          Save Business Information
        </button>
      </div>
    </motion.div>
  );
};

export default BusinessInformationCard;