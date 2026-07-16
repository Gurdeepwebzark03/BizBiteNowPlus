import {
  Minus,
  Plus,
} from "lucide-react";

const MobileQuantitySelector = ({
  quantity = 1,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div
      className="
        inline-flex
        items-center
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-slate-50
      "
    >
      <button
        type="button"
        onClick={onDecrease}
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          text-slate-600
          transition
          hover:bg-slate-100
          active:scale-95
        "
      >
        <Minus size={14} strokeWidth={2.5} />
      </button>

      <div
        className="
          flex
          h-8
          min-w-[36px]
          items-center
          justify-center
          border-x
          border-slate-200
          bg-white
          px-2
          text-sm
          font-semibold
          text-slate-900
        "
      >
        {quantity}
      </div>

      <button
        type="button"
        onClick={onIncrease}
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          text-green-600
          transition
          hover:bg-green-50
          active:scale-95
        "
      >
        <Plus size={14} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default MobileQuantitySelector;