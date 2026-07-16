import {
  ShieldCheck,
  CreditCard,
} from "lucide-react";

const PaymentMethods = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
            <ShieldCheck
              size={20}
              className="text-green-600"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Safe & Secure Payments
            </h3>

            <p className="text-xs text-slate-500">
              100% secure payments and easy refunds
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
            <span className="text-sm font-extrabold tracking-wide text-blue-700">
              VISA
            </span>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
            <div className="flex items-center">
              <span className="h-4 w-4 rounded-full bg-red-500" />
              <span className="-ml-1 h-4 w-4 rounded-full bg-orange-400" />
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
            <span className="text-sm font-bold italic text-slate-700">
              UPI
            </span>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
            <span className="text-sm font-bold text-green-600">
              COD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;