import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Settings,
  IndianRupee,
  LogOut,
  Palette,
  Type,
} from "lucide-react";
import logoWithIcon from "../../assets/BIZ BITE NOW Horizontal with Icon.png";

const menuItems = [
  {
    name: "Dashboard",
    path: "/seller/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Orders",
    path: "/seller/orders",
    icon: ShoppingBag,
  },
  {
    name: "Products",
    path: "/seller/products",
    icon: Package,
  },
  {
    name: "Settings",
    path: "/seller/settings",
    icon: Settings,
  },
];

const Sidebar = ({ openProModal }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove all possible auth data
    localStorage.removeItem("sellerToken");
    localStorage.removeItem("sellerAuth");
    localStorage.removeItem("token");
    localStorage.removeItem("seller");
    localStorage.removeItem("user");

    sessionStorage.clear();

    navigate("/seller/login", { replace: true });

    // Prevent back button returning to dashboard
    window.location.reload();
  };

  return (
    <aside className="h-full w-full bg-[#1A4D2E] text-white flex flex-col">
      {/* Logo */}
      <div className="h-20 flex flex-col items-center justify-center border-b border-white/10 px-4 gap-1">
        <div className="bg-white rounded-xl px-3 py-1.5">
          <img
            src={logoWithIcon}
            alt="BizBiteNow"
            className="h-8 object-contain"
          />
        </div>
        <p className="text-xs text-black-300 tracking-wide">Seller Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-4 flex-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/seller/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 lg:px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                  isActive
                    ? "bg-[#F4A300] text-black font-semibold"
                    : "hover:bg-white/10 text-black-200"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
      {/* Mobile Premium Features */}

      <div className="lg:hidden px-4 pb-4 space-y-3">
        <button
          onClick={openProModal}
          className="
      relative
      w-full
      overflow-hidden
      rounded-xl
      bg-gradient-to-r
      from-violet-600
      via-fuchsia-500
      to-pink-500
      bg-[length:200%_200%]
      animate-gradient
      px-4
      py-3
      text-white
      font-semibold
      shadow-lg
      transition
      hover:scale-[1.02]
    "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Palette size={20} />
              Theme Colors
            </div>

            <span className="rounded-full bg-yellow-300 px-2 py-0.5 text-[10px] font-bold text-black animate-pulse">
              PRO
            </span>
          </div>
        </button>

        <button
          onClick={openProModal}
          className="
      relative
      w-full
      overflow-hidden
      rounded-xl
      bg-gradient-to-r
      from-blue-600
      via-cyan-500
      to-teal-500
      bg-[length:200%_200%]
      animate-gradient
      px-4
      py-3
      text-white
      font-semibold
      shadow-lg
      transition
      hover:scale-[1.02]
    "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Type size={20} />
              Font Styles
            </div>

            <span className="rounded-full bg-yellow-300 px-2 py-0.5 text-[10px] font-bold text-black animate-pulse">
              PRO
            </span>
          </div>
        </button>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-3 w-full bg-[#F4A300] hover:bg-[#b99100] transition rounded-xl py-3 text-black font-semibold"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
