import { useState } from "react";
import {
  X,
  FileDown,
  CalendarDays,
  Download,
} from "lucide-react";

export default function ExportModal({
  open,
  onClose,
  onExport,
}) {
  const [month, setMonth] = useState(
    new Date().toISOString().slice(0, 7)
  );

  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40"
      />

      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b p-6">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-[#16522d]/10 p-3">
              <FileDown
                size={22}
                className="text-[#16522d]"
              />
            </div>

            <div>

              <h2 className="text-lg font-bold">
                Export Orders
              </h2>

              <p className="text-sm text-slate-500">
                Monthly PDF Report
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={18} />
          </button>

        </div>

        <div className="space-y-6 p-6">

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-medium">

              <CalendarDays size={16} />

              Select Month

            </label>

            <input
              type="month"
              value={month}
              onChange={(e) =>
                setMonth(e.target.value)
              }
              className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-[#16522d] focus:ring-4 focus:ring-[#16522d]/10"
            />

          </div>

          <div className="rounded-xl border border-[#16522d]/20 bg-[#16522d]/5 p-4">

            <p className="font-medium">
              Export Includes
            </p>

            <ul className="mt-3 space-y-2 text-sm text-slate-600">

              <li>• Complete Order History</li>

              <li>• Customer Details</li>

              <li>• Payment Summary</li>

              <li>• Revenue Report</li>

              <li>• Order Status Summary</li>

            </ul>

          </div>

          <div className="flex justify-end gap-3">

            <button
              onClick={onClose}
              className="rounded-xl border border-slate-200 px-5 py-3 font-medium hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                onExport?.(month);
                onClose();
              }}
              className="flex items-center gap-2 rounded-xl bg-[#16522d] px-6 py-3 font-medium text-white transition hover:bg-[#124426]"
            >
              <Download size={18} />
              Export PDF
            </button>

          </div>

        </div>

      </div>
    </>
  );
}