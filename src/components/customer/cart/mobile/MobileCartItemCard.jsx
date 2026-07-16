import {
  Leaf,
  Drumstick,
  Trash2,
} from "lucide-react";

import MobileQuantitySelector from "./MobileQuantitySelector";

const MobileCartItemCard = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const {
    image,
    name,
    restaurant,
    price,
    quantity,
    veg = true,
  } = item;

  return (
    <article className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm">
      {/* Image */}
      <div className="h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded-xl border border-slate-200">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 justify-between gap-3">
        {/* Left */}
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-1">
<div
  className={`
    flex
    h-4
    w-4
    items-center
    justify-center
    rounded-[2px]
    border

    ${
      veg
        ? "border-green-600"
        : "border-red-600"
    }
  `}
>
  {veg ? (
    <div className="h-2 w-2 rounded-full bg-green-600" />
  ) : (
    <div
      className="
        h-0
        w-0
        border-l-[4px]
        border-r-[4px]
        border-b-[7px]
        border-l-transparent
        border-r-transparent
        border-b-red-600
      "
    />
  )}
</div>

            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              {veg ? "Veg" : "Non Veg"}
            </span>
          </div>

          <h3 className="truncate text-[15px] font-semibold text-slate-900">
            {name}
          </h3>

          <p className="truncate text-xs text-slate-500">
            {restaurant}
          </p>

          <div className="mt-2">
            <MobileQuantitySelector
              quantity={quantity}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end justify-between">
          <span className="text-[15px] font-bold text-slate-900">
            ₹{price}
          </span>

          <button
            onClick={onRemove}
            className="
              rounded-lg
              p-1.5
              text-red-400
              transition
              hover:bg-red-50
              hover:text-red-500
            "
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default MobileCartItemCard;