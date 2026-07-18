import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({
  quantity,
  setQuantity,
}) {
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Quantity
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Select the number of servings
          </p>
        </div>

        <div className="rounded-full bg-[#16522d]/10 px-3 py-1 text-xs font-semibold text-[#16522d]">
          {quantity} {quantity > 1 ? "Items" : "Item"}
        </div>

      </div>

      <div className="mt-6 flex items-center justify-center">

        <div className="flex items-center rounded-2xl border border-gray-200 bg-gray-50 p-2">

          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              bg-white
              transition-all
              duration-200
              hover:border-[#16522d]
              hover:bg-[#16522d]
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-40
              disabled:hover:border-gray-200
              disabled:hover:bg-white
              disabled:hover:text-gray-500
            "
          >
            <Minus size={18} />
          </button>

          <div
            className="
              flex
              min-w-[90px]
              flex-col
              items-center
              justify-center
              px-4
            "
          >
            <span className="text-3xl font-bold text-[#16522d]">
              {quantity}
            </span>

            <span className="text-xs text-gray-500">
              Qty
            </span>
          </div>

          <button
            type="button"
            onClick={increaseQuantity}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-[#16522d]
              text-white
              transition-all
              duration-200
              hover:bg-[#124325]
            "
          >
            <Plus size={18} />
          </button>

        </div>

      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">

        {[1, 2, 4].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setQuantity(value)}
            className={`
              rounded-xl
              border
              py-3
              text-sm
              font-semibold
              transition-all
              duration-200
              ${
                quantity === value
                  ? "border-[#16522d] bg-[#16522d] text-white"
                  : "border-gray-200 bg-white text-slate-700 hover:border-[#16522d]"
              }
            `}
          >
            {value}
          </button>
        ))}

      </div>



    </div>
  );
}