import { ChevronDown, RefreshCw } from "lucide-react";

const ChartHeader = ({
  title = "Sales Analytics",
  subtitle = "Track your business performance",
  filter = "Last 7 Days",
  onRefresh,
}) => {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Left */}
      <div>
        <h2 className="text-xl font-bold text-[#1A4D2E]">
          {title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {subtitle}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button
          onClick={onRefresh}
          className="rounded-xl border border-gray-200 p-2 transition-all hover:border-[#1A4D2E] hover:bg-[#1A4D2E]/5"
          title="Refresh"
        >
          <RefreshCw size={18} className="text-[#1A4D2E]" />
        </button>

        <button
          className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-all hover:border-[#1A4D2E] hover:bg-[#1A4D2E]/5"
        >
          {filter}
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChartHeader;