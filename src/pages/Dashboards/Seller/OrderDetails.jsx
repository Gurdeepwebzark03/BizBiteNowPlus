import { motion } from "framer-motion";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
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
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const OrderDetails = () => {
  const navigate = useNavigate();

  // Dummy data (replace with API later)
  const order = {
    id: 1001,
    customerName: "Rahul Sharma",
    phone: "9876543210",
    address: "Borivali West, Mumbai - 400092",
    status: "NEW",
    paymentMethod: "COD",
    total: 8500,
    createdAt: "30 June 2026, 11:30 AM",
    items: [
      {
        productId: 1,
        quantity: 2,
        product: {
          name: "Silk Saree",
          sellingPrice: 5000,
          imageUrl:
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
        },
      },
      {
        productId: 2,
        quantity: 1,
        product: {
          name: "Cotton Kurti",
          sellingPrice: 3500,
          imageUrl:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
        },
      },
    ],
  };

  return (
    <motion.div
      className="mx-auto max-w-7xl p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="mb-6 flex flex-wrap items-center justify-between gap-4"
      >
        <Button variant="outline" onClick={() => navigate("/seller/orders")}>
          <ArrowLeft size={18} />
          Back
        </Button>

        <div className="text-right">
          <h1 className="text-2xl font-bold text-black">
            Order #{order.id}
          </h1>

          <span
            className={`mt-2 inline-block rounded-full px-4 py-1 text-sm font-semibold ${
              order.status === "DELIVERED"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {order.status}
          </span>
        </div>
      </motion.div>

      {/* Customer & Summary */}
      <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
        {/* Customer Details */}
        <Card>
          <h2 className="mb-5 text-lg font-bold">Customer Details</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="text-[#1A4D2E]" size={18} />
              <span>{order.customerName}</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#1A4D2E]" size={18} />
              <span>{order.phone}</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-red-500" size={18} />
              <span>{order.address}</span>
            </div>
          </div>
        </Card>

        {/* Order Summary */}
        <Card>
          <h2 className="mb-5 text-lg font-bold">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <IndianRupee size={18} />
                Total
              </span>

              <span className="font-semibold text-[#1A4D2E]">
                ₹{order.total}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <CreditCard size={18} />
                Payment
              </span>

              <span>{order.paymentMethod}</span>
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                Date
              </span>

              <span className="text-sm text-black-600 sm:text-right">
                {order.createdAt}
              </span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Ordered Items */}
      <motion.div variants={itemVariants}>
        <Card className="mt-6">
          <div className="mb-5 flex items-center gap-2">
            <Package className="text-[#F4A300]" />
            <h2 className="text-lg font-bold">Ordered Items</h2>
          </div>

          <div className="space-y-4">
            {order.items.map((item, index) => (
              <motion.div
                key={item.productId}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.35,
                }}
                className="flex flex-col gap-4 rounded-xl border border-gray-200 p-4 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-black">
                      {item.product.name}
                    </h3>

                    <p className="text-sm text-black">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="text-lg font-bold text-[#1A4D2E]">
                  ₹{item.product.sellingPrice}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Bottom Button */}
      <motion.div variants={itemVariants} className="mt-8 flex justify-end">
        {order.status === "NEW" ? (
          <Button>Mark as Delivered</Button>
        ) : (
          <span className="flex items-center gap-2 rounded-full bg-green-100 px-5 py-3 font-semibold text-green-700">
            <CircleCheck size={18} />
            Delivered
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default OrderDetails;
