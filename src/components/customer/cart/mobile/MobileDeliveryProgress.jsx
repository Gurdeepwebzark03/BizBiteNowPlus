import {
  CheckCircle2,
  Truck,
} from "lucide-react";

const MobileDeliveryProgress = ({
  progress = 0,
  amountRemaining = 0,
  threshold = 499,
  unlocked = false,
}) => {
  return (
    <section
      className={`
        overflow-hidden
        rounded-2xl
        border
        shadow-sm

        ${
          unlocked
            ? "border-green-200 bg-gradient-to-r from-green-50 to-emerald-50"
            : "border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50"
        }
      `}
    >
      <div className="flex items-center gap-3 p-4">
        <div
          className={`
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full

            ${
              unlocked
                ? "bg-green-100 text-green-600"
                : "bg-orange-100 text-orange-600"
            }
          `}
        >
          {unlocked ? (
            <CheckCircle2 size={18} />
          ) : (
            <Truck size={18} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3
            className={`
              text-sm
              font-semibold

              ${
                unlocked
                  ? "text-green-700"
                  : "text-orange-700"
              }
            `}
          >
            {unlocked
              ? "Free Delivery Unlocked 🎉"
              : "Unlock Free Delivery"}
          </h3>

          <p className="mt-0.5 text-xs text-slate-600">
            {unlocked
              ? "Your order qualifies for FREE delivery."
              : `Add ₹${amountRemaining} more to save ₹40 delivery fee.`}
          </p>

          <div className="mt-3">
            <div className="mb-1 flex justify-between text-[11px] text-slate-500">
              <span>₹0</span>

              <span>
                ₹{threshold}
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/70">
              <div
                className={`
                  h-full
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    unlocked
                      ? "bg-green-600"
                      : "bg-orange-500"
                  }
                `}
                style={{
                  width: `${Math.min(
                    progress,
                    100
                  )}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDeliveryProgress;