import {
  X,
  Phone,
  MapPin,
  Package,
  CreditCard,
  User,
  Bike,
} from "lucide-react";
import TrackingTimeline from "./TrackingTimeline";
export default function OrderDrawer({
  open,
  order,
  onClose,
}) {
  if (!open || !order) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40"
      />

      <aside className="fixed right-0 top-0 z-50 h-screen w-full max-w-lg overflow-y-auto bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h2 className="text-xl font-bold">
              {order.orderId}
            </h2>

            <p className="text-sm text-slate-500">
              {order.createdAt}
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>

        </div>

        <div className="space-y-6 p-6">

          <section className="rounded-xl border p-5">

            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <User size={18} />
              Customer
            </h3>

            <p className="font-medium">
              {order.customer}
            </p>

            <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
              <Phone size={16} />
              {order.phone}
            </div>

            <div className="mt-2 flex items-start gap-2 text-sm text-slate-600">
              <MapPin size={16} />
              {order.address}
            </div>

          </section>

          <section className="rounded-xl border p-5">

            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <Package size={18} />
              Ordered Items
            </h3>

            <div className="space-y-3">

              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <div>

                    <p className="font-medium">
                      {item.name}
                    </p>

                    <p className="text-sm text-slate-500">
                      Qty : {item.qty}
                    </p>

                  </div>

                  <span className="font-semibold">
                    ₹{item.price}
                  </span>

                </div>
              ))}

            </div>

          </section>

          <section className="rounded-xl border p-5">

            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <CreditCard size={18} />
              Payment
            </h3>

            <div className="flex justify-between py-2">

              <span>Method</span>

              <span>{order.payment}</span>

            </div>

            <div className="flex justify-between py-2">

              <span>Status</span>

              <span>{order.paymentStatus}</span>

            </div>

            <div className="mt-4 border-t pt-4">

              <div className="flex justify-between text-lg font-bold">

                <span>Total</span>

                <span>₹{order.amount}</span>

              </div>

            </div>

          </section>
          <TrackingTimeline
  currentStep={order.trackingStep}
/>

          <section className="rounded-xl border p-5">

            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <Bike size={18} />
              Delivery
            </h3>

            <div className="space-y-2 text-sm">

              <div className="flex justify-between">

                <span>Status</span>

                <span>{order.status}</span>

              </div>

              <div className="flex justify-between">

                <span>Delivery Boy</span>

                <span>
                  {order.deliveryBoy || "Not Assigned"}
                </span>

              </div>

            </div>

          </section>

          {order.notes && (
            <section className="rounded-xl border p-5">

              <h3 className="mb-3 font-semibold">
                Customer Notes
              </h3>

              <p className="text-sm text-slate-600">
                {order.notes}
              </p>

            </section>
          )}

        </div>

      </aside>
    </>
  );
}