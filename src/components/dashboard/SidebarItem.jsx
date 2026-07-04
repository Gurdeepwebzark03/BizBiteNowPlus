import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";

export default function SidebarItem({
  title,
  icon: Icon,
  to,
  children = [],
  collapsed = false,
  danger = false,
}) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ||
    location.pathname.startsWith(`${path}/`);


// Logout (NavLink)
if (danger) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex w-full items-center gap-3
        rounded-xl
        px-4 py-3
        transition-all duration-200
        ${
          isActive
            ? "bg-red-100 text-red-600 font-semibold"
            : "text-red-500 bg-red-100 hover:bg-red-300 hover:text-red-600"
        }
      `}
    >
      <Icon size={20} />

      <span
        className={`
          overflow-hidden whitespace-nowrap font-medium
          transition-all duration-300
          ${
            collapsed
              ? "w-0 opacity-0"
              : "w-auto opacity-100"
          }
        `}
      >
        {title}
      </span>
    </NavLink>
  );
}

// Simple Navigation Button
// Simple Navigation Button
if (!children.length) {
  return (
    <Button
      type="button"
      onClick={() => navigate(to)}
      className={`
        flex h-12 w-full items-center rounded-xl px-4
        text-[15px] font-medium
        transition-all duration-300 ease-in-out
        ${
          collapsed
            ? "justify-center"
            : "justify-start gap-3.5"
        }
        ${
          isActive(to)
            ? "bg-[#F4A300] text-black shadow-sm"
            : "text-gray-200 hover:bg-white/10 hover:text-white"
        }
      `}
    >
      <Icon
        size={20}
        strokeWidth={2}
        className="shrink-0 flex-none"
      />

      {!collapsed && (
        <span className="whitespace-nowrap">
          {title}
        </span>
      )}
    </Button>
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
              : "text-gray-200 hover:bg-white/10"
          }
        `}
      >
        <Icon size={20} className="shrink-0" />

        <div
          className={`
            overflow-hidden transition-all duration-300
            ${collapsed ? "w-0 opacity-0" : "w-44 opacity-100"}
          `}
        >
          <span className="block whitespace-nowrap font-medium">
            {title}
          </span>
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
        <div className="ml-7 space-y-1 border-l border-white/10 pl-4">
          {children.map((child) => (
            <Button
              key={child.to}
              type="button"
              onClick={() => navigate(child.to)}
              className={`
                w-full rounded-lg
                px-3 py-2
                text-left text-sm
                transition
                ${
                  isActive(child.to)
                    ? "bg-[#F4A300] text-black font-semibold"
                    : "text-gray-300 hover:bg-white/10"
                }
              `}
            >
              {child.title}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}