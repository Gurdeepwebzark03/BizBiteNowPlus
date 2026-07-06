import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import FestiveHeader from "../../../components/dashboard/festive/FestiveHeader";
import FestiveBanner from "../../../components/dashboard/festive/FestiveBanner";
import FestiveStats from "../../../components/dashboard/festive/FestiveStats";
import FestiveFilters from "../../../components/dashboard/festive/FestiveFilters";
import FestiveMenuTable from "../../../components/dashboard/festive/FestiveMenuTable";
import FestiveEmptyState from "../../../components/dashboard/festive/FestiveEmptyState";

import CreateFestiveMenuModal from "../../../components/dashboard/festive/modals/CreateFestiveMenuModal";
import ScheduleMenuModal from "../../../components/dashboard/festive/modals/ScheduleMenuModal";
import DuplicateMenuModal from "../../../components/dashboard/festive/modals/DuplicateMenuModal";
import DeleteMenuModal from "../../../components/dashboard/festive/modals/DeleteMenuModal";
import { festiveMenuData } from "../../../data/festiveMenuData";

export default function FestiveMenu() {
  const navigate = useNavigate();

  const [menus, setMenus] = useState(festiveMenuData);

const [search, setSearch] = useState("");
const [festivalFilter, setFestivalFilter] = useState("All");
const [statusFilter, setStatusFilter] = useState("All");

  const [selectedMenu, setSelectedMenu] = useState(null);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCreate = () => {
    setShowCreateModal(true);
  };

  const handleSchedule = (menu) => {
    setSelectedMenu(menu);
    setShowScheduleModal(true);
  };

  const handleDuplicate = (menu) => {
    setSelectedMenu(menu);
    setShowDuplicateModal(true);
  };

  const handleDelete = (menu) => {
    setSelectedMenu(menu);
    setShowDeleteModal(true);
  };
  const handleSaveSchedule = (updatedMenu) => {
  setMenus((prev) =>
    prev.map((menu) =>
      menu.id === updatedMenu.id
        ? updatedMenu
        : menu
    )
  );

  setSelectedMenu(null);
  setShowScheduleModal(false);
};

const handleDuplicateSave = (newMenu) => {
  setMenus((prev) => [
    ...prev,
    newMenu,
  ]);

  setSelectedMenu(null);
  setShowDuplicateModal(false);
};

const handleDeleteConfirm = (menuToDelete) => {
  setMenus((prev) =>
    prev.filter(
      (menu) => menu.id !== menuToDelete.id
    )
  );

  setSelectedMenu(null);
  setShowDeleteModal(false);
};

const handleViewMenu = (menu) => {
  navigate(`/seller/festivemenu/${menu.id}`);
};
const filteredMenus = useMemo(() => {
  return menus.filter((menu) => {
    const menuName = (menu.name || "").toLowerCase();
    const menuFestival = (menu.festival || "").toLowerCase();
    const menuStatus = (menu.status || "").toLowerCase();

    const searchText = search.trim().toLowerCase();
    const selectedFestival = festivalFilter.toLowerCase();
    const selectedStatus = statusFilter.toLowerCase();

    const matchesSearch =
      searchText === "" ||
      menuName.includes(searchText) ||
      menuFestival.includes(searchText);

    const matchesFestival =
      selectedFestival === "all" ||
      menuFestival === selectedFestival;

    const matchesStatus =
      selectedStatus === "all" ||
      menuStatus === selectedStatus;

    return (
      matchesSearch &&
      matchesFestival &&
      matchesStatus
    );
  });
}, [menus, search, festivalFilter, statusFilter]);

const activeMenu = useMemo(() => {
  return menus.find(
    (menu) => menu.status.toLowerCase() === "active"
  );
}, [menus]);
const stats = useMemo(() => {
  return {
    totalMenus: menus.length,

    active: menus.filter(
      (m) => m.status.toLowerCase() === "active"
    ).length,

    scheduled: menus.filter(
      (m) => m.status.toLowerCase() === "scheduled"
    ).length,

    draft: menus.filter(
      (m) => m.status.toLowerCase() === "draft"
    ).length,

    expired: menus.filter(
      (m) => m.status.toLowerCase() === "expired"
    ).length,
  };
}, [menus]);

    return (
    <div className="space-y-6">

      <FestiveHeader
        totalMenus={menus.length}
        onCreate={handleCreate}
      />

      <FestiveBanner
        menu={activeMenu}
        onViewMenu={handleViewMenu}
      />

      <FestiveStats stats={stats} />

      <FestiveFilters
        search={search}
        setSearch={setSearch}
        festival={festivalFilter}
        setFestival={setFestivalFilter}
        status={statusFilter}
        setStatus={setStatusFilter}
      />

      {filteredMenus.length === 0 ? (
        <FestiveEmptyState
          search={search}
          onCreate={handleCreate}
        />
      ) : (
        <FestiveMenuTable
          menus={filteredMenus}
          onSchedule={handleSchedule}
          onDuplicate={handleDuplicate}
          onDelete={handleDelete}
        />
      )}

      {/* Create Modal */}

      <CreateFestiveMenuModal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />

      {/* Schedule Modal */}

<ScheduleMenuModal
  open={showScheduleModal}
  menu={selectedMenu}
  onSave={handleSaveSchedule}
  onClose={() => {
    setSelectedMenu(null);
    setShowScheduleModal(false);
  }}
/>

      {/* Duplicate Modal */}

<DuplicateMenuModal
  open={showDuplicateModal}
  menu={selectedMenu}
  onDuplicate={handleDuplicateSave}
  onClose={() => {
    setSelectedMenu(null);
    setShowDuplicateModal(false);
  }}
/>

      {/* Delete Modal */}

<DeleteMenuModal
  open={showDeleteModal}
  menu={selectedMenu}
  onDelete={handleDeleteConfirm}
  onClose={() => {
    setSelectedMenu(null);
    setShowDeleteModal(false);
  }}
/>

    </div>
  );
}