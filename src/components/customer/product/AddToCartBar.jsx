import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import QuantitySelector from "./QuantitySelector";

const AddToCartBar = ({
  quantity = 1,
  price = 0,
  loading = false,
  disabled = false,
  onQuantityChange,
  onAddToCart,
}) => {
  const total = quantity * price;

  return (
    <motion.div
      initial={{
        y: 120,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        fixed
        bottom-0
        left-0
        right-0

        z-50

        border-t
        border-slate-200

        bg-white/95
        backdrop-blur-xl

        shadow-[0_-10px_30px_rgba(0,0,0,0.08)]

        pb-[calc(env(safe-area-inset-bottom)+14px)]
      "
    >
      <div
        className="
          mx-auto

          flex
          max-w-7xl
          flex-col
          gap-4

          px-4
          pt-4

          sm:flex-row
          sm:items-center
          sm:justify-between

          lg:px-8
        "
      >
        {/* Price */}

        <div>

          <p className="text-sm text-slate-500">
            Total Amount
          </p>

          <motion.h2
            key={total}
            initial={{
              scale: 0.95,
            }}
            animate={{
              scale: 1,
            }}
            className="
              mt-1

              text-3xl
              font-bold

              text-slate-900
            "
          >
            ₹{total}
          </motion.h2>

          <p className="mt-1 text-xs text-slate-400">
            ₹{price} × {quantity}
          </p>

        </div>

        {/* Controls */}

        <div
          className="
            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
          "
        >
          <QuantitySelector
            quantity={quantity}
            onChange={onQuantityChange}
          />

          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            disabled={disabled || loading}
            onClick={onAddToCart}
            className={`
              flex
              items-center
              justify-center
              gap-3

              rounded-2xl

              px-7
              py-4

              font-semibold
              text-white

              shadow-lg

              transition-all

              ${
                disabled || loading
                  ? "cursor-not-allowed opacity-60"
                  : ""
              }
            `}
            style={{
              background: "var(--primary)",
            }}
          >
            <ShoppingBag size={20} />

            {loading
              ? "Adding..."
              : "Add to Cart"}

            <ArrowRight size={18} />
          </motion.button>

        </div>

      </div>
    </motion.div>
  );
};

export default AddToCartBar;