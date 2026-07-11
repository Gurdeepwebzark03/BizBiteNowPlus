import { useState } from "react";
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

import { getAvailablePartners } from "../../data/deliveryData";

export default function OrderActionModal({
  open,
  order,
  onClose,
  acceptOrder,
  markReady,
  assignDeliveryBoy,
  markDelivered,
  cancelOrder,
}) {
  const [assignMode, setAssignMode] =
    useState(false);

  const [selectedPartner, setSelectedPartner] =
    useState("");


  const partners = getAvailablePartners();

  if (!open || !order) return null;

  const actionClass =
    "flex w-full items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 font-medium transition hover:shadow-md";

  return (
    <div className="fixed inset-0 z-[9999] h-full flex text-black items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 hover:bg-slate-100"
        >
          <X size={20} />
        </button>

        <div className="border-b p-8">

          <h2 className="text-2xl font-bold text-slate-800">
            Order Actions
          </h2>

          <p className="mt-1 text-slate-500">
            {order.orderId}
          </p>

        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-2">

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Customer Details
            </h3>

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
                <MapPin
                  size={18}
                  className="mt-1"
                />
                <span>{order.address}</span>
              </div>

              <div className="border-t pt-4">

                <div className="flex justify-between">

                  <span>Total</span>

                  <span className="font-bold">
                    ₹{order.amount}
                  </span>

                </div>

              </div>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Quick Actions
            </h3>
                        {!assignMode && (
              <div className="space-y-3">

                {order.status === "Pending" && (
                  <>
                    <button
                      onClick={() => {
                        acceptOrder(order.id);
                        onClose();
                      }}
                      className={`${actionClass} hover:border-green-200 hover:bg-green-50`}
                    >
                      <CheckCircle2
                        size={20}
                        className="text-green-600"
                      />

                      <span>Accept Order</span>

                    </button>

                    <button
                      onClick={() => {
                        cancelOrder(order.id);
                        onClose();
                      }}
                      className={`${actionClass} hover:border-red-200 hover:bg-red-50`}
                    >
                      <XCircle
                        size={20}
                        className="text-red-600"
                      />

                      <span>Cancel Order</span>

                    </button>
                  </>
                )}

                {order.status === "Preparing" && (
                  <button
                    onClick={() => {
                      markReady(order.id);
                      onClose();
                    }}
                    className={`${actionClass} hover:border-orange-200 hover:bg-orange-50`}
                  >
                    <ChefHat
                      size={20}
                      className="text-orange-600"
                    />

                    <span>Mark Ready</span>

                  </button>
                )}

                {order.status === "Ready" && (
                  <button
                    onClick={() =>
                      setAssignMode(true)
                    }
                    className={`${actionClass} hover:border-sky-200 hover:bg-sky-50`}
                  >
                    <Bike
                      size={20}
                      className="text-sky-600"
                    />

                    <span>
                      Assign Delivery Partner
                    </span>

                  </button>
                )}

                {order.status ===
                  "Out for Delivery" && (
                  <button
                    onClick={() => {
                      markDelivered(order.id);
                      onClose();
                    }}
                    className={`${actionClass} hover:border-green-200 hover:bg-green-50`}
                  >
                    <PackageCheck
                      size={20}
                      className="text-green-600"
                    />

                    <span>Mark Delivered</span>

                  </button>
                )}

                {order.status ===
                  "Delivered" && (
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

                {order.status ===
                  "Cancelled" && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center">

                    <XCircle
                      size={32}
                      className="mx-auto mb-3 text-red-600"
                    />

                    <p className="font-semibold text-red-700">
                      This order has been cancelled.
                    </p>

                  </div>
                )}

              </div>
            )}
                        {assignMode && (
              <div>

                <button
                  onClick={() => {
                    setAssignMode(false);
                    setSelectedPartner("");
                  }}
                  className="mb-5 text-sm font-medium text-[#16522d] hover:underline"
                >
                  ← Back to Actions
                </button>

                <div className="rounded-2xl border border-slate-200 p-5">

                  <h4 className="mb-2 text-lg font-semibold">
                    Assign Delivery Partner
                  </h4>

                  <p className="mb-5 text-sm text-slate-500">
                    Select an available delivery partner to start delivery.
                  </p>

                  <select
                    value={selectedPartner}
                    onChange={(e) =>
                      setSelectedPartner(e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-[#16522d]"
                  >
                    <option value="">
                      Select Delivery Partner
                    </option>

                    {partners.map((partner) => (
                      <option
                        key={partner.id}
                        value={partner.id}
                      >
                        {partner.name} • {partner.phone}
                      </option>
                    ))}

                  </select>

                  <div className="mt-6 flex justify-end gap-3">

                    <button
                      onClick={() => {
                        setAssignMode(false);
                        setSelectedPartner("");
                      }}
                      className="rounded-xl border border-slate-300 px-5 py-2 font-medium hover:bg-slate-50"
                    >
                      Cancel
                    </button>

                    <button
                      disabled={!selectedPartner}
                      onClick={() => {

                        const partner =
                          partners.find(
                            (p) =>
                              p.id === selectedPartner
                          );

                        assignDeliveryBoy(
                          order.id,
                          partner
                        );

                        setSelectedPartner("");
                        setAssignMode(false);
                        onClose();

                      }}
                      className="rounded-xl bg-[#16522d] px-5 py-2 font-medium text-white transition hover:bg-[#124324] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Assign Partner
                    </button>

                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}