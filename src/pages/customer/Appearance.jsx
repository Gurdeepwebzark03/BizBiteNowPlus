import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Appearance = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

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
              Appearance
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Customize your app experience.
            </p>
          </div>
        </div>

        {/* Dark Mode */}
        <div
          className="flex items-center gap-5 rounded-2xl border p-6 shadow-sm bg-white dark:bg-[#181A1B] border-slate-200 dark:border-[#A9BDCF]/40"
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shrink-0"
            style={{ background: "var(--primary)" }}
          >
            <Moon size={20} />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-slate-900 dark:text-white">Dark Mode</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Reduce eye strain at night.
            </p>
          </div>

          <button
            onClick={toggleDarkMode}
            className={`relative h-7 w-14 rounded-full transition-all shrink-0 ${
              darkMode ? "" : "bg-slate-300 dark:bg-slate-600"
            }`}
            style={{ background: darkMode ? "var(--primary)" : undefined }}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${
                darkMode ? "left-8" : "left-1"
              }`}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Appearance;
