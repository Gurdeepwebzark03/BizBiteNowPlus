import React, { useState, useEffect } from "react";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.orderId ||
      !formData.customer ||
      !formData.address ||
      !formData.items
    ) {
      alert("Please fill all fields");
      return;
    }

    onAssign(formData);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-full max-w-md rounded-xl p-6">

        <h2 className="text-2xl font-bold text-amber-700 mb-5">
          Assign Order
        </h2>

        <p className="mb-4 text-gray-600">
          Delivery Boy :
          <span className="font-semibold ml-2">
            {deliveryBoy?.name}
          </span>
        </p>

        <div className="space-y-4">

          <input
            type="text"
            name="orderId"
            placeholder="Order ID"
            value={formData.orderId}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="text"
            name="customer"
            placeholder="Customer Name"
            value={formData.customer}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="text"
            name="items"
            placeholder="Food Item"
            value={formData.items}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600"
          >
            Assign Order
          </button>

        </div>

      </div>

    </div>
  );
}