import { motion } from "framer-motion";
import {
  ArrowLeft,
  User,
  Phone,
  MapPin,
  Package,
  Calendar,
  CreditCard,
  IndianRupee,
  CircleCheck,
  FileText,
  Receipt,
  BadgeCheck,
  Clock,
  Truck,
  StickyNote,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Card from "../../../components/UI/Card";
import Button from "../../../components/UI/Button";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const OrderDetails = () => {
  const navigate = useNavigate();

  const order = {
    id: 1001,
    orderId: "ORD-1001",

    customerName: "Rahul Sharma",
    phone: "9876543210",
    address:
      "Borivali West, Mumbai - 400092",

    status: "Preparing",

    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",

    orderType: "Delivery",

    createdAt: "30 June 2026 • 11:30 AM",

    notes:
      "Please ring the bell once. Do not call unless necessary.",

    subtotal: 790,
    deliveryCharge: 40,
    packagingCharge: 20,
    tax: 50,
    discount: 0,
    total: 900,

    items: [
      {
        id: 1,

        quantity: 2,

        instructions:
          "Extra spicy. Cut into halves.",

        product: {
          id: 101,

          name: "Chicken Burger",

          description:
            "Grilled chicken patty with lettuce, cheese & signature sauce.",

          imageUrl:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",

          sellingPrice: 350,

          selectedSize: {
            name: "Large",
            price: 80,
          },

          selectedVariant: {
            name: "Cheese Burst",
            price: 50,
          },

          addons: [
            {
              name: "Extra Cheese",
              price: 40,
              quantity: 1,
            },
            {
              name: "French Fries",
              price: 90,
              quantity: 1,
            },
          ],
        },
      },

      {
        id: 2,

        quantity: 1,

        instructions: "",

        product: {
          id: 102,

          name: "Cold Coffee",

          description:
            "Fresh cold coffee with chocolate syrup.",

          imageUrl:
            "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600",

          sellingPrice: 200,

          selectedSize: {
            name: "Medium",
            price: 0,
          },

          selectedVariant: null,

          addons: [
            {
              name: "Whipped Cream",
              price: 30,
              quantity: 1,
            },
          ],
        },
      },
    ],
  };

  return (
    <motion.div
      className="mx-auto max-w-full space-y-6 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ================= Header ================= */}

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <Button
          variant="outline"
          onClick={() => navigate("/seller/orders")}
        >
          <ArrowLeft size={18} />
          Back
        </Button>

        <div className="text-right">
          <p className="text-sm text-slate-500">
            {order.orderId}
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Order Details
          </h1>

          <span className="mt-3 inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            {order.status}
          </span>
        </div>
      </motion.div>

      {/* ================= Top Cards ================= */}

      <motion.div
        variants={itemVariants}
        className="grid gap-6 xl:grid-cols-3"
      >
        {/* Customer Details */}

        <Card className="p-6">
          <h2 className="mb-6 text-lg font-bold">
            Customer Details
          </h2>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#16522d]/10 p-3">
                <User
                  size={18}
                  className="text-[#16522d]"
                />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Customer
                </p>

                <p className="font-semibold">
                  {order.customerName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#16522d]/10 p-3">
                <Phone
                  size={18}
                  className="text-[#16522d]"
                />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Phone
                </p>

                <p className="font-medium">
                  {order.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-red-100 p-3">
                <MapPin
                  size={18}
                  className="text-red-500"
                />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Delivery Address
                </p>

                <p className="leading-relaxed">
                  {order.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-amber-100 p-3">
                <StickyNote
                  size={18}
                  className="text-amber-600"
                />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Customer Notes
                </p>

                <p className="leading-relaxed">
                  {order.notes}
                </p>
              </div>
            </div>
          </div>
        </Card>
                {/* Order Information */}

        <Card className="p-6">
          <h2 className="mb-6 text-lg font-bold">
            Order Information
          </h2>

          <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3">
                  <Receipt
                    size={18}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Order ID
                  </p>

                  <p className="font-semibold">
                    {order.orderId}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-100 p-3">
                  <Calendar
                    size={18}
                    className="text-green-700"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Order Date
                  </p>

                  <p>{order.createdAt}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-orange-100 p-3">
                  <Truck
                    size={18}
                    className="text-orange-600"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Order Type
                  </p>

                  <p>{order.orderType}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-purple-100 p-3">
                  <CreditCard
                    size={18}
                    className="text-purple-600"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Payment Method
                  </p>

                  <p>{order.paymentMethod}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-100 p-3">
                  <BadgeCheck
                    size={18}
                    className="text-cyan-700"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Payment Status
                  </p>

                  <span
                    className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      order.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-indigo-100 p-3">
                  <Clock
                    size={18}
                    className="text-indigo-700"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Current Status
                  </p>

                  <span className="mt-1 inline-flex rounded-full bg-[#16522d]/10 px-3 py-1 text-xs font-semibold text-[#16522d]">
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Price Breakdown */}

        <Card className="p-6">
          <h2 className="mb-6 text-lg font-bold">
            Price Breakdown
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                Subtotal
              </span>

              <span className="font-medium">
                ₹{order.subtotal}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                Delivery Charge
              </span>

              <span className="font-medium">
                ₹{order.deliveryCharge}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                Packaging Charge
              </span>

              <span className="font-medium">
                ₹{order.packagingCharge}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                GST / Tax
              </span>

              <span className="font-medium">
                ₹{order.tax}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                Discount
              </span>

              <span className="font-medium text-green-600">
                - ₹{order.discount}
              </span>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-lg font-bold">
                  <IndianRupee size={20} />
                  Grand Total
                </span>

                <span className="text-2xl font-bold text-[#16522d]">
                  ₹{order.total}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* ================= Ordered Items ================= */}

      <motion.div variants={itemVariants}>
        <Card className="p-6">
          <div className="mb-6 flex items-center gap-3">
            <Package className="text-[#F4A300]" />

            <div>
              <h2 className="text-xl font-bold">
                Ordered Items
              </h2>

              <p className="text-sm text-slate-500">
                {order.items.length} Item(s)
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {order.items.map((item, index) => {
  const addonsTotal = item.product.addons.reduce(
    (total, addon) =>
      total + addon.price * addon.quantity,
    0
  );

  const sizePrice =
    item.product.selectedSize?.price || 0;

  const variantPrice =
    item.product.selectedVariant?.price || 0;

  const itemPrice =
    item.product.sellingPrice +
    sizePrice +
    variantPrice +
    addonsTotal;

  const totalPrice =
    itemPrice * item.quantity;

  return (
    <motion.div
      key={item.id}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.08,
      }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
    >
      <div className="flex flex-col gap-6 p-6 lg:flex-row">
        {/* Product Image */}

        <img
          src={item.product.imageUrl}
          alt={item.product.name}
          className="h-32 w-32 rounded-2xl object-cover"
        />

        {/* Product Details */}

        <div className="flex-1 space-y-5">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-bold text-slate-900">
                {item.product.name}
              </h3>

              <span className="rounded-full bg-[#16522d]/10 px-4 py-1 text-sm font-semibold text-[#16522d]">
                Qty × {item.quantity}
              </span>
            </div>

            <p className="mt-2 text-slate-500">
              {item.product.description}
            </p>
          </div>

          {/* Size */}

          {item.product.selectedSize && (
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">
                Selected Size
              </p>

              <div className="flex items-center justify-between">
                <span className="font-medium">
                  {item.product.selectedSize.name}
                </span>

                <span className="font-semibold text-[#16522d]">
                  +₹
                  {item.product.selectedSize.price}
                </span>
              </div>
            </div>
          )}

          {/* Variant */}

          {item.product.selectedVariant && (
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">
                Selected Variant
              </p>

              <div className="flex items-center justify-between">
                <span className="font-medium">
                  {
                    item.product.selectedVariant
                      .name
                  }
                </span>

                <span className="font-semibold text-[#16522d]">
                  +₹
                  {
                    item.product.selectedVariant
                      .price
                  }
                </span>
              </div>
            </div>
          )}

          {/* Addons */}

          {item.product.addons.length > 0 && (
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="mb-3 text-xs uppercase tracking-wide text-slate-400">
                Add-ons
              </p>

              <div className="space-y-2">
                {item.product.addons.map(
                  (addon) => (
                    <div
                      key={addon.name}
                      className="flex items-center justify-between"
                    >
                      <span>
                        {addon.name}
                        <span className="ml-2 text-slate-500">
                          ×
                          {
                            addon.quantity
                          }
                        </span>
                      </span>

                      <span className="font-medium">
                        ₹
                        {addon.price *
                          addon.quantity}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* Instructions */}

          {item.instructions && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <FileText
                  size={16}
                  className="text-amber-600"
                />

                <p className="font-semibold text-amber-700">
                  Special Instructions
                </p>
              </div>

              <p className="text-sm text-slate-700">
                {item.instructions}
              </p>
            </div>
          )}
        </div>

        {/* Price */}

        <div className="flex min-w-[220px] flex-col justify-between rounded-2xl bg-slate-50 p-5">
          <div>
            <p className="mb-4 text-sm font-semibold text-slate-500">
              Price Details
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Base Price</span>

                <span>
                  ₹
                  {
                    item.product
                      .sellingPrice
                  }
                </span>
              </div>

              <div className="flex justify-between">
                <span>Size</span>

                <span>
                  ₹{sizePrice}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Variant</span>

                <span>
                  ₹{variantPrice}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Add-ons</span>

                <span>
                  ₹{addonsTotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Quantity</span>

                <span>
                  ×{item.quantity}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Item Total
            </p>

            <p className="mt-1 text-2xl font-bold text-[#16522d]">
              ₹{totalPrice}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
})}
          </div>
        </Card>
      </motion.div>

      {/* ================= Bottom Action Bar ================= */}

      <motion.div
        variants={itemVariants}
        className="sticky bottom-6 z-20"
      >
        <Card className="border border-slate-200 p-5 shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Order Summary */}

            <div>
              <p className="text-sm text-slate-500">
                Order Summary
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                  {order.items.length} Item(s)
                </span>

                <span className="rounded-full bg-[#16522d]/10 px-4 py-2 text-sm font-semibold text-[#16522d]">
                  ₹{order.total}
                </span>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    order.paymentStatus === "Paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.paymentStatus}
                </span>
              </div>
            </div>

            {/* Actions */}

            <div className="flex flex-wrap justify-end gap-3">
              {order.status === "NEW" && (
                <>
                  <Button variant="outline">
                    Reject
                  </Button>

                  <Button>
                    Accept Order
                  </Button>
                </>
              )}

              {order.status === "Accepted" && (
                <Button>
                  Start Preparing
                </Button>
              )}

              {order.status === "Preparing" && (
                <Button>
                  Mark Ready
                </Button>
              )}

              {order.status === "Ready" && (
                <Button>
                  Out For Delivery
                </Button>
              )}

              {order.status ===
                "Out for Delivery" && (
                <Button>
                  Mark Delivered
                </Button>
              )}

              {order.status ===
                "Delivered" && (
                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-3 font-semibold text-green-700">
                  <CircleCheck size={18} />
                  Order Delivered
                </span>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default OrderDetails;
          