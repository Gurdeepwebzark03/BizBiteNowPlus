import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useCart } from "../../context/CartContext";

import CartPage from "../../components/cart/CartPage";
import CartSkeleton from "../../components/cart/CartSkeleton";

import MobileCartPage from "../../components/cart/mobile/MobileCartPage";
import MobileCartSkeleton from "../../components/cart/mobile/MobileCartSkeleton";

import couponsData from "../../data/customer/couponsData";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    updateItem,
    removeItem,
  } = useCart();

  const [selectedCoupon, setSelectedCoupon] =
    useState(null);

  const [couponCode, setCouponCode] =
    useState("");

  const [couponError, setCouponError] =
    useState("");

  const loading = false;

  const updateQuantity = async (
    item,
    type
  ) => {
    const quantity =
      type === "inc"
        ? item.quantity + 1
        : item.quantity - 1;

    if (quantity <= 0) {
      await removeItem(item.id);
      return;
    }

    await updateItem(item.id, quantity);
  };

  const summary = useMemo(() => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.total,
      0
    );

    const discount = selectedCoupon
      ? selectedCoupon.discountType === "flat"
        ? selectedCoupon.discount
        : Math.round(
            (subtotal *
              selectedCoupon.discount) /
              100
          )
      : 0;

    const freeDeliveryThreshold = 499;

    const deliveryFee =
      subtotal >= freeDeliveryThreshold
        ? 0
        : 40;

    const taxes = Math.round(
      subtotal * 0.05
    );

    const amountRemaining = Math.max(
      freeDeliveryThreshold - subtotal,
      0
    );

    const progress = Math.min(
      (subtotal /
        freeDeliveryThreshold) *
        100,
      100
    );

    const freeDeliveryUnlocked =
      subtotal >=
      freeDeliveryThreshold;

    return {
      subtotal,
      discount,
      deliveryFee,
      taxes,
      total:
        subtotal +
        deliveryFee +
        taxes -
        discount,
      freeDeliveryThreshold,
      amountRemaining,
      progress,
      freeDeliveryUnlocked,
    };
  }, [cartItems, selectedCoupon]);

  const sharedProps = {
    cartItems,
    summary,

    coupon: {
      code: couponCode,
      applied: !!selectedCoupon,
      discount: summary.discount,
      error: couponError,
      offers: couponsData.filter(
        (coupon) => !coupon.expired
      ),
    },

    deliveryAddress: {
      label: "Home",
      address: "Sector 22, Chandigarh",
    },

    onIncrease: (item) =>
      updateQuantity(item, "inc"),

    onDecrease: (item) =>
      updateQuantity(item, "dec"),

    onRemove: (item) =>
      removeItem(item.id),

    onCouponChange: (value) => {
      setCouponCode(value);

      if (couponError) {
        setCouponError("");
      }

      if (selectedCoupon) {
        setSelectedCoupon(null);
      }
    },

    onApplyCoupon: (selectedCode) => {
      const code = (
        selectedCode ||
        couponCode
      )
        .trim()
        .toLowerCase();

      const coupon =
        couponsData.find(
          (c) =>
            c.code.toLowerCase() ===
            code
        );

      if (!coupon) {
        setCouponError(
          "The coupon is invalid. Please enter a valid coupon."
        );

        setSelectedCoupon(null);
        return;
      }

      setCouponError("");
      setCouponCode(coupon.code);
      setSelectedCoupon(coupon);
    },

    onCheckout: () =>
      navigate("/customer/checkout"),

    onContinueShopping: () =>
      navigate("/customer/menu"),

    onAddressClick: () => {},

    onBack: () => navigate(-1),
  };

  if (loading) {
    return (
      <>
        <div className="lg:hidden">
          <MobileCartSkeleton />
        </div>

        <div className="hidden lg:block">
          <CartSkeleton />
        </div>
      </>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Mobile */}
      <div className="lg:hidden">
        <MobileCartPage
          {...sharedProps}
        />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <CartPage
          {...sharedProps}
        />
      </div>
    </motion.div>
  );
};

export default Cart;