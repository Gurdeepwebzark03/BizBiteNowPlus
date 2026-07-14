import React, { useEffect, useState } from "react";
import {
  X,
  Bike,
  User,
  MapPin,
  Package,
  ClipboardList,
} from "lucide-react";

export default function AssignOrderModal({
  isOpen,
  onClose,
  onAssign,
  deliveryBoy,
}) {
  const [formData, setFormData] = useState({
    orderId: "",
    customer: "",
    address: "",
    items: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        orderId: "",
        customer: "",
        address: "",
        items: "",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const { orderId, customer, address, items } =
      formData;

    if (
      !orderId ||
      !customer ||
      !address ||
      !items
    ) {
      alert("Please fill all fields");
      return;
    }

    onAssign(formData);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 transition hover:bg-slate-100"
        >
          <X size={20} />
        </button>

        {/* Header */}

        <div className="border-b p-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Assign Order
          </h2>

          <p className="mt-1 text-slate-500">
            Assign this order to a delivery
            partner.
          </p>
        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-2">
          {/* Delivery Boy */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Delivery Partner
            </h3>

            <div className="space-y-4 rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-3">
                <Bike
                  size={18}
                  className="text-[#16522d]"
                />

                <span className="font-medium">
                  {deliveryBoy?.name}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <User size={18} />

                <span>
                  {deliveryBoy?.phone ||
                    "Not Available"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Package size={18} />

                <span>
                  {deliveryBoy?.vehicle ||
                    "Vehicle"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ClipboardList size={18} />

                <span>
                  Assigned Orders :
                  <strong className="ml-2">
                    {deliveryBoy?.assignedOrders ||
                      0}
                  </strong>
                </span>
              </div>
            </div>
          </div>

          {/* Order Form */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Order Details
            </h3>

            <div className="space-y-4 rounded-2xl border border-slate-200 p-5">
              <input
                type="text"
                name="orderId"
                placeholder="Order ID"
                value={formData.orderId}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#16522d]"
              />

              <input
                type="text"
                name="customer"
                placeholder="Customer Name"
                value={formData.customer}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#16522d]"
              />

              <input
                type="text"
                name="items"
                placeholder="Food Items"
                value={formData.items}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#16522d]"
              />

              <textarea
                rows={4}
                name="address"
                placeholder="Delivery Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#16522d]"
              />

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="rounded-xl border border-slate-300 px-5 py-2 font-medium transition hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  className="rounded-xl bg-[#16522d] px-5 py-2 font-medium text-white transition hover:bg-[#124324]"
                >
                  Assign Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}