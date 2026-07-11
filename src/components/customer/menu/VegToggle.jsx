import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

const options = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "veg",
    label: "Veg",
  },
  {
    id: "nonveg",
    label: "Non-Veg",
  },
];

const VegToggle = ({
  value = "all",
  onChange,
}) => {
  return (
    <div
      className="
        relative
        inline-flex
        items-center

        rounded-2xl

        border
        border-slate-200

        bg-slate-100

        p-1

        shadow-sm
      "
    >
      {options.map((option) => {
        const active = value === option.id;

        return (
          <button
            key={option.id}
            onClick={() => onChange?.(option.id)}
            className="
              relative
              z-10

              flex
              min-w-[95px]
              items-center
              justify-center
              gap-2

              rounded-xl

              px-4
              py-2.5

              text-sm
              font-semibold

              transition-colors
              duration-300
            "
            style={{
              color: active
                ? "#fff"
                : "#475569",
            }}
          >
            {(option.id === "veg" ||
              option.id === "nonveg") && (
              <Leaf
                size={15}
                color={
                  option.id === "veg"
                    ? "#16A34A"
                    : "#DC2626"
                }
              />
            )}

            {option.label}

            {active && (
              <motion.div
                layoutId="vegToggle"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                className="
                  absolute
                  inset-0
                  -z-10

                  rounded-xl
                "
                style={{
                  background: "var(--primary)",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default VegToggle;