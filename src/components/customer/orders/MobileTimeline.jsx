import {
  Check,
  Circle,
  PackageCheck,
  ChefHat,
  Bike,
  Home,
} from "lucide-react";

const getIcon = (title) => {
  switch (title.toLowerCase()) {
    case "order placed":
      return PackageCheck;

    case "preparing food":
      return ChefHat;

    case "out for delivery":
      return Bike;

    case "delivered":
      return Home;

    default:
      return Circle;
  }
};

const MobileTimeline = ({
  timeline = [],
  currentStep = 0,
}) => {
  if (!timeline.length) return null;

  return (
    <div className="rounded-2xl  bg-white p-4 ">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">
          Order Progress
        </h3>

        <span className="text-xs text-slate-500">
          Step {currentStep + 1} of {timeline.length}
        </span>
      </div>

      <div className="flex items-start">
        {timeline.map((step, index) => {
          const completed = index < currentStep;
          const active = index === currentStep;

          const Icon = getIcon(step.title);

          return (
            <div
              key={step.id || index}
              className="flex flex-1 items-start"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    transition-all
                    duration-300

                    ${
                      completed
                        ? "border-green-600 bg-green-600 text-white"
                        : active
                        ? "animate-pulse border-[var(--primary)] bg-[var(--primary)] text-white"
                        : "border-slate-300 bg-white text-slate-400"
                    }
                  `}
                >
                  {completed ? (
                    <Check
                      size={18}
                      strokeWidth={3}
                    />
                  ) : (
                    <Icon
                      size={18}
                      strokeWidth={2.3}
                    />
                  )}
                </div>

                <span
                  className={`
                    mt-2
                    w-16
                    text-center
                    text-[10px]
                    leading-3

                    ${
                      completed
                        ? "font-semibold text-green-700"
                        : active
                        ? "font-semibold text-[var(--primary)]"
                        : "text-slate-500"
                    }
                  `}
                >
                  {step.title}
                </span>
              </div>

              {index < timeline.length - 1 && (
                <div className="mt-[19px] flex-1">
                  <div className="h-[3px] rounded-full bg-slate-200">
                    <div
                      className={`
                        h-full
                        rounded-full
                        transition-all
                        duration-500

                        ${
                          completed
                            ? "w-full bg-green-600"
                            : "w-0 bg-green-600"
                        }
                      `}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTimeline;