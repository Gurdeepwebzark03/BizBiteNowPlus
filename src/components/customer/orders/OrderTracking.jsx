import OrderTimeline from "./OrderTimeline";

const OrderTracking = ({
  tracking = [],
  status = "",
  currentStep = "placed",
}) => {

  return (
    <section
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      {/* Header */}
      <div className="border-b border-slate-100 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Order Tracking
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Track your order in real-time.
            </p>
          </div>

          <span
            className="
              rounded-full
              bg-green-100
              px-4
              py-2
              text-sm
              font-semibold
              text-green-700
            "
          >
            {status || "Preparing"}
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-8 py-10">
        <OrderTimeline
          timeline={tracking?.steps || []}
          currentStep={tracking?.currentStep}
        />
      </div>
    </section>
  );
};

export default OrderTracking;