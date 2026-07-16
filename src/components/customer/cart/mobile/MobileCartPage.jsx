import MobileCartHeader from "./MobileCartHeader";
import MobileCartItems from "./MobileCartItems";
import MobileCouponSection from "./MobileCouponSection";
import MobileOrderSummary from "./MobileOrderSummary";
import MobileDeliveryProgress from "./MobileDeliveryProgress";
import { ArrowRight } from "lucide-react";
import MobileEmptyCart from "./MobileEmptyCart";

const MobileCartPage = ({
  cartItems = [],
  deliveryAddress,
  summary,
  coupon,

  onBack,
  onAddressClick,

  onIncrease,
  onDecrease,
  onRemove,
onContinueShopping,
  onCouponChange,
  onApplyCoupon,

  onCheckout,
}) => {
  const isEmpty = cartItems.length === 0;

  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <div className="mx-auto max-w-md">
        <MobileCartHeader
          itemCount={cartItems.length}
          address={deliveryAddress}
          onBack={onBack}
          onAddressClick={onAddressClick}
        />

        {isEmpty ? (
          <MobileEmptyCart 
           onContinueShopping={onContinueShopping}/>
        ) : (
          <>
            <div className="space-y-3 px-3 pb-3">
              <MobileCartItems
                items={cartItems}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />

              <MobileCouponSection
                coupon={coupon}
                onChange={onCouponChange}
                onApply={onApplyCoupon}
              />

              <MobileOrderSummary
                summary={summary}
              />

              <MobileDeliveryProgress
                progress={summary.progress}
                amountRemaining={
                  summary.amountRemaining
                }
                threshold={
                  summary.freeDeliveryThreshold
                }
                unlocked={
                  summary.freeDeliveryUnlocked
                }
              />
              <div className="pt-2 pb-4">
  <button
    onClick={onCheckout}
    className="
      flex
      h-12
      w-full
      items-center
      justify-center
      gap-2

      rounded-xl

      bg-green-600

      text-sm
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
    <span>
      Proceed to Checkout
    </span>

    <ArrowRight size={18} />
  </button>
</div>
            </div>


          </>
        )}
      </div>
    </main>
  );
};

export default MobileCartPage;