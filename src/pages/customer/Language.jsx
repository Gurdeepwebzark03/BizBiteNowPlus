import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";

const LANGUAGE_STORAGE_KEY = "customerLanguage";

const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
  { code: "bn", label: "Bengali", native: "বাংলা" },
  { code: "mr", label: "Marathi", native: "मराठी" },
];

const Language = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(
    () => localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en",
  );

  const handleSelect = (code) => {
    setSelected(code);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
  };

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
              Language
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Choose your preferred app language.
            </p>
          </div>
        </div>

        {/* Language list */}
        <div className="bg-white dark:bg-[#181A1B] rounded-2xl shadow-sm overflow-hidden">
          {languages.map(({ code, label, native }, i) => {
            const active = selected === code;
            return (
              <button
                key={code}
                onClick={() => handleSelect(code)}
                className={`w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer ${
                  i < languages.length - 1 ? "border-b border-gray-100 dark:border-[#A9BDCF]/20" : ""
                }`}
              >
                <div>
                  <p className="font-medium text-slate-900 dark:text-white" style={{ fontSize: "15px" }}>
                    {label}
                  </p>
                  <p className="text-gray-400 dark:text-slate-500 mt-0.5" style={{ fontSize: "13px" }}>
                    {native}
                  </p>
                </div>
                {active && (
                  <span
                    className="shrink-0 rounded-full flex items-center justify-center"
                    style={{ width: "22px", height: "22px", backgroundColor: "var(--primary)" }}
                  >
                    <Check size={13} color="#fff" strokeWidth={3} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Language;
