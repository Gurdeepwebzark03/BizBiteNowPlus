import { motion } from "framer-motion";
import { Lock, CheckCircle2, Stamp, Gift, Percent, Bike } from "lucide-react";

const REWARD_ICONS = {
  item: Gift,
  discount: Percent,
  delivery: Bike,
};

/**
 * data: { threshold, stampsCollected, rewardType, rewardDetail }
 *
 * Same timeline scaffolding as the original tier version (connecting line,
 * icon nodes, card per step, var(--primary) theming) — but generated from
 * the seller's single threshold + reward instead of a fixed 4-tier ladder.
 * Each stamp is a step; the final stamp is visually distinct since it's the
 * one that carries the actual reward.
 */
const RewardProgress = ({ data }) => {
  const {
    threshold = 5,
    stampsCollected = 0,
    rewardType = "item",
    rewardDetail = "your reward",
  } = data || {};

  const RewardIcon = REWARD_ICONS[rewardType] || Gift;

  const steps = Array.from({ length: threshold }, (_, i) => {
    const stampNumber = i + 1;
    const isFinal = stampNumber === threshold;
    return {
      stampNumber,
      isFinal,
      unlocked: stampsCollected >= stampNumber,
      current: stampNumber === stampsCollected + 1,
    };
  });

  return (
    <section
      className="
        rounded-[32px]
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      {/* Header */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Stamp Journey</h2>

        <p className="mt-2 text-slate-500">
          One stamp per order. Collect {threshold} for {rewardDetail}.
        </p>
      </div>

      {/* Timeline */}

      <div className="relative">
        <div
          className="
            absolute
            left-6
            top-0
            bottom-0

            w-1

            rounded-full

            bg-slate-200
          "
        />

        <div className="space-y-10">
          {steps.map((step, index) => {
            const StepIcon = step.isFinal ? RewardIcon : Stamp;

            return (
              <motion.div
                key={step.stampNumber}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                className="relative flex gap-6"
              >
                {/* Icon */}

                <div
                  className="
                    relative
                    z-10

                    flex
                    h-14
                    w-14
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    border-4
                    border-white

                    shadow-lg
                  "
                  style={{
                    background: step.unlocked ? "var(--primary)" : "#E2E8F0",
                  }}
                >
                  {step.unlocked ? (
                    <CheckCircle2 size={26} color="#fff" />
                  ) : (
                    <Lock size={24} className="text-slate-500" />
                  )}
                </div>

                {/* Card */}

                <div
                  className={`
                    flex-1

                    rounded-3xl

                    border

                    p-6

                    transition-all

                    ${step.current ? "shadow-xl" : "shadow-sm"}
                  `}
                  style={{
                    borderColor: step.current ? "var(--primary)" : "#E2E8F0",

                    background: step.current ? "var(--primary-light)" : "#fff",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <StepIcon
                          size={22}
                          style={{
                            color: step.unlocked ? "var(--primary)" : "#64748B",
                          }}
                        />

                        <h3 className="text-xl font-bold text-slate-900">
                          {step.isFinal
                            ? "Reward"
                            : `Stamp ${step.stampNumber}`}
                        </h3>
                      </div>

                      <p className="mt-2 text-slate-500">
                        {step.isFinal ? (
                          <>
                            Unlocks at <strong>{threshold}</strong> stamps
                          </>
                        ) : (
                          <>
                            Order {step.stampNumber} of {threshold}
                          </>
                        )}
                      </p>
                    </div>

                    {step.current && (
                      <span
                        className="
                          rounded-full

                          px-4
                          py-2

                          text-xs
                          font-semibold

                          text-white
                        "
                        style={{
                          background: "var(--primary)",
                        }}
                      >
                        Next up
                      </span>
                    )}
                  </div>

                  {/* Benefit — only the final stamp carries the reward */}

                  {step.isFinal && (
                    <div
                      className="
                        mt-5

                        rounded-2xl

                        bg-slate-50

                        p-4
                      "
                    >
                      <p className="text-sm text-slate-500">Your reward</p>

                      <div className="mt-2 flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900">
                          {rewardDetail}
                        </h4>

                        <RewardIcon size={18} className="text-slate-400" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RewardProgress;
