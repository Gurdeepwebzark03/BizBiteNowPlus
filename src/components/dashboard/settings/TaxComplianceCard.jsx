import { motion } from "framer-motion";
import {
  ReceiptText,
  FileText,
  Percent,
  Hash,
  Save,
} from "lucide-react";

const TaxComplianceCard = () => {
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
          <ReceiptText size={22} className="text-[#16522d]" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#16522d]">
            Tax & Compliance
          </h2>

          <p className="text-sm text-slate-500">
            Configure taxes, invoices and legal compliance.
          </p>
        </div>
      </div>

      <div className="grid gap-5 p-6 md:grid-cols-2">
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#16522d]">
            <FileText size={16} />
            GST Number
          </label>

          <input
            type="text"
            placeholder="22ABCDE1234F1Z5"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#16522d]">
            <Percent size={16} />
            GST Percentage
          </label>

          <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20">
            <option>0%</option>
            <option>5%</option>
            <option>12%</option>
            <option>18%</option>
            <option>28%</option>
          </select>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#16522d]">
            <Hash size={16} />
            Invoice Prefix
          </label>

          <input
            type="text"
            placeholder="BBN"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Invoice Start Number
          </label>

          <input
            type="number"
            placeholder="1001"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
          />
        </div>
      </div>

      <div className="space-y-4 border-t border-slate-200 p-6">
        <label className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8faf8] p-4">
          <div>
            <p className="font-medium text-[#16522d]">
              Generate GST Invoice
            </p>

            <p className="text-sm text-slate-500">
              Include GST details in customer invoices.
            </p>
          </div>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5 accent-[#16522d]"
          />
        </label>

        <label className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8faf8] p-4">
          <div>
            <p className="font-medium text-[#16522d]">
              Auto Generate Invoice
            </p>

            <p className="text-sm text-slate-500">
              Automatically create invoices after successful orders.
            </p>
          </div>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5 accent-[#16522d]"
          />
        </label>
      </div>

      <div className="flex justify-end border-t border-slate-200 px-6 py-5">
        <button className="flex items-center gap-2 rounded-xl bg-[#ffc700] px-6 py-3 font-semibold text-[#16522d] transition hover:bg-[#e6b800]">
          <Save size={18} />
          Save Tax Settings
        </button>
      </div>
    </motion.section>
  );
};

export default TaxComplianceCard;