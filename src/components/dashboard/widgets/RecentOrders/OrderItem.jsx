import { ArrowRight } from "lucide-react";
import Badge from "../../../UI/Badge";
import { STATUS_VARIANTS } from "./constants";

const OrderItem = ({ order }) => {
  const initials = order.customer
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center justify-between rounded-2xl border border-transparent p-4 transition-all duration-200 hover:border-gray-200 hover:bg-gray-50">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A4D2E]/10 font-semibold text-[#1A4D2E]">
          {initials}
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">
            {order.customer}
          </h4>

          <p className="text-sm text-gray-500">
            {order.id} • {order.time}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="text-right">
          <p className="font-semibold">
            ₹{order.amount}
          </p>

          <Badge
            variant={STATUS_VARIANTS[order.status]}
          >
            {order.status}
          </Badge>
        </div>

        <button className="rounded-lg p-2 transition hover:bg-gray-200">
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default OrderItem;