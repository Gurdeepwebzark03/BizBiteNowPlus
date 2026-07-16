import {
  ReceiptText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const MobileOrderSummary = ({
  summary = {},
}) => {
  const [expanded, setExpanded] =
    useState(false);

  const {
    subtotal = 0,
    discount = 0,
    deliveryFee = 0,
    taxes = 0,
    total = 0,
  } = summary;

  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
      {/* Header */}
      <button
        onClick={() =>
          setExpanded(!expanded)
        }
        className="
          flex
          w-full
          items-center
          justify-between
          px-4
          py-3
        "
      >
        <div className="flex items-center gap-2">
          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-green-50
            "
          >
            <ReceiptText
              size={16}
              className="text-green-600"
            />
          </div>

          <div className="text-left">
            <h3 className="text-sm font-semibold text-slate-900">
              Order Summary
            </h3>

            <p className="text-xs text-slate-500">
              Total ₹{total}
            </p>
          </div>
        </div>

        {expanded ? (
          <ChevronUp
            size={18}
            className="text-slate-500"
          />
        ) : (
          <ChevronDown
            size={18}
            className="text-slate-500"
          />
        )}
      </button>

      {/* Details */}
      {expanded && (
        <div className="border-t border-slate-100 px-4 py-3">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">
                Item Total
              </span>

              <span className="font-medium">
                ₹{subtotal}
              </span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between">
                <span className="text-green-600">
                  Discount
                </span>

                <span className="font-medium text-green-600">
                  -₹{discount}
                </span>
              </div>
            )}

            <div className="flex justify-between">
              <span className="text-slate-500">
                Delivery
              </span>

              <span className="font-medium">
                {deliveryFee === 0 ? (
                  <span className="text-green-600">
                    FREE
                  </span>
                ) : (
                  `₹${deliveryFee}`
                )}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Taxes
              </span>

              <span className="font-medium">
                ₹{taxes}
              </span>
            </div>

            <div className="my-2 border-t border-dashed border-slate-200" />

            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-slate-900">
                Grand Total
              </span>

              <span className="text-lg font-bold text-green-600">
                ₹{total}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MobileOrderSummary;