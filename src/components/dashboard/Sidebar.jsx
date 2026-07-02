import { ChevronLeft, Menu } from "lucide-react";
import sidebarConfig from "../../config/sidebarConfig";
import SidebarItem from "./SidebarItem";
import Button from "../UI/Button";

export default function Sidebar({
  collapsed,
  setCollapsed,
}) {


  return (
    <aside
      className={`
        h-screen
        bg-[#16522d]
        border-r
        border-slate-200
        shadow-sm
        transition-all
        duration-300
        ${
          collapsed
            ? "w-20"
            : "w-72"
        }
      `}
    >
      {/* Logo */}



      {/* Seller */}

 <div className="border-b border-slate-200 bg-white p-5">
  {/* Top Row */}
<div
  className={`mb-5 flex ${
    collapsed ? "justify-center" : "justify-end"
  }`}
>
  <Button
    onClick={() => setCollapsed(!collapsed)}
    className="rounded-xl p-2"
  >
    {collapsed ? (
      <Menu size={20} />
    ) : (
      <ChevronLeft size={20} />
    )}
  </Button>
</div>

  {/* Seller Profile */}
  <div
    className={`flex items-center ${
      collapsed ? "justify-center" : "gap-3"
    }`}
  >
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1A4D2E] text-lg font-bold text-white">
      GS
    </div>

    {!collapsed && (
      <div className="min-w-0">
        <h3 className="truncate font-semibold text-slate-900">
          Gurdeep Singh
        </h3>

        <p className="text-sm text-slate-500">
          Plus Seller
        </p>
      </div>
    )}
  </div>
</div>

      {/* Navigation */}

      <nav className="sidebar-scroll h-[calc(100vh-160px)] overflow-y-auto px-3 py-4">

        <div className="space-y-2">

          {sidebarConfig.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              collapsed={collapsed}
            />
          ))}

        </div>

      </nav>

    </aside>
  );
}