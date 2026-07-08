import React, { useState, useEffect } from "react";

export default function DeliveryBoyForm({
  isOpen,
  onClose,
  onSave,
  editData,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "Bike",
    vehicleNo: "",
    status: "Online",
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData({
        name: "",
        phone: "",
        vehicle: "Bike",
        vehicleNo: "",
        status: "Online",
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">

        <h2 className="text-2xl font-bold text-black mb-5">
          {editData ? "Edit Delivery Boy" : "Add Delivery Boy"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />

          <select
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option>Bike</option>
            <option>Scooty</option>
            <option>Bicycle</option>
          </select>

          <input
            type="text"
            name="vehicleNo"
            placeholder="Vehicle Number"
            value={formData.vehicleNo}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option>Online</option>
            <option>Offline</option>
          </select>

          <div className="flex justify-end gap-3 pt-3">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-green-900 hover:bg-green-800 text-white cursor-pointer"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}