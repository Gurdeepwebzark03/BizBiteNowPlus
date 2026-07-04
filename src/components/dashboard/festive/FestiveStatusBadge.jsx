import {
  CheckCircle2,
  Clock3,
  FileText,
  Archive,
} from "lucide-react";

const statusConfig = {
  active: {
    label: "Active",
    icon: CheckCircle2,
    className:
      "bg-emerald-100 text-emerald-700 border border-emerald-200",
  },

  scheduled: {
    label: "Scheduled",
    icon: Clock3,
    className:
      "bg-amber-100 text-amber-700 border border-amber-200",
  },

  draft: {
    label: "Draft",
    icon: FileText,
    className:
      "bg-slate-100 text-slate-700 border border-slate-200",
  },

  expired: {
    label: "Expired",
    icon: Archive,
    className:
      "bg-red-100 text-red-700 border border-red-200",
  },
};

const FestiveStatusBadge = ({ status }) => {
  const config =
    statusConfig[status] || statusConfig.draft;

  const Icon = config.icon;

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        px-3
        py-1.5
        text-xs
        font-semibold
        ${config.className}
      `}
    >
      <Icon size={14} />

      {config.label}
    </span>
  );
};

export default FestiveStatusBadge;