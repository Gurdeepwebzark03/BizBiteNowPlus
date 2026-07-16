import {
  ArrowLeft,
  ReceiptText,
  UserCircle2,
} from "lucide-react";

const OrderHeader = ({
  order,
  onBack,
}) => {
  return (
    <header
      className="
        flex
        items-center
        justify-between

        rounded-2xl
        w-full




        px-6
        py-5


      "
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-xl

            border
            border-slate-200

            transition

            hover:bg-slate-100
          "
        >
          <ArrowLeft size={20} />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Order Details
          </h1>

          <div className="mt-1 flex items-center gap-2">
            <ReceiptText
              size={15}
              className="text-green-600"
            />

            <span className="text-sm text-slate-500">
              Order ID:
            </span>

            <span className="font-semibold text-slate-800">
              #{order?.id || "BBN12345678"}
            </span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Ordered On
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            {order?.createdAt ||
              "16 Jul 2026, 11:42 AM"}
          </p>
        </div>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full

            bg-green-600

            text-white
          "
        >
          <UserCircle2 size={24} />
        </div>
      </div>
    </header>
  );
};

export default OrderHeader;