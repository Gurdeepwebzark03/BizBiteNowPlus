import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Percent,
  Tag,
  XCircle,
} from "lucide-react";

const MobileCouponSection = ({
  coupon = {},
  onChange,
  onApply,
}) => {
  const [showCoupons, setShowCoupons] =
    useState(false);

  const {
    code = "",
    applied = false,
    discount = 0,
    offers = [],
    error = "",
  } = coupon;

  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
      {/* Apply Coupon */}
      <div className="p-3">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50">
            <Percent
              size={16}
              className="text-orange-500"
            />
          </div>

          <h3 className="text-sm font-semibold text-slate-900">
            Apply Coupon
          </h3>
        </div>

        <div className="flex gap-2">
          <input
            value={code}
            placeholder="Coupon code"
            onChange={(e) =>
              onChange(e.target.value)
            }
            className={`
              h-10
              flex-1
              rounded-xl
              border
              px-3
              text-sm
              outline-none
              transition

              ${
                error
                  ? "border-red-500 bg-red-50"
                  : "border-slate-200 focus:border-green-600"
              }
            `}
          />

          <button
            onClick={() => onApply()}
            className="
              rounded-xl
              bg-green-600
              px-4
              text-sm
              font-semibold
              text-white
            "
          >
            {applied ? "Done" : "Apply"}
          </button>
        </div>

        {applied && (
          <div className="mt-2 flex items-center gap-2 rounded-xl bg-green-50 px-3 py-2 text-green-700">
            <CheckCircle2 size={15} />

            <span className="text-xs font-medium">
              Saved ₹{discount}
            </span>
          </div>
        )}

        {!applied && error && (
          <div className="mt-2 flex items-center gap-2 text-xs font-medium text-red-600">
            <XCircle size={14} />

            <span>
              Invalid coupon code
            </span>
          </div>
        )}
      </div>

      {/* Available Coupons */}
      {offers.length > 0 && (
        <>
          <button
            onClick={() =>
              setShowCoupons(!showCoupons)
            }
            className="
              flex
              w-full
              items-center
              justify-between
              border-t
              border-slate-100
              px-4
              py-3
            "
          >
            <span className="text-sm font-medium">
              Available Coupons
            </span>

            <ChevronDown
              size={16}
              className={`transition-transform ${
                showCoupons
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>

          {showCoupons && (
            <div className="space-y-2 border-t border-slate-100 p-3">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-slate-200
                    p-3
                  "
                >
                  <div className="flex gap-2">
                    <Tag
                      size={15}
                      className="mt-0.5 text-green-600"
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        {offer.code}
                      </p>

                      <p className="text-[11px] text-slate-500">
                        {offer.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      onApply(
                        offer.code
                      )
                    }
                    className="
                      rounded-lg
                      bg-green-50
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-green-600
                    "
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MobileCouponSection;