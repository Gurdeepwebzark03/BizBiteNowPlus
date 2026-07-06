import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

export default function DeliveryBoyTable({
  deliveryBoys,
  onEdit,
  onDelete,
  onToggleStatus,
  onAssign,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-amber-100">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Name</th>
              <th className="px-6 py-4 text-left font-semibold">Phone</th>
              <th className="px-6 py-4 text-left font-semibold">Vehicle</th>
              <th className="px-6 py-4 text-left font-semibold">Vehicle No.</th>
              <th className="px-6 py-4 text-center font-semibold">Status</th>
              <th className="px-6 py-4 text-center font-semibold">
                Assigned Orders
              </th>
              <th className="px-6 py-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {deliveryBoys.length > 0 ? (
              deliveryBoys.map((boy) => (
                <tr
                  key={boy.id}
                  className="border-b hover:bg-amber-50 transition"
                >
                  <td className="px-6 py-4 font-semibold">{boy.name}</td>

                  <td className="px-6 py-4">{boy.phone}</td>

                  <td className="px-6 py-4">{boy.vehicle}</td>

                  <td className="px-6 py-4">{boy.vehicleNo}</td>
                  <td className="px-6 py-4 text-center">

  <div className="flex flex-col items-center gap-2">

    <button
      onClick={() => onToggleStatus(boy.id)}
      className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
        boy.status === "Online"
          ? "bg-green-500"
          : "bg-gray-400"
      }`}
    >

      <span
        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
          boy.status === "Online"
            ? "translate-x-7"
            : "translate-x-0"
        }`}
      />

    </button>

    <span
      className={`text-sm font-semibold ${
        boy.status === "Online"
          ? "text-green-600"
          : "text-red-600"
      }`}
    >
      {boy.status}
    </span>

  </div>

</td>

                  <td className="px-6 py-4 text-center font-bold">
                    {boy.assignedOrders}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">

  {/* View Dashboard */}

  <button
    className="text-blue-600 hover:text-blue-800"
    title="View Dashboard"
  >
    <FaEye size={18} />
  </button>

  {/* Assign Order */}

  <button
    onClick={() => onAssign(boy)}
    className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-lg"
    title="Assign Order"
  >
    Assign
  </button>

  {/* Edit */}

  <button
    onClick={() => onEdit(boy)}
    className="text-amber-600 hover:text-amber-800"
    title="Edit"
  >
    <FaEdit size={18} />
  </button>

  {/* Delete */}

  <button
    onClick={() => onDelete(boy)}
    className="text-red-600 hover:text-red-800"
    title="Delete"
  >
    <FaTrash size={18} />
  </button>

</div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-10 text-gray-500"
                >
                  No Delivery Partner Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}