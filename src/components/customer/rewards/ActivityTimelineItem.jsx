import { motion } from "framer-motion";
import {
  Stamp,
  Gift,
  TicketPercent,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const EVENT_ICONS = {
  stamp: Stamp,
  reward: Gift,
  coupon: TicketPercent,
};

const EVENT_COLORS = {
  stamp: {
    bg: "#EFF6FF",
    color: "#2563EB",
  },
  reward: {
    bg: "#ECFDF5",
    color: "#16A34A",
  },
  coupon: {
    bg: "#FEF3C7",
    color: "#D97706",
  },
};

const ActivityTimelineItem = ({ activity }) => {
  if (!activity) return null;

  const {
    type,
    title,
    subtitle,
    amount,
    stamps,
    reward,
    date,
  } = activity;

  const Icon = EVENT_ICONS[type] || Stamp;
  const style = EVENT_COLORS[type] || EVENT_COLORS.stamp;

  return (
    <motion.div
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
      className="relative flex gap-5"
    >
      {/* Timeline */}

      <div className="flex flex-col items-center">

        <div
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{
            background: style.bg,
          }}
        >
          <Icon
            size={22}
            style={{
              color: style.color,
            }}
          />
        </div>

        <div className="mt-2 h-full w-[2px] bg-slate-200" />

      </div>

      {/* Card */}

      <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-lg font-semibold text-slate-900">
              {title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {subtitle}
            </p>

          </div>

          <span className="text-xs text-slate-400">
            {date}
          </span>

        </div>

        {type === "stamp" && (
          <div className="mt-5 flex flex-wrap gap-3">

            <div className="rounded-full bg-slate-100 px-3 py-2 text-sm">
              ₹{amount}
            </div>

            <div
              className="rounded-full px-3 py-2 text-sm font-semibold text-white"
              style={{
                background: "var(--primary)",
              }}
            >
              +{stamps} Stamp{stamps > 1 ? "s" : ""}
            </div>

          </div>
        )}

        {type === "reward" && (
          <div
            className="mt-5 rounded-2xl p-4"
            style={{
              background: "var(--primary-light)",
            }}
          >
            <div className="flex items-center gap-3">

              <Gift
                size={20}
                style={{
                  color: "var(--primary)",
                }}
              />

              <div>

                <p className="text-sm text-slate-500">
                  Reward Unlocked
                </p>

                <h4 className="font-semibold text-slate-900">
                  {reward}
                </h4>

              </div>

            </div>
          </div>
        )}

        {type === "coupon" && (
          <div className="mt-5 flex items-center gap-3 text-green-600">

            <CheckCircle2 size={20} />

            Coupon Successfully Redeemed

          </div>
        )}

      </div>
    </motion.div>
  );
};

export default ActivityTimelineItem;