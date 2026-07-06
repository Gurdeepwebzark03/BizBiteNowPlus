import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Save,
  X,
} from "lucide-react";

import BasicInfoStep from "../../../components/dashboard/festive/builder/BasicInfoStep";
import ProductsStep from "../../../components/dashboard/festive/builder/ProductsStep";
import ScheduleStep from "../../../components/dashboard/festive/builder/ScheduleStep";
import ReviewStep from "../../../components/dashboard/festive/builder/ReviewStep";

const STEPS = [
  {
    id: 1,
    title: "Basic Info",
    subtitle: "Festival Details",
  },
  {
    id: 2,
    title: "Products",
    subtitle: "Choose Products",
  },
  {
    id: 3,
    title: "Schedule",
    subtitle: "Publish Timing",
  },
  {
    id: 4,
    title: "Review",
    subtitle: "Publish",
  },
];

export default function CreateFestiveMenu() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  const [basicInfo, setBasicInfo] = useState({});

  const [products, setProducts] = useState([]);

  const [schedule, setSchedule] = useState({});

  const [appearance] = useState({});

const [availableProducts] = useState([
  {
    id: 1,
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: 320,
  },
  {
    id: 2,
    name: "Veg Biryani",
    category: "Rice",
    price: 260,
  },
  {
    id: 3,
    name: "Gulab Jamun",
    category: "Dessert",
    price: 140,
  },
  {
    id: 4,
    name: "Chocolate Cake",
    category: "Dessert",
    price: 480,
  },
  {
    id: 5,
    name: "Cold Coffee",
    category: "Beverage",
    price: 180,
  },
]);
  const progress =
    (currentStep / STEPS.length) * 100;

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return (
          basicInfo?.name &&
          basicInfo?.festival
        );

      case 2:
        return (
          Array.isArray(products) &&
          products.length > 0
        );

      case 3:
        return (
          schedule?.startDate &&
          schedule?.startTime &&
          schedule?.endDate &&
          schedule?.endTime
        );

      default:
        return true;
    }
  };

  const nextStep = () => {
    if (!validateStep()) {
      alert("Please complete this step.");
      return;
    }

    if (currentStep < STEPS.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const saveDraft = () => {
    console.log({
      basicInfo,
      products,
      schedule,
    });

    alert("Draft Saved");
  };

  const publishMenu = () => {
    console.log({
      basicInfo,
      products,
      schedule,
    });

    alert("Festive Menu Published");

    navigate("/seller/festivemenu");
  };

  return (
    <div className="mx-auto max-w-7xl  space-y-8 p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-black font-inter">
            Create Festive <span className="text-green-700">Menu</span>
          </h1>

          <p className="mt-2 text-slate-500">
            Create a seasonal menu in four simple steps.
          </p>

        </div>

        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X size={18} />
          Cancel
        </button>

      </div>

      {/* Progress */}

      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">

        <div
          className="h-2 rounded-full bg-green-700 transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      {/* Stepper */}

      <div className="grid grid-cols-4 gap-5">

        {STEPS.map((step) => {

          const active =
            currentStep === step.id;

          const completed =
            currentStep > step.id;

          return (

            <div
              key={step.id}
              className={`rounded-xl border p-5 transition ${
                active
                  ? "border-orange-500 bg-orange-50 dark:bg-orange-500/10"
                  : completed
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10"
                  : ""
              }`}
            >

              <div className="flex items-center gap-3">

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                    completed
                      ? "bg-emerald-500 text-white"
                      : active
                      ? "bg-orange-500 text-white"
                      : "bg-orange-200 text-black"
                  }`}
                >
                  {completed ? (
                    <Check size={18} />
                  ) : (
                    step.id
                  )}
                </div>

                <div>

                  <h3 className="font-inter text-black">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-900">
                    {step.subtitle}
                  </p>

                </div>

              </div>

            </div>

          );

        })}

      </div>
            {/* Step Content */}

      <div className="rounded-2xl bg-white p-6 shadow-sm ">

        {currentStep === 1 && (
          <BasicInfoStep
            data={basicInfo}
            onChange={setBasicInfo}
          />
        )}

        {currentStep === 2 && (
        <ProductsStep
          data={products}
          products={availableProducts}
          onChange={setProducts}
        />
        )}

        {currentStep === 3 && (
          <ScheduleStep
            data={schedule}
            onChange={setSchedule}
          />
        )}

        {currentStep === 4 && (
          <ReviewStep
            basicInfo={basicInfo}
            products={products}
            appearance={appearance}
            schedule={schedule}
          />
        )}

      </div>

      {/* Footer */}

      <div className="rounded-2xl  bg-white px-6 py-5 shadow-sm ">

        <div className="flex items-center justify-between">

          {/* Previous */}

          <button
            onClick={previousStep}
            disabled={currentStep === 1}
            className={`inline-flex items-center gap-2 text-black rounded-xl px-5 py-2.5 font-medium transition ${
              currentStep === 1
                ? "cursor-not-allowed border opacity-40"
                : "border hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <ChevronLeft size={18} />

            Previous

          </button>

          {/* Right Buttons */}

          <div className="flex items-center gap-3">

            <button
              onClick={saveDraft}
              className="inline-flex items-center gap-2 rounded-xl bg-green-200  border-green-700 px-5 py-2.5 font-medium text-black transition-all duration-300 hover:bg-green-700 hover:text-white hover:border-green-700 hover:shadow-md"
            >
              <Save size={18} />

              Save Draft

            </button>

            {currentStep !== STEPS.length ? (

              <button
                onClick={nextStep}
                className="inline-flex items-center gap-2 text-black rounded-xl bg-yellow-200 px-6 py-2.5 font-medium hover:text-white transition hover:bg-[#ffc700]"
              >
                Next

                <ChevronRight size={18} />

              </button>

            ) : (

              <button
                onClick={publishMenu}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 font-medium text-white transition hover:bg-emerald-700"
              >
                <Check size={18} />

                Publish Menu

              </button>

            )}

          </div>

        </div>

      </div>
          </div>
  );
}