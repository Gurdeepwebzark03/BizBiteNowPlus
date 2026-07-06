import { Search, Filter, CalendarRange } from "lucide-react";
import { festiveStatus } from "../../../data/festiveMenuData";

const festivals = [
  "All",
  "Diwali",
  "Christmas",
  "Eid",
  "Holi",
  "Navratri",
  "New Year",
];

const FestiveFilters = ({
  search,
  setSearch,
  status,
  setStatus,
  festival,
  setFestival,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}

        <div className="relative w-full lg:max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search festive menu..."
            className="
              h-12
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              pl-11
              pr-4
              text-sm
              outline-none
              transition-all
              duration-300
              focus:border-[#1A4D2E]
              focus:ring-4
              focus:ring-[#1A4D2E]/10
              dark:border-slate-700
              dark:bg-slate-900
            "
          />
        </div>

        {/* Status Filter */}

        <div className="flex flex-wrap gap-2">
          {festiveStatus.map((item) => (
            <button
              key={item}
              onClick={() => setStatus(item)}
              className={`
                rounded-xl
                px-4
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  status === item
                    ? "bg-[#1A4D2E] text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#1A4D2E] hover:text-[#1A4D2E] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Festival Filter */}

        <div className="relative">
          <CalendarRange
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            value={festival}
            onChange={(e) => setFestival(e.target.value)}
            className="
              h-12
              min-w-[190px]
              appearance-none
              rounded-xl
              border
              border-slate-200
              bg-white
              pl-11
              pr-10
              text-sm
              outline-none
              transition-all
              duration-300
              focus:border-[#1A4D2E]
              focus:ring-4
              focus:ring-[#1A4D2E]/10
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            {festivals.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item === "All"
                  ? "All Festivals"
                  : item}
              </option>
            ))}
          </select>

          <Filter
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </div>
      </div>
    </div>
  );
};

export default FestiveFilters;