export default function OrderCustomer({ order }) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16522d]/10 font-bold text-[#16522d]">
        {order.customer.charAt(0)}
      </div>

      <div>

        <h4 className="font-semibold text-slate-900">
          {order.customer}
        </h4>

        <p className="text-xs text-slate-500">
          {order.phone}
        </p>

      </div>

    </div>
  );
}