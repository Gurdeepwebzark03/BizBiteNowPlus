import { ChevronDown, RefreshCw } from "lucide-react";

const FILTERS = [
  { label: "Today", value: "today" },
  { label: "Last 7 Days", value: "7d" },
  { label: "Last 30 Days", value: "30d" },
  { label: "This Month", value: "month" },
  { label: "This Year", value: "year" },
];

const ChartHeader = ({
  title = "Sales Analytics",
  subtitle = "Track your business performance",
  filter = "7d",
  onFilterChange,
  onRefresh,
}) => {
  return (
    <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 className="text-[22px] font-semibold text-slate-900">
          {title}
        </h2>

        <p className="mt-1 text-[14px] text-slate-500">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onRefresh}
          className="
            group
            flex h-11 w-11 items-center justify-center
            rounded-xl
            border border-slate-200
            bg-white
            transition-all duration-300
            hover:border-[#1A4D2E]
            hover:bg-[#1A4D2E]
            hover:shadow-md
          "
        >
          <RefreshCw
            size={18}
            className="text-[#1A4D2E] transition-colors duration-300 group-hover:text-white"
          />
        </button>

        <div className="relative">
          <select
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="
              h-11
              min-w-[170px]
              appearance-none
              rounded-xl
              border border-slate-200
              bg-white
              px-4
              pr-10
              text-[14px]
              font-medium
              text-slate-700
              outline-none
              transition-all duration-300
              hover:border-[#1A4D2E]
              focus:border-[#1A4D2E]
              focus:ring-2
              focus:ring-[#1A4D2E]/10
            "
          >
            {FILTERS.map((item) => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;