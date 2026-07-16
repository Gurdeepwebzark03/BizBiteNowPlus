import { motion } from "framer-motion";
import {
  Stamp,
  Gift,
  Percent,
  Bike,
  Trophy,
  ChevronRight,
  PauseCircle,
} from "lucide-react";

const REWARD_ICONS = {
  item: Gift,
  discount: Percent,
  delivery: Bike,
};

const REWARD_LABELS = {
  item: "Free item",
  discount: "Discount",
  delivery: "Free delivery",
};

/**
 * data: { active, threshold, stampsCollected, rewardType, rewardDetail }
 * — same shape as api/customer/loyalty.js's getCustomerLoyaltyStatus().
 *
 * Same visual scaffolding as the original points/tier version (gradient
 * hero, decorative circles, motion, var(--primary) theming) — only the
 * data-bound content changed.
 */
const LoyaltyCard = ({ data, onViewBenefits, onRedeem }) => {
  const {
    active = true,
    threshold = 5,
    stampsCollected = 0,
    rewardType = "item",
    rewardDetail = "a reward",
  } = data || {};

  const remaining = Math.max(0, threshold - stampsCollected);
  const rewardReady = stampsCollected >= threshold;
  const progress = Math.min(
    100,
    Math.round((stampsCollected / threshold) * 100),
  );
  const RewardIcon = REWARD_ICONS[rewardType] || Gift;

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        relative
        overflow-hidden

        rounded-[32px]

        shadow-xl

        text-white
      "
      style={{
        background: "linear-gradient(135deg,var(--primary),#111827)",
      }}
    >
      {/* Background */}

      <div className="absolute -right-14 -top-14 h-56 w-56 rounded-full bg-white/10" />

      <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-white/5" />

      <div className="relative p-7">
        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white/70">Loyalty Progress</p>

            <h2 className="mt-2 text-5xl font-bold">
              {stampsCollected}
              <span className="text-2xl text-white/50">/{threshold}</span>
            </h2>

            <p className="mt-2 text-white/70">Stamps collected</p>
          </div>

          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center

              rounded-full

              bg-white/15

              backdrop-blur
            "
          >
            <Stamp size={34} />
          </div>
        </div>

        {/* Reward */}

        <div
          className="
            mt-8

            rounded-3xl

            bg-white/10

            p-5

            backdrop-blur
          "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <RewardIcon size={24} />

              <div>
                <h3 className="text-xl font-bold">{rewardDetail}</h3>

                <p className="text-sm text-white/70">
                  {REWARD_LABELS[rewardType] || "Reward"} on card completion
                </p>
              </div>
            </div>

            <Trophy size={28} />
          </div>

          {/* Progress */}

          <div className="mt-6">
            <div className="mb-3 flex justify-between text-sm">
              <span>0</span>

              <span>{threshold} stamps</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/20">
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 1,
                }}
                className="h-full rounded-full bg-white"
              />
            </div>

            <p className="mt-3 text-sm text-white/70">
              {rewardReady
                ? "Reward unlocked — applied automatically at your next checkout."
                : `${remaining} more order${remaining === 1 ? "" : "s"} for your ${REWARD_LABELS[rewardType]?.toLowerCase() || "reward"}.`}
            </p>
          </div>
        </div>

        {/* Paused notice */}

        {!active && (
          <div
            className="
              mt-6

              rounded-2xl

              bg-white/10

              p-4
            "
          >
            <div className="flex items-center gap-3">
              <PauseCircle size={20} />

              <div>
                <h4 className="font-semibold">Loyalty programme paused</h4>

                <p className="text-sm text-white/70">
                  This store has paused new stamps for now.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Quick Stats */}


        {/* Buttons */}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={onRedeem}
            disabled={!rewardReady}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-3

              rounded-2xl

              bg-white

              px-6
              py-4

              font-semibold

              text-slate-900

              transition

              hover:scale-[1.02]

              disabled:cursor-not-allowed
              disabled:opacity-50
              disabled:hover:scale-100
            "
          >
            <Gift size={20} />

            {rewardReady ? "Reward ready!" : "Keep ordering to unlock"}
          </button>

          <button
            onClick={onViewBenefits}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-3

              rounded-2xl

              border
              border-white/20

              bg-white/10

              px-6
              py-4

              font-semibold

              backdrop-blur

              transition

              hover:bg-white/20
            "
          >
            How it works
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default LoyaltyCard;
