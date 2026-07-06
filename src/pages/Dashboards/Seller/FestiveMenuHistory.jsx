import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CalendarHeart,
  IndianRupee,
  ShoppingBag,
  Layers3,
  Search,
  Eye,
  Copy,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useFestiveMenu } from "../../../context/FestiveMenuContext";

export default function FestiveMenuHistory() {
  const navigate = useNavigate();

  const {
    menus,
    duplicateMenu,
    deleteMenu,
  } = useFestiveMenu();

  const [search, setSearch] = useState("");

  const historyMenus = useMemo(() => {
    return menus.filter(
      (menu) =>
        menu.status === "expired"
    );
  }, [menus]);

  const filteredMenus = useMemo(() => {
    return historyMenus.filter((menu) => {
      const query = search.toLowerCase();

      return (
        menu.name
          .toLowerCase()
          .includes(query) ||
        menu.festival
          .toLowerCase()
          .includes(query)
      );
    });
  }, [historyMenus, search]);

  const totalRevenue = filteredMenus.reduce(
    (sum, menu) => sum + menu.revenue,
    0
  );

  const totalOrders = filteredMenus.reduce(
    (sum, menu) => sum + menu.orders,
    0
  );

  const averageRevenue =
    filteredMenus.length > 0
      ? Math.round(
          totalRevenue /
            filteredMenus.length
        )
      : 0;

  return (
        <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
    <div className="space-y-6 p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <button
            onClick={() =>
              navigate("/seller/festivemenu")
            }
            className="mb-4 flex items-center bg-orange-100 gap-2 text-black rounded-xl  p-3 transition-colors duration-300 ease-in-out hover:text-orange-600"
          >
            <ArrowLeft size={18} />

            Back
          </button>

          <div className="flex items-center gap-3">

            <div className="rounded-2xl bg-orange-100 p-3">

              <CalendarHeart className="text-orange-600" />

            </div>

            <div>

              <h1 className="text-3xl text-black font-bold">

                Festive Menu History

              </h1>

              <p className="mt-1 text-black text-slate-500">

                View all previous festive menus,
                revenue and orders.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid gap-5 text-black md:grid-cols-2 xl:grid-cols-4">

        <HistoryCard
          title="Historic Menus"
          value={filteredMenus.length}
          icon={<Layers3 />}
        />

        <HistoryCard
          title="Revenue"
          value={`₹${totalRevenue.toLocaleString()}`}
          icon={<IndianRupee />}
        />

        <HistoryCard
          title="Orders"
          value={totalOrders}
          icon={<ShoppingBag />}
        />

        <HistoryCard
          title="Average Revenue"
          value={`₹${averageRevenue.toLocaleString()}`}
          icon={<IndianRupee />}
        />

      </div>

      {/* Search */}

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search history..."
          className="w-full rounded-2xl border py-3 pl-11 pr-4 outline-none focus:border-green-700"
        />

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-3xl text-black bg-white shadow">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Festival
              </th>

              <th className="text-left">
                Duration
              </th>

              <th className="text-left">
                Revenue
              </th>

              <th className="text-left">
                Orders
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-right pr-6">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>
                        {filteredMenus.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="py-16 text-center text-slate-500"
                >

                  No festive menu history found.

                </td>

              </tr>

            ) : (

              filteredMenus.map((menu) => (

                <tr
                  key={menu.id}
                  className="border-t transition hover:bg-slate-50"
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

                        <p className="text-sm text-slate-500">
                          {menu.festival}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Duration */}

                  <td>

                    <div className="text-sm">

                      <p>{menu.goLive || "-"}</p>

                      <p className="text-slate-400">
                        to
                      </p>

                      <p>{menu.endsOn || "-"}</p>

                    </div>

                  </td>

                  {/* Revenue */}

                  <td className="font-semibold text-emerald-700">

                    ₹{menu.revenue.toLocaleString()}

                  </td>

                  {/* Orders */}

                  <td>

                    {menu.orders}

                  </td>

                  {/* Status */}

                  <td>

                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase text-red-700">

                      {menu.status}

                    </span>

                  </td>

                  {/* Actions */}

                  <td className="pr-6">

                    <div className="flex justify-end gap-2">

                      {/* View */}

                      <button
                        onClick={() =>
                          navigate(
                            `/seller/festivemenu/${menu.id}`
                          )
                        }
                        className="rounded-xl border p-3 transition hover:bg-slate-100"
                      >

                        <Eye size={18} />

                      </button>

                      {/* Duplicate */}

                      <button
                        onClick={() => {
                          duplicateMenu(menu.id);
                        }}
                        className="rounded-xl border p-3 transition hover:bg-slate-100"
                      >

                        <Copy size={18} />

                      </button>

                      {/* Delete */}

                      <button
                        onClick={() => {

                          if (
                            window.confirm(
                              "Delete this festive menu?"
                            )
                          ) {

                            deleteMenu(menu.id);

                          }

                        }}
                        className="rounded-xl border border-red-200 p-3 text-red-600 transition hover:bg-red-50"
                      >

                        <Trash2 size={18} />

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
    </motion.div>

  );

}

/* ------------------------------------------ */

function HistoryCard({
  title,
  value,
  icon,
}) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >

    <div className="rounded-3xl bg-white p-6 shadow">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-500">

            {title}

          </p>

          <h3 className="mt-2 text-3xl font-bold">

            {value}

          </h3>

        </div>

        <div className="rounded-2xl bg-green-100 p-4 text-green-700">

          {icon}

        </div>

      </div>

    </div>
    </motion.div>

  );

}