import { Check } from "lucide-react";

const MobileTimeline = ({
  timeline = [],
  currentStep = 0,
}) => {
  if (!timeline.length) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
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

          return (
            <div
              key={step.id || index}
              className="flex flex-1 items-start"
            >
              {/* Step */}

              <div className="flex flex-col items-center">

                <div
                  className={`
                    flex
                    h-8
                    w-8
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
                        : "border-slate-300 bg-white"
                    }
                  `}
                >
                  {completed ? (
                    <Check
                      size={16}
                      strokeWidth={3}
                    />
                  ) : active ? (
                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
                  ) : (
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  )}
                </div>

                <span
                  className={`
                    mt-2
                    w-14
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

              {/* Progress Line */}

              {index < timeline.length - 1 && (
                <div className="mt-[15px] flex-1">

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