import React, { useState } from "react";

export default function AssignOrderModal({
  isOpen,
  onClose,
  deliveryBoys,
  onAssign,
}) {
  const [selectedBoy, setSelectedBoy] = useState("");

  if (!isOpen) return null;

  const handleAssign = () => {
    if (!selectedBoy) return;

    onAssign(Number(selectedBoy));

    setSelectedBoy("");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg">

        <h2 className="text-2xl font-bold text-black mb-5">
          Assign Order
        </h2>

        <div className="space-y-4">

          <div>
            <label className="block mb-2 font-medium">
              Select Delivery Boy
            </label>

            <select
              value={selectedBoy}
              onChange={(e) => setSelectedBoy(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="">Choose Delivery Boy</option>

              {deliveryBoys.map((boy) => (
                <option key={boy.id} value={boy.id}>
                  {boy.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-3">

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={handleAssign}
              className="px-5 py-2 rounded-lg bg-green-900 hover:bg-green-800 cursor-pointer text-white"
            >
              Assign
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}