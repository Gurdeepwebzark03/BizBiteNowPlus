import {
  ArrowLeft,
  Share2,
  Headphones,
  ChevronRight,
  Clock3,
  Receipt,
  Phone,
  FileText,
} from "lucide-react";

import Card from "../common/Card";
import SecondaryButton from "../common/SecondaryButton";
import ContactDeliveryCard from "./ContactDeliveryCard";
import OrderTimeline from "./OrderTimeline";
import OrderStatusBadge from "./OrderStatusBadge";

const OrderCard = ({
  order,
  onBack,
  onViewBill,
  onHelp,
  onView,
  onShare,
}) => {
  if (!order) return null;

  const total =
    order.summary?.total ??
    order.total ??
    0;

  const itemCount =
    order.items?.reduce(
      (sum, item) => sum + item.quantity,
      0
    ) || 0;

  return (
    <div className="mx-auto max-w-full space-y-6">

      {/* Header */}

      <Card className="overflow-hidden rounded-3xl border border-slate-200">

        {/* Top */}

        <div className="flex flex-wrap items-start justify-between gap-6 border-b border-slate-100 p-6">

          {/* Left */}

          <div className="flex items-start gap-5">

            {onBack && (
              <button
                onClick={onBack}
                className="
                  mt-1
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  transition
                  hover:bg-slate-50
                "
              >
                <ArrowLeft size={18} />
              </button>
            )}

            <img
              src={
                order.restaurant?.image ||
                order.items?.[0]?.image
              }
              alt={order.restaurant?.name}
              className="
                h-24
                w-24
                rounded-2xl
                object-cover
              "
            />

            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-2xl font-bold text-slate-900">
                  {order.restaurant?.name}
                </h2>

                <ChevronRight
                  size={20}
                  className="text-slate-400"
                />

              </div>

              <p className="mt-2 text-sm text-slate-500">
                Order ID : #{order.id}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">

                <span>
                  {order.createdAt
                    ? new Date(
                        order.createdAt
                      ).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )
                    : "--"}
                </span>

                <span>•</span>

                <span>
                  {order.createdAt
                    ? new Date(
                        order.createdAt
                      ).toLocaleTimeString(
                        "en-IN",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )
                    : "--"}
                </span>

                <span>•</span>

                <span>
                  {itemCount} Items
                </span>

                <span>•</span>

                <span className="font-semibold text-slate-900">
                  ₹{total.toLocaleString("en-IN")}
                </span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-col items-end gap-4">

            <div className="text-right">

              <OrderStatusBadge
                status={order.status}
              />

              <p className="mt-4 text-sm text-slate-500">
                Estimated Delivery
              </p>

              <h3
                className="text-sm font-bold"
                style={{
                  color: "var(--primary)",
                }}
              >
                {order.estimatedDelivery ||
                  "--:--"}
              </h3>

            </div>

          </div>

        </div>

        {/* Timeline */}

        <div className="p-2">

<OrderTimeline
  currentStep={order.tracking.currentStep}
  timeline={order.tracking.steps}
/>

        </div>

      </Card>
      {/* Middle Section */}



  {/* Order Items */}

  <Card className="rounded-3xl w-full border border-slate-200 p-6">

    <h3 className="mb-6 text-xl font-bold text-slate-900">
      Order Items
    </h3>

    <div className="space-y-5">

      {order.items?.map((item) => (

        <div
          key={item.id}
          className="flex items-center gap-4"
        >

          <img
            src={item.image}
            alt={item.name}
            className="h-16 w-16 rounded-2xl object-cover"
          />

          <div className="flex-1">

            <h4 className="font-semibold text-slate-900">
              {item.name}
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              ₹{item.price}
            </p>

          </div>

          <span
            className="font-semibold"
            style={{
              color: "var(--primary)",
            }}
          >
            ×{item.quantity}
          </span>

        </div>

      ))}

    </div>



  </Card>

  


{/* Bottom Section */}

<div className="grid gap-6 lg:grid-cols-3">

  {/* Delivery Address */}

  <Card className="rounded-3xl border border-slate-200 p-6 lg:col-span-2">

    <div className="flex items-start gap-4">

      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          text-white
        "
        style={{
          background: "var(--primary)",
        }}
      >
        📍
      </div>

      <div className="flex-1">

        <h3 className="text-xl font-bold text-slate-900">
          Delivery Address
        </h3>

        <p className="mt-3 text-slate-600 leading-7">
          {order.address?.label || "Home"}
        </p>

        <p className="mt-2 text-slate-500">
          {order.address?.address}
        </p>

        {order.address?.landmark && (
          <p className="mt-2 text-sm text-slate-400">
            Landmark : {order.address.landmark}
          </p>
        )}

      </div>

    </div>

  </Card>

  {/* Payment */}

  <Card className="rounded-3xl border border-slate-200 p-6">

    <h3 className="text-xl font-bold text-slate-900">
      Payment
    </h3>

    <div className="mt-5 space-y-4">

      <div className="flex justify-between">

        <span className="text-slate-500">
          Method
        </span>

        <span className="font-semibold">
          {order.payment?.method || "UPI"}
        </span>

      </div>

      <div className="flex justify-between">

        <span className="text-slate-500">
          Status
        </span>

        <span
          className="font-semibold"
          style={{
            color: "var(--primary)",
          }}
        >
          {order.payment?.status || "Paid"}
        </span>

      </div>

      <div className="border-t border-slate-200 pt-4" />

      <div className="flex justify-between">

        <span className="text-lg font-bold">
          Total Paid
        </span>

        <span
          className="text-2xl font-bold"
          style={{
            color: "var(--primary)",
          }}
        >
          ₹{total.toLocaleString("en-IN")}
        </span>

      </div>

    </div>

  </Card>

</div>

{/* Bottom Buttons */}

<div className="flex flex-wrap justify-end gap-4">

  <button
    onClick={() => onHelp?.(order)}
    className="
      rounded-2xl
      border
      border-slate-300
      px-6
      py-3
      font-semibold
      transition
      hover:bg-slate-50
    "
  >
    Need Help
  </button>

  <button
    onClick={onView}
    className="
      flex
      items-center
      justify-center
      gap-2

      rounded-2xl

      border
      border-slate-300

      px-6
      py-3

      font-semibold

      transition
      hover:bg-slate-50
    "
  >
    <FileText size={18} />
    Order Details
  </button>

  <button
    onClick={() => onShare?.(order)}
    className="
      flex
      w-60
      items-center
      justify-center
      gap-2

      rounded-xl

      py-3

      text-sm
      font-semibold
      text-white

      transition
      hover:bg-green-800
    "
    style={{
      background: "var(--primary)",
    }}
  >
    <Phone size={18} />
    Contact Delivery Partner
  </button>

</div>
</div>
);
};

export default OrderCard;
