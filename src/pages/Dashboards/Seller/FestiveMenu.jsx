import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import FestiveHeader from "../../../components/dashboard/festive/FestiveHeader";
import FestiveBanner from "../../../components/dashboard/festive/FestiveBanner";
import FestiveStats from "../../../components/dashboard/festive/FestiveStats";
import FestiveFilters from "../../../components/dashboard/festive/FestiveFilters";
import FestiveMenuTable from "../../../components/dashboard/festive/FestiveMenuTable";
import FestiveEmptyState from "../../../components/dashboard/festive/FestiveEmptyState";
import { motion } from "framer-motion";
import CreateFestiveMenuModal from "../../../components/dashboard/festive/modals/CreateFestiveMenuModal";
import ScheduleMenuModal from "../../../components/dashboard/festive/modals/ScheduleMenuModal";
import DuplicateMenuModal from "../../../components/dashboard/festive/modals/DuplicateMenuModal";
import DeleteMenuModal from "../../../components/dashboard/festive/modals/DeleteMenuModal";

import { useFestiveMenu } from "../../../context/FestiveMenuContext";

export default function FestiveMenu() {
  const navigate = useNavigate();

  const { menus, addMenu, updateMenu, deleteMenu, duplicateMenu, endMenu } =
    useFestiveMenu();

  const [search, setSearch] = useState("");

  const [festivalFilter, setFestivalFilter] = useState("All");

  const [statusFilter, setStatusFilter] = useState("All");

  const [selectedMenu, setSelectedMenu] = useState(null);

  const [showCreateModal, setShowCreateModal] = useState(false);

  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const [showDuplicateModal, setShowDuplicateModal] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  /* ------------------------------------------ */

  const handleCreate = () => {
    setShowCreateModal(true);
  };

  const handleViewMenu = (menu) => {
    navigate(`/seller/festivemenu/${menu.id}`);
  };

  const handleEdit = (menu) => {
    navigate(`/seller/festivemenu/edit/${menu.id}`);
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

  /* ------------------------------------------ */

  const handleSaveSchedule = (updatedMenu) => {
    updateMenu(updatedMenu);

    setSelectedMenu(null);
    setShowScheduleModal(false);
  };

  const handleDuplicateSave = () => {
    if (!selectedMenu) return;

    duplicateMenu(selectedMenu.id);

    setSelectedMenu(null);
    setShowDuplicateModal(false);
  };

  const handleDeleteConfirm = (menuToDelete) => {
    deleteMenu(menuToDelete.id);

    setSelectedMenu(null);
    setShowDeleteModal(false);
  };

  /* ------------------------------------------ */

  const filteredMenus = useMemo(() => {
    return menus.filter((menu) => {
      const query = search.toLowerCase();

      const matchesSearch =
        !query ||
        menu.name.toLowerCase().includes(query) ||
        menu.festival.toLowerCase().includes(query);

      const matchesFestival =
        festivalFilter === "All" || menu.festival === festivalFilter;

      const matchesStatus =
        statusFilter === "All" || menu.status === statusFilter;

      return matchesSearch && matchesFestival && matchesStatus;
    });
  }, [menus, search, festivalFilter, statusFilter]);

  /* ------------------------------------------ */

  const activeMenu = useMemo(() => {
    return menus.find((menu) => menu.status === "active");
  }, [menus]);

  /* ------------------------------------------ */

  const stats = useMemo(() => {
    return {
      totalMenus: menus.length,

      active: menus.filter((menu) => menu.status === "active").length,

      scheduled: menus.filter((menu) => menu.status === "scheduled").length,

      draft: menus.filter((menu) => menu.status === "draft").length,

      expired: menus.filter((menu) => menu.status === "expired").length,
    };
  }, [menus]);

  return (
        <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
    <div className="space-y-6">
      <FestiveHeader totalMenus={menus.length} onCreate={handleCreate} />

      <FestiveBanner menu={activeMenu} onViewMenu={handleViewMenu} />

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
        <FestiveEmptyState search={search} onCreate={handleCreate} />
      ) : (
        <FestiveMenuTable
          menus={filteredMenus}
          onEdit={handleEdit}
          onSchedule={handleSchedule}
          onDuplicate={handleDuplicate}
          onDelete={handleDelete}
        />
      )}
      {/* Create Menu Modal */}

      <CreateFestiveMenuModal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={(menu) => {
          addMenu(menu);
          setShowCreateModal(false);
        }}
      />

      {/* Schedule Menu Modal */}

      <ScheduleMenuModal
        open={showScheduleModal}
        menu={selectedMenu}
        onSave={handleSaveSchedule}
        onClose={() => {
          setSelectedMenu(null);
          setShowScheduleModal(false);
        }}
      />

      {/* Duplicate Menu Modal */}

      <DuplicateMenuModal
        open={showDuplicateModal}
        menu={selectedMenu}
        onDuplicate={handleDuplicateSave}
        onClose={() => {
          setSelectedMenu(null);
          setShowDuplicateModal(false);
        }}
      />

      {/* Delete Menu Modal */}

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
    </motion.div>
  );
}
