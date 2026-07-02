import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Button from "../UI/Button";

export default function SidebarItem({ item, collapsed = false }) {
  const [open, setOpen] = useState(false);

  const Icon = item.icon;

  // Simple Link
  if (!item.children) {
    return (
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `
          flex items-center gap-3
          rounded-xl
          bg-red-200
          px-4 py-3
          transition-all duration-200
          ${
            isActive
              ? item.danger
                ? "bg-red-50 text-red-600"
                : "bg-[#1A4D2E] text-white shadow-md"
              : item.danger
              ? "text-red-600 hover:bg-red-50"
              : "text-slate-700 hover:bg-slate-100"
          }
          `
        }
      >
        <Icon size={20} />

        {!collapsed && (
          <span className="font-medium">
            {item.title}
          </span>
        )}
      </NavLink>
    );
  }

  // Expandable Menu
  return (
    <div className="space-y-2">
        <Button
        type="button"
        onClick={() => setOpen(!open)}
        className={`
            flex w-full items-center justify-between
            rounded-xl
            px-4 py-3
            transition-all duration-200
            ${
            open
                ? "bg-[#F4A300] text-black font-semibold"
                    : "hover:bg-white/40 text-gray-200"
            }
        `}
        >
        <div className="flex items-center gap-3">
          <Icon size={20} />

          {!collapsed && (
            <span className="font-medium">
              {item.title}
            </span>
          )}
        </div>

        {!collapsed && (
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </Button>

      {!collapsed && open && (
        <div className="ml-7 space-y-1 pl-4">
          {item.children.map((child) => (
            <NavLink
              key={child.path}
              to={child.path}
              className={({ isActive }) =>
                `
                block rounded-lg
                px-3 py-2
                text-sm
                transition
                ${
                  isActive
                    ? "bg-[#F4A300] text-black font-semibold"
                    : "hover:bg-white/40 text-gray-200"
                }
                `
              }
            >
              {child.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}