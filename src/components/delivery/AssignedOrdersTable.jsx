import React from "react";

export default function AssignedOrdersTable({
  assignedOrders,
  onComplete,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md mt-8 overflow-hidden">
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">
          Assigned Orders
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Customer</th>
              <th className="px-6 py-3 text-left">Food Item</th>
              <th className="px-6 py-3 text-left">Address</th>
              <th className="px-6 py-3 text-center">Delivery Boy</th>
              <th className="px-6 py-3 text-center">Status</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {assignedOrders.length > 0 ? (
              assignedOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    #{order.orderId}
                  </td>

                  <td className="px-6 py-4">
                    {order.customer}
                  </td>

                  <td className="px-6 py-4">
                    {order.items}
                  </td>

                  <td className="px-6 py-4">
                    {order.address}
                  </td>

                  <td className="px-6 py-4 text-center font-semibold">
                    {order.deliveryBoy}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {order.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => onComplete(order.id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      Complete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-10 text-gray-500"
                >
                  No Assigned Orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}