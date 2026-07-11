import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import SectionHeader from "../../components/customer/common/SectionHeader";
import PrimaryButton from "../../components/customer/common/PrimaryButton";
import OrderSummary from "../../components/customer/orders/OrderSummary";
import ProductCard from "../../components/customer/menu/ProductCard";

import CouponCard from "../../components/customer/rewards/CouponCard";
import LoyaltyCard from "../../components/customer/rewards/LoyaltyCard";
import RewardProgress from "../../components/customer/rewards/RewardProgress";

import { menuData } from "../../data/customer/menuData";
import couponsData from "../../data/customer/couponsData";
import {
  loyaltyData,
} from "../../data/customer/rewardsData";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] =
    useState([
      {
        ...menuData[0],
        quantity: 2,
      },
      {
        ...menuData[3],
        quantity: 1,
      },
    ]);

  const [selectedCoupon, setSelectedCoupon] =
    useState(null);

  const updateQuantity = (
    id,
    type
  ) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id !== id)
            return item;

          return {
            ...item,
            quantity:
              type === "inc"
                ? item.quantity + 1
                : Math.max(
                    1,
                    item.quantity - 1
                  ),
          };
        })
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  const summary = useMemo(() => {
    const subtotal =
      cartItems.reduce(
        (sum, item) =>
          sum +
          item.price *
            item.quantity,
        0
      );

const discount = selectedCoupon
  ? selectedCoupon.discountType === "flat"
    ? selectedCoupon.discount
    : Math.round(
        (subtotal * selectedCoupon.discount) / 100
      )
  : 0;

    const delivery =
      subtotal >= 499
        ? 0
        : 40;

    const tax = Math.round(
      subtotal * 0.05
    );

    return {
      subtotal,
      delivery,
      tax,
      discount,
      total:
        subtotal +
        delivery +
        tax -
        discount,
    };
  }, [
    cartItems,
    selectedCoupon,
  ]);
    return (
    <div className="space-y-8 lg:pl-10 pb-32">

      {/* Header */}

      <SectionHeader
        title="Cart"
        subtitle={`${cartItems.length} items in your cart`}
      />


      {/* Cart Items */}

      <section className="space-y-5">

        {cartItems.length === 0 ? (

          <div
            className="
              rounded-[28px]

              border-2
              border-dashed
              border-slate-300

              bg-white

              p-14

              text-center
            "
          >

            <h3 className="text-xl font-bold text-slate-900">
              Your Cart is Empty
            </h3>

            <p className="mt-2 text-slate-500">
              Add delicious items from the menu.
            </p>

            <PrimaryButton
              className="mt-6"
              onClick={() =>
                navigate("/customer/menu")
              }
            >
              Browse Menu
            </PrimaryButton>

          </div>

        ) : (

          <div className="space-y-4">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="
                  rounded-[28px]

                  border
                  border-slate-200

                  bg-white

                  p-5
                "
              >

                <div className="flex gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      h-24
                      w-24

                      rounded-2xl

                      object-cover
                    "
                  />

                  <div className="flex-1">

                    <h3 className="font-bold text-slate-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      ₹{item.price} each
                    </p>


                    <div className="mt-4 flex items-center justify-between">

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              "dec"
                            )
                          }
                          className="
                            h-9
                            w-9

                            rounded-full

                            border
                            border-slate-200
                          "
                        >
                          -
                        </button>


                        <span className="font-semibold">
                          {item.quantity}
                        </span>


                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              "inc"
                            )
                          }
                          className="
                            h-9
                            w-9

                            rounded-full

                            text-white
                          "
                          style={{
                            background:
                              "var(--primary)",
                          }}
                        >
                          +
                        </button>

                      </div>


                      <button
                        onClick={() =>
                          removeItem(
                            item.id
                          )
                        }
                        className="
                          text-sm
                          font-medium
                          text-red-500
                        "
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>


  

      {/* Coupons */}

      <section className="space-y-4">

        <h2 className="text-xl font-bold text-slate-900">
          Available Coupons
        </h2>


        <div className="grid gap-4 lg:grid-cols-2">

          {couponsData
            .filter(
              (coupon) =>
                !coupon.expired
            )
            .map((coupon) => (

              <CouponCard
                key={coupon.id}
                coupon={coupon}
                applied={
                  selectedCoupon?.id ===
                  coupon.id
                }
                onApply={() =>
                  setSelectedCoupon(
                    coupon
                  )
                }
              />

            ))}

        </div>

      </section>


     {/* Order Summary */}
<section>
<OrderSummary
  subtotal={summary.subtotal}
  deliveryFee={summary.delivery}
  tax={summary.tax}
  packagingFee={0}
  discount={summary.discount}
  coupon={selectedCoupon?.code || ""}
  loyaltyPoints={loyaltyData.points || 0}
  total={summary.total}
/>
        <PrimaryButton
          className="
            mt-6
            w-full
          "
          onClick={() =>
            navigate(
              "/customer/checkout"
            )
          }
        >
          Proceed To Checkout
        </PrimaryButton>
</section>        
    </div>
  );
};


export default Cart;