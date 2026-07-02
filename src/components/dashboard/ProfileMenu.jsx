import { useState } from "react";
import {
  User,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
} from "lucide-react";

export default function ProfileMenu({
  seller = {
    name: "Gurdeep Singh",
    role: "Plus Seller",
    avatar: "",
  },
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-slate-200
          bg-white
          px-3
          py-2
          transition-all
          hover:border-[#1A4D2E]
          hover:bg-slate-50
        "
      >
        {/* Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A4D2E] text-sm font-bold text-white">
          GS
        </div>

        {/* Name */}
        <div className="hidden text-left md:block">
          <h4 className="text-sm font-semibold text-slate-900">
            {seller.name}
          </h4>

          <p className="text-xs text-slate-500">
            {seller.role}
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            right-0
            mt-3
            w-64
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-xl
            z-50
          "
        >
          {/* Header */}
          <div className="border-b border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">
              {seller.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {seller.role}
            </p>
          </div>

          {/* Menu */}

          <div className="py-2">

            <MenuItem
              icon={User}
              title="My Profile"
            />

            <MenuItem
              icon={Settings}
              title="Settings"
            />

            <MenuItem
              icon={HelpCircle}
              title="Help Center"
            />

            <div className="my-2 border-t border-slate-200" />

            <MenuItem
              icon={LogOut}
              title="Logout"
              danger
            />

          </div>
        </div>
      )}
    </div>
  );
}

function MenuItem({
  icon: Icon,
  title,
  danger = false,
}) {
  return (
    <button
      className={`
        flex
        w-full
        items-center
        gap-3
        px-5
        py-3
        text-sm
        transition

        ${
          danger
            ? "text-red-600 hover:bg-red-50"
            : "text-slate-700 hover:bg-slate-100"
        }
      `}
    >
      <Icon size={18} />
      {title}
    </button>
  );
}