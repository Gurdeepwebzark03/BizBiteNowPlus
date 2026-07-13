import {
  X,
  User,
  Phone,
  MapPin,
  CheckCircle2,
  ChefHat,
  Bike,
  PackageCheck,
  XCircle,
} from "lucide-react";

export default function OrderActionModal({
  open,
  order,
  onClose,
  acceptOrder,
  markReady,
  onAssign,
  markDelivered,
  cancelOrder,
}) {
  if (!open || !order) return null;

  const actionClass =
    "flex w-full items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 font-medium transition hover:shadow-md";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 hover:bg-slate-100"
        >
          <X size={20} />
        </button>

        <div className="border-b p-8">
          <h2 className="text-2xl font-bold text-slate-800">Order Actions</h2>

          <p className="mt-1 text-slate-500">{order.orderId}</p>
        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 text-lg font-semibold">Customer Details</h3>

            <div className="space-y-4 rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-3">
                <User size={18} />
                <span>{order.customer}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>{order.phone}</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <span>{order.address}</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span>Total</span>

                  <span className="font-bold">₹{order.amount}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Actions</h3>

            <div className="space-y-3">
              {order.status === "Pending" && (
                <>
                  <button
                    onClick={() => acceptOrder(order.id)}
                    className={`${actionClass} hover:border-green-200 hover:bg-green-50`}
                  >
                    <CheckCircle2 size={20} className="text-green-600" />
                    <span>Accept Order</span>
                  </button>

                  <button
                    onClick={() => cancelOrder(order.id)}
                    className={`${actionClass} hover:border-red-200 hover:bg-red-50`}
                  >
                    <XCircle size={20} className="text-red-600" />
                    <span>Cancel Order</span>
                  </button>
                </>
              )}

              {order.status === "Preparing" && (
                <button
                  onClick={() => markReady(order.id)}
                  className={`${actionClass} hover:border-orange-200 hover:bg-orange-50`}
                >
                  <ChefHat size={20} className="text-orange-600" />
                  <span>Mark Ready</span>
                </button>
              )}

              {order.status === "Ready" && (
                <button
                  onClick={() => {
                    onAssign(order);
                    onClose();
                  }}
                  className={`${actionClass} hover:border-sky-200 hover:bg-sky-50`}
                >
                  <Bike size={20} className="text-sky-600" />
                  <span>Assign Delivery Partner</span>
                </button>
              )}

              {order.status === "Out for Delivery" && (
                <button
                  onClick={() => markDelivered(order.id)}
                  className={`${actionClass} hover:border-green-200 hover:bg-green-50`}
                >
                  <PackageCheck size={20} className="text-green-600" />
                  <span>Mark Delivered</span>
                </button>
              )}

              {order.status === "Delivered" && (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-center">
                  <CheckCircle2
                    size={32}
                    className="mx-auto mb-3 text-green-600"
                  />

                  <p className="font-semibold text-green-700">
                    This order has been completed.
                  </p>
                </div>
              )}

              {order.status === "Cancelled" && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center">
                  <XCircle size={32} className="mx-auto mb-3 text-red-600" />

                  <p className="font-semibold text-red-700">
                    This order has been cancelled.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
