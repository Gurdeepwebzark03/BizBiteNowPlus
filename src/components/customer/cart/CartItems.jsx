import { ShoppingBag } from "lucide-react";

import CartItemCard from "./CartItemCard";
import EmptyCart from "./EmptyCart";

const CartItems = ({
  items = [],
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  if (!items.length) {
    return <EmptyCart />;
  }

  return (
    <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
            <ShoppingBag size={20} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Items in Cart
            </h2>

            <p className="text-sm text-gray-500">
              {items.length} {items.length === 1 ? "item" : "items"}
            </p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            onIncrease={() => onIncrease?.(item)}
            onDecrease={() => onDecrease?.(item)}
            onRemove={() => onRemove?.(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default CartItems;