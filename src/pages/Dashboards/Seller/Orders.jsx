import { useEffect, useMemo, useState } from "react";

import OrdersHeader from "../../../components/orders/OrdersHeader";
import OrderStats from "../../../components/orders/OrderStats";
import OrdersTabs from "../../../components/orders/OrderTabs";
import OrderFilters from "../../../components/orders/OrderFilters";
import OrdersTable from "../../../components/orders/OrdersTable";
import OrderPagination from "../../../components/orders/OrderPagination";
import { motion } from "framer-motion";
import OrderDrawer from "../../../components/orders/OrderDrawer";
import OrderBoard from "../../../components/orders/OrderBoard";
import BulkActions from "../../../components/orders/BulkActions";
import ExportModal from "../../../components/orders/ExportModal";

import { orders as initialOrders } from "../../../data/ordersData.js";

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);

  // ==========================
  // Tabs
  // ==========================

  const [activeTab, setActiveTab] = useState("new");

  // ==========================
  // Filters
  // ==========================

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [payment, setPayment] = useState("All");
  const [sort, setSort] = useState("Newest");

  // ==========================
  // Pagination
  // ==========================

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // ==========================
  // Drawer
  // ==========================

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // ==========================
  // Bulk Selection
  // ==========================

  const [selectedOrders, setSelectedOrders] = useState([]);

  // ==========================
  // View
  // ==========================

  const [boardView, setBoardView] = useState(false);

  // ==========================
  // Export
  // ==========================

  const [exportOpen, setExportOpen] = useState(false);

  // ==========================
  // Subscription
  // ==========================

  const isPlusUser = true;

  // =====================================
  // Filter Orders
  // =====================================

  const filteredOrders = useMemo(() => {
    let data = [...orders];

    // Tabs

    if (activeTab === "new") {
      data = data.filter((order) => order.status !== "Delivered");
    }

    if (activeTab === "completed") {
      data = data.filter((order) => order.status === "Delivered");
    }

    // Search

    if (search.trim()) {
      const value = search.toLowerCase();

      data = data.filter(
        (order) =>
          order.orderId.toLowerCase().includes(value) ||
          order.customer.toLowerCase().includes(value) ||
          order.phone.includes(value),
      );
    }

    // Status

    if (status !== "All") {
      data = data.filter((order) => order.status === status);
    }

    // Payment

    if (payment !== "All") {
      data = data.filter((order) => order.payment === payment);
    }

    // Sorting

    switch (sort) {
      case "Highest Amount":
        data.sort((a, b) => b.amount - a.amount);
        break;

      case "Lowest Amount":
        data.sort((a, b) => a.amount - b.amount);
        break;

      case "Oldest":
        data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;

      default:
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return data;
  }, [orders, activeTab, search, status, payment, sort]);

  // =====================================
  // Dashboard Stats
  // =====================================

  const stats = useMemo(() => {
    return {
      total: orders.length,

      pending: orders.filter((o) => o.status === "Pending").length,

      preparing: orders.filter((o) => o.status === "Preparing").length,

      delivered: orders.filter((o) => o.status === "Delivered").length,

      revenue: orders
        .filter((o) => o.status === "Delivered")
        .reduce((sum, order) => sum + order.amount, 0),
    };
  }, [orders]);

  // =====================================
  // Tab Counts
  // =====================================

  const newOrdersCount = useMemo(
    () => orders.filter((o) => o.status !== "Delivered").length,
    [orders],
  );

  const completedOrdersCount = useMemo(
    () => orders.filter((o) => o.status === "Delivered").length,
    [orders],
  );

  // =====================================
  // Pagination
  // =====================================

  const totalPages = Math.max(
    1,
    Math.ceil(filteredOrders.length / rowsPerPage),
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, search, status, payment, sort]);

  const paginatedOrders = useMemo(() => {
    return filteredOrders.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage,
    );
  }, [filteredOrders, currentPage, rowsPerPage]);

  // =====================================
  // Drawer
  // =====================================

  const openDrawer = (order) => {
    setSelectedOrder(order);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelectedOrder(null);
  };

  // =====================================
  // Bulk Selection
  // =====================================

  const toggleOrder = (id) => {
    setSelectedOrders((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleAll = () => {
    if (selectedOrders.length === paginatedOrders.length) {
      setSelectedOrders([]);
      return;
    }

    setSelectedOrders(paginatedOrders.map((order) => order.id));
  };

  // =====================================
  // Bulk Status Update
  // =====================================

  const bulkUpdate = (status) => {
    setOrders((prev) =>
      prev.map((order) =>
        selectedOrders.includes(order.id)
          ? {
              ...order,
              status,
            }
          : order,
      ),
    );

    setSelectedOrders([]);
  };

  // =====================================
  // Reset Filters
  // =====================================

  const handleReset = () => {
    setSearch("");
    setStatus("All");
    setPayment("All");
    setSort("Newest");
    setCurrentPage(1);
  };

  // =====================================
  // Single Status Update
  // =====================================

  const updateStatus = (id, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              status,
              trackingStep:
                status === "Pending"
                  ? 1
                  : status === "Preparing"
                    ? 2
                    : status === "Ready"
                      ? 2
                      : status === "Out for Delivery"
                        ? 3
                        : status === "Delivered"
                          ? 4
                          : order.trackingStep,
            }
          : order,
      ),
    );
  };

  // =====================================
  // Export
  // =====================================

  const exportOrders = (month) => {
    console.log("Export PDF:", month);
  };

  // =====================================
  // Auto Cancel
  // =====================================

  const autoCancelOrder = (order) => {
    updateStatus(order.id, "Cancelled");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6">
      <div className="space-y-8">
        <OrdersHeader
          totalOrders={orders.length}
          boardView={boardView}
          setBoardView={setBoardView}
          onRefresh={() => window.location.reload()}
          onExport={() => setExportOpen(true)}
        />

        <OrderStats stats={stats} />

        <OrdersTabs
          activeTab={activeTab}
          onChange={setActiveTab}
          newOrders={newOrdersCount}
          completedOrders={completedOrdersCount}
        />

        <OrderFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          payment={payment}
          setPayment={setPayment}
          sort={sort}
          setSort={setSort}
          onReset={handleReset}
        />

        <BulkActions
          selectedCount={selectedOrders.length}
          onClear={() => setSelectedOrders([])}
          onAccept={() => bulkUpdate("Preparing")}
          onPreparing={() => bulkUpdate("Preparing")}
          onReady={() => bulkUpdate("Ready")}
          onDelivery={() => bulkUpdate("Out for Delivery")}
          onDelivered={() => bulkUpdate("Delivered")}
          onCancel={() => bulkUpdate("Cancelled")}
        />

        {boardView && isPlusUser ? (
          <OrderBoard orders={filteredOrders} onSelect={openDrawer} />
        ) : (
          <>
            <OrdersTable
              orders={paginatedOrders}
              activeTab={activeTab}
              selectedOrders={selectedOrders}
              toggleOrder={toggleOrder}
              toggleAll={toggleAll}
              onView={openDrawer}
              onAccept={(o) => updateStatus(o.id, "Preparing")}
              onPreparing={(o) => updateStatus(o.id, "Preparing")}
              onReady={(o) => updateStatus(o.id, "Ready")}
              onDelivery={(o) => updateStatus(o.id, "Out for Delivery")}
              onDelivered={(o) => updateStatus(o.id, "Delivered")}
              onCancel={(o) => updateStatus(o.id, "Cancelled")}
            />

            <OrderPagination
              currentPage={currentPage}
              totalPages={totalPages}
              rowsPerPage={rowsPerPage}
              totalOrders={filteredOrders.length}
              onPageChange={setCurrentPage}
              onRowsChange={(rows) => {
                setRowsPerPage(rows);
                setCurrentPage(1);
              }}
            />
          </>
        )}

        <OrderDrawer
          open={drawerOpen}
          order={selectedOrder}
          onClose={closeDrawer}
          onExpire={autoCancelOrder}
        />

        <ExportModal
          open={exportOpen}
          onClose={() => setExportOpen(false)}
          onExport={exportOrders}
        />
      </div>
    </motion.div>
  );
}
