import { CalendarHeart, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FestiveHeader = ({ onCreate }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div className="text-left">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1">
          <CalendarHeart size={16} className="text-orange-600" />

          <span className="text-xs font-semibold uppercase tracking-wide text-orange-700">
            Plus Feature
          </span>
        </div>

        <h1 className="text-3xl font-bold text-slate-900">
          Festive & Special Menu
        </h1>

        <p className="mt-2 max-w-3xl text-[15px] leading-7 text-slate-500">
          Create festival-specific menus, schedule automatic activation, switch
          back to your regular menu automatically, manage previous festive menus
          and duplicate last year's menu in one click.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => navigate("/seller/festivemenu/history")}
          type="button"
          className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-[#1A4D2E] hover:text-[#1A4D2E]"
        >
          View History
        </button>

        <button
          type="button"
          onClick={onCreate}
          className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#1A4D2E] px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#245a37]"
        >
          <Plus size={18} />
          Create Festive Menu
        </button>
      </div>
    </div>
  );
};

export default FestiveHeader;
