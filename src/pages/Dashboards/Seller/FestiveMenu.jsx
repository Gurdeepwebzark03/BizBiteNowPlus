import { useMemo, useState } from "react";

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

  const filteredMenus = useMemo(() => {
    return menus.filter((menu) => {
      const matchesSearch =
        menu.name.toLowerCase().includes(search.toLowerCase()) ||
        menu.festival.toLowerCase().includes(search.toLowerCase());

      const matchesFestival =
        festivalFilter === "All" ||
        menu.festival === festivalFilter;

      const matchesStatus =
        statusFilter === "All" ||
        menu.status === statusFilter;

      return (
        matchesSearch &&
        matchesFestival &&
        matchesStatus
      );
    });
  }, [menus, search, festivalFilter, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: menus.length,

      active: menus.filter(
        (m) => m.status === "Active"
      ).length,

      scheduled: menus.filter(
        (m) => m.status === "Scheduled"
      ).length,

      draft: menus.filter(
        (m) => m.status === "Draft"
      ).length,
    };
  }, [menus]);
    return (
    <div className="space-y-6">

      <FestiveHeader
        totalMenus={menus.length}
        onCreate={handleCreate}
      />

      <FestiveBanner />

      <FestiveStats stats={stats} />

      <FestiveFilters
        search={search}
        onSearchChange={setSearch}
        festival={festivalFilter}
        onFestivalChange={setFestivalFilter}
        status={statusFilter}
        onStatusChange={setStatusFilter}
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
        onClose={() => {
          setSelectedMenu(null);
          setShowScheduleModal(false);
        }}
      />

      {/* Duplicate Modal */}

      <DuplicateMenuModal
        open={showDuplicateModal}
        menu={selectedMenu}
        onClose={() => {
          setSelectedMenu(null);
          setShowDuplicateModal(false);
        }}
      />

      {/* Delete Modal */}

      <DeleteMenuModal
        open={showDeleteModal}
        menu={selectedMenu}
        onClose={() => {
          setSelectedMenu(null);
          setShowDeleteModal(false);
        }}
      />

    </div>
  );
}