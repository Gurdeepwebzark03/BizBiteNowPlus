import {
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

const MobileCheckoutBar = ({
  total = 0,
  itemCount = 0,
  onCheckout,
}) => {
  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50

        border-t
        border-slate-200

        bg-white/95
        backdrop-blur-md

        shadow-[0_-8px_30px_rgba(0,0,0,0.08)]
      "
    >
      <div className="mx-auto flex max-w-md items-center gap-3 p-3">
        {/* Total */}
        <div
          className="
            flex
            min-w-[110px]
            flex-col
            justify-center
          "
        >
          <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
            Total
          </span>

          <span className="text-xl font-bold text-slate-900">
            ₹{total}
          </span>

          <span className="text-[11px] text-green-600">
            Inclusive of all taxes
          </span>
        </div>

        {/* Checkout */}
        <button
          onClick={onCheckout}
          className="
            flex
            h-12
            flex-1
            items-center
            justify-center
            gap-2

            rounded-xl

            bg-green-600

            font-semibold
            text-white

            shadow-lg
            shadow-green-600/20

            transition-all
            duration-200

            hover:bg-green-700

            active:scale-[0.98]
          "
        >
          <ShoppingBag size={18} />

          <span>
            Checkout
          </span>

          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default MobileCheckoutBar;