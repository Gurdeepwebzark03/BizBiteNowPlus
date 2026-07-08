import {
  CalendarDays,
  Package,
  Boxes,
  IndianRupee,
  ShoppingBag,
  Pencil,
  CalendarClock,
  Copy,
  Trash2,
} from "lucide-react";

import FestiveStatusBadge from "./FestiveStatusBadge";

const FestiveMenuTable = ({
  menus,
  onSchedule,
  onDuplicate,
  onDelete,
  onEdit,
}) => {
  if (!menus.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center">
        <h3 className="text-xl font-semibold text-slate-700">
          No Festive Menu Found
        </h3>

        <p className="mt-2 text-slate-500">
          Create your first festive menu to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-bold text-slate-900">
          Festive Menus
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage all festive menus from one place.
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr className="text-left">

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Festival
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Status
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Products
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Revenue
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Orders
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Schedule
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {menus.map((menu) => (

              <tr
                key={menu.id}
                className="border-t border-slate-100 transition hover:bg-slate-50"
              >

                {/* Festival */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <img
                      src={menu.banner}
                      alt={menu.name}
                      className="h-16 w-16 rounded-xl object-cover"
                    />

                    <div>

                      <h3 className="font-semibold text-slate-900">
                        {menu.name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {menu.description}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Status */}

                <td className="px-6 py-5">
                  <FestiveStatusBadge
                    status={menu.status}
                  />
                </td>

                {/* Products */}

                <td className="px-6 py-5">

                  <div className="space-y-2">

                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Package size={16} />
                      {menu.totalProducts} Products
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Boxes size={16} />
                      {menu.totalCombos} Combos
                    </div>

                  </div>

                </td>

                {/* Revenue */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2 font-semibold text-[#1A4D2E]">

                    <IndianRupee size={16} />

                    {menu.revenue.toLocaleString()}

                  </div>

                </td>

                {/* Orders */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2 font-medium">

                    <ShoppingBag size={16} />

                    {menu.orders}

                  </div>

                </td>

                {/* Schedule */}

                <td className="px-6 py-5">

                  <div className="space-y-2 text-sm">

                    <div className="flex items-center gap-2">

                      <CalendarDays size={15} />

                      {menu.goLive
                        ? new Date(
                            menu.goLive
                          ).toLocaleDateString()
                        : "-"}

                    </div>

                    <div className="flex items-center gap-2">

                      <CalendarClock size={15} />

                      {menu.endsOn
                        ? new Date(
                            menu.endsOn
                          ).toLocaleDateString()
                        : "-"}

                    </div>

                  </div>

                </td>

                {/* Actions */}

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-2">

<button
  onClick={() => onEdit?.(menu)}
  className="rounded-lg p-2 transition hover:bg-blue-100"
>
                      <Pencil
                        size={18}
                        className="text-blue-600"
                      />
                    </button>

                    <button
                      onClick={() => onSchedule?.(menu)}
                      className="rounded-lg p-2 transition hover:bg-amber-100"
                    >
                      <CalendarClock
                        size={18}
                        className="text-amber-600"
                      />
                    </button>

                    <button
                      onClick={() => onDuplicate?.(menu)}
                      className="rounded-lg p-2 transition hover:bg-green-100"
                    >
                      <Copy
                        size={18}
                        className="text-green-600"
                      />
                    </button>

<button
  onClick={() => onDelete?.(menu)}
  className="rounded-lg p-2 transition hover:bg-red-100"
>
                      <Trash2
                        size={18}
                        className="text-red-600"
                      />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default FestiveMenuTable;