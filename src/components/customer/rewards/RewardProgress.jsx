import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lock,
  Stamp,
  Gift,
  Percent,
  Bike,
} from "lucide-react";

const REWARD_ICONS = {
  item: Gift,
  discount: Percent,
  delivery: Bike,
};

const RewardProgress = ({ data }) => {
  const {
    threshold = 5,
    stampsCollected = 0,
    rewardType = "item",
    rewardDetail = "Free Reward",
  } = data || {};

  const RewardIcon = REWARD_ICONS[rewardType] || Gift;

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Stamp Journey
          </h2>

          <p className="mt-2 text-slate-500">
            Collect {threshold} stamps to unlock{" "}
            <span className="font-semibold text-slate-700">
              {rewardDetail}
            </span>
          </p>
        </div>

        <div
          className="rounded-2xl px-4 py-2 text-white"
          style={{
            background: "var(--primary)",
          }}
        >
          <p className="text-sm opacity-80">Progress</p>
          <p className="text-lg font-bold">
            {stampsCollected}/{threshold}
          </p>
        </div>
      </div>

      {/* Stamp Journey */}

      <div className="mt-10">
        <div className="flex items-center justify-between relative">
          {/* Line */}

          <div className="absolute left-0 right-0 top-6 h-1 bg-slate-200 rounded-full" />

          <div
            className="absolute left-0 top-6 h-1 rounded-full transition-all duration-500"
            style={{
              background: "var(--primary)",
              width: `${(stampsCollected / threshold) * 100}%`,
            }}
          />

          {Array.from({ length: threshold }).map((_, index) => {
            const stamp = index + 1;

            const completed = stamp <= stampsCollected;

            const current = stamp === stampsCollected + 1;

            return (
              <div
                key={stamp}
                className="relative z-10 flex flex-col items-center"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-white shadow-md transition-all ${
                    current ? "scale-110" : ""
                  }`}
                  style={{
                    background: completed
                      ? "var(--primary)"
                      : "#E2E8F0",
                  }}
                >
                  {completed ? (
                    <CheckCircle2 size={22} color="#fff" />
                  ) : (
                    <Lock
                      size={20}
                      className="text-slate-500"
                    />
                  )}
                </div>

                <span className="mt-3 text-xs font-semibold text-slate-600">
                  Stamp {stamp}
                </span>
              </div>
            );
          })}

          {/* Reward */}

          <div className="relative z-10 flex flex-col items-center">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white shadow-lg"
              style={{
                background:
                  stampsCollected >= threshold
                    ? "var(--primary)"
                    : "#F8FAFC",
              }}
            >
              <RewardIcon
                size={24}
                style={{
                  color:
                    stampsCollected >= threshold
                      ? "#fff"
                      : "var(--primary)",
                }}
              />
            </div>

            <span className="mt-3 text-xs font-bold text-slate-700">
              Reward
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Card */}

      <div
        className="mt-10 rounded-3xl p-5"
        style={{
          background: "var(--primary-light)",
        }}
      >
        {stampsCollected >= threshold ? (
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-sm font-medium"
                style={{
                  color: "var(--primary)",
                }}
              >
                🎉 Congratulations!
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-900">
                {rewardDetail}
              </h3>

              <p className="mt-1 text-slate-500">
                Your reward is ready to redeem.
              </p>
            </div>

            <RewardIcon
              size={34}
              style={{
                color: "var(--primary)",
              }}
            />
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-sm font-medium"
                style={{
                  color: "var(--primary)",
                }}
              >
                Keep Going!
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-900">
                {threshold - stampsCollected} more{" "}
                {threshold - stampsCollected === 1
                  ? "order"
                  : "orders"}{" "}
                left
              </h3>

              <p className="mt-1 text-slate-500">
                Unlock <strong>{rewardDetail}</strong>
              </p>
            </div>

            <Stamp
              size={34}
              style={{
                color: "var(--primary)",
              }}
            />
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default RewardProgress;