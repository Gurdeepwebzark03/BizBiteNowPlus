import {
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const MobileEmptyCart = ({
  onContinueShopping,
}) => {
  return (
    <div className="flex min-h-[65vh] flex-col items-center justify-center px-6 text-center">
      {/* Illustration */}
      <div
        className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-green-50
        "
      >
        <ShoppingBag
          size={42}
          className="text-green-600"
        />
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        Your Cart is Empty
      </h2>

      {/* Description */}
      <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
        Looks like you haven't added anything yet.
        Browse the menu and discover delicious meals.
      </p>

      {/* CTA */}
      <button
        onClick={onContinueShopping}
        className="
          mt-8
          flex
          h-12
          items-center
          justify-center
          gap-2

          rounded-xl

          bg-green-600

          px-8

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
        Continue Shopping

        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default MobileEmptyCart;