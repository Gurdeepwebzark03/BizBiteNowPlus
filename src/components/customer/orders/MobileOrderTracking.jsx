import { MapPinned } from "lucide-react";
import MobileTimeline from "./MobileTimeline";

const MobileOrderTracking = ({
  tracking = {},
  status = "",
}) => {
  return (
    <section
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      {/* Header */}
      <div className="border-b border-slate-100 px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-green-50
                text-green-600
              "
            >
              <MapPinned size={20} />
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900">
                Order Tracking
              </h2>

              <p className="text-xs text-slate-500">
                Live order progress
              </p>
            </div>
          </div>

          <span
            className="
              rounded-full
              bg-green-100
              px-3
              py-1
              text-[11px]
              font-semibold
              text-green-700
            "
          >
            {status || "Preparing"}
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4 py-5">
        <MobileTimeline
          timeline={tracking?.steps || []}
          currentStep={tracking?.currentStep}
        />
      </div>
    </section>
  );
};

export default MobileOrderTracking;