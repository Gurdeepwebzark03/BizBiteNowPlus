import { NavLink } from "react-router-dom";
import { House, UtensilsCrossed, ReceiptText, Gift, User, LogOut } from "lucide-react";

const navItems = [
  {
    label: "Home",
    path: "/customer",
    icon: House,
  },
  {
    label: "Menu",
    path: "/customer/menu",
    icon: UtensilsCrossed,
  },
  {
    label: "Orders",
    path: "/customer/orders",
    icon: ReceiptText,
  },
  {
    label: "Rewards",
    path: "/customer/rewards",
    icon: Gift,
  },
  {
    label: "Profile",
    path: "/customer/profile",
    icon: User,
  },
];

const DesktopSidebar = ({ store = {}, onLogout }) => {
  return (
    <aside className="group hidden lg:flex peer fixed left-5 top-5 bottom-5 z-50 w-24 hover:w-60 overflow-hidden flex-col items-center rounded-[30px] border border-slate-200 bg-white/90 backdrop-blur-xl shadow-xl transition-all duration-300 ease-in-out">
      {/* Logo */}
      <div className="pt-5 pb-8">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white shadow-lg" style={{ background: "var(--primary)" }}>
          {store.initials || "BB"}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 w-full flex-col gap-4 px-5">
        {navItems.map(({ icon: Icon, path, label }) => (
          <NavLink key={path} to={path} title={label} end={path === "/customer"} className="w-full">
            {({ isActive }) => (
              <div className={`relative flex h-14 w-full items-center gap-4 rounded-2xl transition-all duration-300 
              ${isActive ? "text-white shadow-lg" : "text-green-700 hover:bg-slate-100 hover:text-yellow-600"}`}
               style={{ background: isActive ? "var(--secondary)" : "transparent" }}>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center">
                  <Icon size={22} />
                </div>

                {/* Label */}
                <span className="whitespace-nowrap text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">{label}</span>
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="pb-5 px-5 w-full">
        <button onClick={onLogout} className="w-full flex h-14 items-center gap-4 rounded-2xl text-red-600 transition hover:bg-red-50 hover:text-red-700">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center">
            <LogOut size={22} />
          </div>
          <span className="whitespace-nowrap text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
