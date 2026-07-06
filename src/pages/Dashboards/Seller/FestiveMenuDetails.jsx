import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  IndianRupee,
  ShoppingBag,
  Package,
  Layers3,
  Pencil,
  Copy,
  Eye,
  Trash2,
  PauseCircle,
} from "lucide-react";

import { useFestiveMenu } from "../../../context/FestiveMenuContext";

export default function FestiveMenuDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { menus, deleteMenu, duplicateMenu, endMenu } = useFestiveMenu();

  const menu = menus.find((item) => item.id === Number(id));
  const handleEdit = () => {
    navigate(`/seller/festivemenu/edit/${menu.id}`);
  };

  const handleDuplicate = () => {
    duplicateMenu(menu.id);

    alert("Menu duplicated");

    navigate("/seller/festivemenu");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Delete this festive menu?");

    if (!confirmDelete) return;

    deleteMenu(menu.id);

    navigate("/seller/festivemenu");
  };

  const handleEndMenu = () => {
    const confirmEnd = window.confirm("End this festive menu?");

    if (!confirmEnd) return;

    endMenu(menu.id);

    navigate("/seller/festivemenu");
  };

  const handlePreview = () => {
    alert("Customer Preview will be connected later.");
  };

  if (!menu) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800">Menu Not Found</h2>

          <button
            onClick={() => navigate(-1)}
            className="mt-6 rounded-xl bg-[#1A4D2E] px-6 py-3 text-white"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">
      {/* Back */}

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-slate-50"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Hero */}

      <div className="overflow-hidden rounded-3xl bg-white shadow">
        <img
          src={menu.banner}
          alt={menu.name}
          className="h-[340px] w-full object-cover"
        />

        <div className="space-y-5 p-8">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                {menu.status.toUpperCase()}
              </span>

              <h1 className="mt-4 text-4xl font-black text-slate-900">
                {menu.name}
              </h1>

              <p className="mt-3 max-w-3xl text-slate-600">
                {menu.description}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePreview}
                className="rounded-xl border px-5 py-3 hover:bg-slate-50"
              >
                <Eye size={18} />
              </button>

              <button
                onClick={handleEdit}
                className="rounded-xl border px-5 py-3 hover:bg-slate-50"
              >
                <Pencil size={18} />
              </button>

              <button
                onClick={handleDuplicate}
                className="rounded-xl border px-5 py-3 hover:bg-slate-50"
              >
                <Copy size={18} />
              </button>

              <button
                onClick={handleDelete}
                className="rounded-xl border border-red-200 px-5 py-3 text-red-600 hover:bg-red-50"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Revenue"
          value={`₹${menu.revenue.toLocaleString()}`}
          icon={<IndianRupee />}
        />

        <StatCard title="Orders" value={menu.orders} icon={<ShoppingBag />} />

        <StatCard
          title="Products"
          value={menu.totalProducts}
          icon={<Package />}
        />

        <StatCard title="Combos" value={menu.totalCombos} icon={<Layers3 />} />
      </div>

      {/* Details */}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-7 shadow lg:col-span-2">
          <h2 className="mb-6 text-2xl font-bold">Menu Details</h2>

          <div className="grid gap-5 md:grid-cols-2">
            <DetailItem
              icon={<CalendarDays />}
              label="Festival"
              value={menu.festival}
            />

            <DetailItem icon={<Clock3 />} label="Status" value={menu.status} />

            <DetailItem
              icon={<CalendarDays />}
              label="Starts"
              value={menu.goLive}
            />

            <DetailItem
              icon={<CalendarDays />}
              label="Ends"
              value={menu.endsOn}
            />
          </div>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow">
          <h2 className="mb-6 text-2xl font-bold">Quick Actions</h2>

          <div className="space-y-4">
            <button
              onClick={handleEdit}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A4D2E] py-3 text-white"
            >
              <Pencil size={18} />
              Edit Menu
            </button>

            <button
              onClick={handleDuplicate}
              className="flex w-full items-center justify-center gap-2 rounded-xl border py-3"
            >
              <Copy size={18} />
              Duplicate
            </button>

            <button
              onClick={handlePreview}
              className="flex w-full items-center justify-center gap-2 rounded-xl border py-3"
            >
              <Eye size={18} />
              Preview
            </button>

            <button
              onClick={handleEndMenu}
              className="flex w-full items-center justify-center gap-2 rounded-xl border py-3"
            >
              <PauseCircle size={18} />
              End Menu
            </button>

            <button
              onClick={handleDelete}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 py-3 text-red-600"
            >
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-500">{title}</p>
          <h3 className="mt-2 text-3xl font-black">{value}</h3>
        </div>

        <div className="rounded-2xl bg-green-100 p-4 text-green-700">
          {icon}
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <div className="rounded-2xl border p-5">
      <div className="mb-3 text-green-700">{icon}</div>

      <p className="text-sm text-slate-500">{label}</p>

      <h3 className="mt-1 text-lg font-semibold">{value}</h3>
    </div>
  );
}
