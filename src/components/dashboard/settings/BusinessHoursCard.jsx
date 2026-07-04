import { motion } from "framer-motion";
import { Clock3, Save } from "lucide-react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const BusinessHoursCard = () => {
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
          <Clock3
            className="text-[#16522d]"
            size={22}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#16522d]">
            Business Hours
          </h2>

          <p className="text-sm text-slate-500">
            Configure your weekly opening schedule.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="space-y-4 p-6">
        {days.map((day) => (
          <div
            key={day}
            className="grid items-center gap-4 rounded-xl border border-slate-200 bg-[#f8faf8] p-4 lg:grid-cols-4"
          >
            <h4 className="font-medium text-[#16522d]">
              {day}
            </h4>

            <input
              type="time"
              defaultValue="09:00"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            />

            <input
              type="time"
              defaultValue="22:00"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            />

            <label className="flex items-center gap-3 text-sm font-medium text-[#16522d]">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#16522d]"
              />

              Closed
            </label>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-end border-t border-slate-200 px-6 py-5">
        <button className="flex items-center gap-2 rounded-xl bg-[#ffc700] px-6 py-3 font-semibold text-[#16522d] transition hover:bg-[#e6b800]">
          <Save size={18} />
          Save Business Hours
        </button>
      </div>
    </motion.div>
  );
};

export default BusinessHoursCard;