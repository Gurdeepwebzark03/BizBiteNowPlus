import { useMemo, useState } from "react";
import {
  Search,
  Package,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import OrderCard from "./OrderCard";
import EmptyState from "../common/EmptyState";

const tabs = [
  {
    id: "ongoing",
    label: "Ongoing",
    icon: Package,
  },
  {
    id: "completed",
    label: "Completed",
    icon: CheckCircle2,
  },
  {
    id: "cancelled",
    label: "Cancelled",
    icon: XCircle,
  },
];

const OrderHistory = ({
  orders = [],
  onViewOrder,
  onReorder,
  onRate,
}) => {
  const [activeTab, setActiveTab] =
    useState("ongoing");

  const [search, setSearch] =
    useState("");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const tabMatch =
        activeTab === "ongoing"
          ? [
              "Pending",
              "Confirmed",
              "Preparing",
              "Out for Delivery",
            ].includes(order.status)
          : activeTab === "completed"
          ? order.status === "Delivered"
          : order.status === "Cancelled";

      const searchMatch =
        order.id
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        order.items.some((item) =>
          item.name
            .toLowerCase()
            .includes(search.toLowerCase())
        );

      return tabMatch && searchMatch;
    });
  }, [orders, activeTab, search]);

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          My Orders
        </h1>

        <p className="mt-2 text-slate-500">
          Track, reorder and review your orders.
        </p>

      </div>

      {/* Search */}

      <div className="relative">

        <Search
          size={18}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search by order ID or food..."
          className="
            w-full

            rounded-2xl

            border
            border-slate-200

            bg-white

            py-4
            pl-12
            pr-4

            outline-none

            transition

            focus:border-[var(--primary)]
          "
        />

      </div>

      {/* Tabs */}

      <div className="flex gap-3 overflow-x-auto scrollbar-hide">

        {tabs.map((tab) => {
          const Icon = tab.icon;

          const active =
            activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id)
              }
              className={`
                flex
                shrink-0
                items-center
                gap-2

                rounded-full

                px-5
                py-3

                font-medium

                transition-all

                ${
                  active
                    ? "text-white"
                    : "bg-white border border-slate-200 text-slate-700"
                }
              `}
              style={{
                background: active
                  ? "var(--primary)"
                  : undefined,
              }}
            >
              <Icon size={18} />

              {tab.label}
            </button>
          );
        })}

      </div>

      {/* Orders */}

      {filteredOrders.length === 0 ? (
        <EmptyState
          title="No Orders Found"
          description="Orders matching your filters will appear here."
        />
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onView={onViewOrder}
              onReorder={onReorder}
              onRate={onRate}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default OrderHistory;