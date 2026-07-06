import React, { useState } from "react";
import deliveryBoyData from "../../../data/deliveryBoyData";
import DeliveryBoyTable from "../../../components/delivery/DeliveryBoyTable";
import DeliveryBoyForm from "../../../components/delivery/DeliveryBoyForm";
import DeleteDeliveryModal from "../../../components/delivery/DeleteDeliveryModal";
import AssignOrderModal from "../../../components/delivery/AssignOrderModal";

export default function DeliveryManagement() {
  const [deliveryBoys, setDeliveryBoys] = useState(deliveryBoyData);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Edit
  const [editData, setEditData] = useState(null);

  // Delete
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedBoy, setSelectedBoy] = useState(null);

  const [assignModal, setAssignModal] = useState(false);
const [selectedOrder, setSelectedOrder] = useState(null);

  // Search + Filter
  const filteredDeliveryBoys = deliveryBoys.filter((boy) => {
    const matchSearch =
      boy.name.toLowerCase().includes(search.toLowerCase()) ||
      boy.phone.includes(search);

    const matchFilter =
      filter === "All" ? true : boy.status === filter;

    return matchSearch && matchFilter;
  });

  // Add & Update
  const handleSave = (data) => {
    if (editData) {
      const updated = deliveryBoys.map((boy) =>
        boy.id === editData.id
          ? {
              ...boy,
              ...data,
            }
          : boy
      );

      setDeliveryBoys(updated);
    } else {
      const newBoy = {
        ...data,
        id: Date.now(),
        assignedOrders: 0,
      };

      setDeliveryBoys([...deliveryBoys, newBoy]);
    }

    setEditData(null);
    setIsModalOpen(false);
  };

  // Edit
  const handleEdit = (boy) => {
    setEditData(boy);
    setIsModalOpen(true);
  };
  // Toggle Online / Offline
const handleToggleStatus = (id) => {
  const updated = deliveryBoys.map((boy) =>
    boy.id === id
      ? {
          ...boy,
          status: boy.status === "Online" ? "Offline" : "Online",
        }
      : boy
  );

  setDeliveryBoys(updated);
};

// Open Assign Order Modal
const handleAssignClick = (boy) => {
  setSelectedOrder(boy);
  setAssignModal(true);
};

// Assign Order
const handleAssignOrder = (id) => {
  const updated = deliveryBoys.map((boy) =>
    boy.id === id
      ? {
          ...boy,
          assignedOrders: boy.assignedOrders + 1,
        }
      : boy
  );

  setDeliveryBoys(updated);
};

  // Delete Click
  const handleDeleteClick = (boy) => {
    setSelectedBoy(boy);
    setDeleteModal(true);
  };

  // Confirm Delete
  const confirmDelete = () => {
    const updated = deliveryBoys.filter(
      (boy) => boy.id !== selectedBoy.id
    );

    setDeliveryBoys(updated);

    setDeleteModal(false);
    setSelectedBoy(null);
  };

  return (
    <div className="min-h-screen bg-amber-50 p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h1 className="text-3xl font-bold text-amber-700">
            Delivery Management
          </h1>

          <p className="text-gray-500">
            Manage Delivery Partners
          </p>

        </div>

        <button
          onClick={() => {
            setEditData(null);
            setIsModalOpen(true);
          }}
          className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg"
        >
          + Add Delivery Boy
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-col md:flex-row justify-between gap-4">

        <input
          type="text"
          placeholder="Search Name or Phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-80"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-60"
        >
          <option>All</option>
          <option>Online</option>
          <option>Offline</option>
        </select>

      </div>

      {/* Table */}

     <DeliveryBoyTable
  deliveryBoys={filteredDeliveryBoys}
  onEdit={handleEdit}
  onDelete={handleDeleteClick}
  onToggleStatus={handleToggleStatus}
  onAssign={handleAssignClick}
/>

      {/* Add / Edit Modal */}

      <DeliveryBoyForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditData(null);
        }}
        onSave={handleSave}
        editData={editData}
      />

      {/* Delete Modal */}

      <DeleteDeliveryModal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        onDelete={confirmDelete}
        deliveryBoy={selectedBoy}
      />

      {/* AssignOrderModal */}
      <AssignOrderModal
  isOpen={assignModal}
  onClose={() => setAssignModal(false)}
  deliveryBoys={deliveryBoys}
  onAssign={handleAssignOrder}
/>

    </div>
  );
}