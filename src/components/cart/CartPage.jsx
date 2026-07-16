import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CouponSection from "./CouponSection";
import OrderSummary from "./OrderSummary";
import PaymentMethods from "./PaymentMethods";

const CartPage = ({
  cartItems = [],
  deliveryAddress,
  summary,
  coupon,
  onAddressClick,
  onIncrease,
  onDecrease,
  onRemove,
  onCouponChange,
  onApplyCoupon,
  onCheckout,
  onContinueShopping,
}) => {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-full px-4 py-6 sm:px-6 lg:px-8">
        <CartHeader
          address={deliveryAddress}
          itemCount={cartItems.length}
          onAddressClick={onAddressClick}
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
          <section className="space-y-6">
            <CartItems
              items={cartItems}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />

            <CouponSection
              coupon={coupon}
              onChange={onCouponChange}
              onApply={onApplyCoupon}
            />

            <PaymentMethods />
          </section>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <OrderSummary
              summary={summary}
              onCheckout={onCheckout}
              onContinueShopping={onContinueShopping}
            />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CartPage;