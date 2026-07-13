import { Leaf } from "lucide-react";

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

const CompactVegToggle = ({
  value = "all",
  onChange,
}) => {
  return (
    <div
      className="
        inline-flex

        items-center

        gap-1

        rounded-full

        border
        border-slate-200

        bg-white

        p-1

        shadow-sm

        lg:hidden
      "
    >
      {options.map((option) => {
        const active =
          value === option.id;

        return (
          <button
            key={option.id}
            onClick={() =>
              onChange?.(option.id)
            }
            className={`
              flex
              items-center
              justify-center
              gap-1

              whitespace-nowrap

              rounded-full

              px-3
              py-2

              text-xs
              font-semibold

              transition-all

              ${
                active
                  ? "text-white"
                  : "text-slate-600"
              }
            `}
            style={{
              background: active
                ? "var(--primary)"
                : "transparent",
            }}
          >
            {option.id !== "all" && (
              <Leaf
                size={12}
                color={
                  active
                    ? "#ffffff"
                    : option.id === "veg"
                    ? "#16A34A"
                    : "#DC2626"
                }
              />
            )}

            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default CompactVegToggle;