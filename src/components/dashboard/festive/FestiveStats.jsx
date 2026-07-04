import {
  CalendarRange,
  CheckCircle2,
  Clock3,
  FileText,
  Archive,
} from "lucide-react";

const FestiveStats = ({ stats }) => {
  const cards = [
    {
      title: "Total Menus",
      value: stats.totalMenus,
      icon: CalendarRange,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Active",
      value: stats.active,
      icon: CheckCircle2,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Scheduled",
      value: stats.scheduled,
      icon: Clock3,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Draft",
      value: stats.draft,
      icon: FileText,
      color: "bg-slate-100 text-slate-600",
    },
    {
      title: "History",
      value: stats.expired,
      icon: Archive,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 xl:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1A4D2E]/20 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  {card.value}
                </h2>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
              >
                <Icon size={22} />
              </div>
            </div>

            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-[#1A4D2E] transition-all duration-500 group-hover:w-full"
                style={{
                  width: `${Math.min(card.value * 20, 100)}%`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FestiveStats;