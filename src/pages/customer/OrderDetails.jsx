import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

import OrderDetailsPage from "../../components/customer/orders/OrderDetailsPage";
import MobileOrderDetailsPage from "../../components/customer/orders/MobileOrderDetailsPage";
import OrderDetailsSkeleton from "../../components/customer/orders/OrderDetailsSkeleton";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const order = state?.order;

  const [loading] = useState(false);

  if (loading) {
    return <OrderDetailsSkeleton />;
  }

  if (!order) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Order Not Found
          </h2>

          <p className="mt-2 text-slate-500">
            The requested order could not be found.
          </p>

          <button
            onClick={() =>
              navigate("/customer/orders")
            }
            className="
              mt-6
              rounded-xl
              bg-green-600
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-green-700
            "
          >
            Back to Orders
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleShare = () => {
    console.log("Share Order", order);
  };

  const handleDownloadInvoice = () => {
    console.log("Download Invoice", order);
  };

  const handlePrint = () => {
    window.print();
  };

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
      className="space-y-6"
    >
      <div
        className="
          w-full
          min-w-0
          max-w-[1760px]

          pb-28

          px-1
          sm:px-2
          lg:px-10
        "
      >
        {/* Desktop */}
        <OrderDetailsPage
          order={order}
          onBack={handleBack}
          onShare={handleShare}
          onDownloadInvoice={
            handleDownloadInvoice
          }
          onPrint={handlePrint}
        />

        {/* Mobile */}
        <MobileOrderDetailsPage
          order={order}
          onBack={handleBack}
          onShare={handleShare}
          onDownloadInvoice={
            handleDownloadInvoice
          }
          onPrint={handlePrint}
        />
      </div>
    </motion.div>
  );
};

export default OrderDetails;