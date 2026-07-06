import React from "react";
import { Menu, Clock } from "lucide-react";
import { useLocation } from "react-router-dom";

import SearchBar from "../../SearchBar";
import NotificationButton from "./NotificationButton";
import ProfileMenu from "../../ProfileMenu";

const pageTitles = {
  "/seller/dashboard": "Dashboard",
  "/seller/products": "Products",
  "/seller/categories": "Categories",
  "/seller/inventory": "Inventory",
  "/seller/orders": "Orders",
  "/seller/delivery": "Delivery Management",
  "/seller/offers": "Marketing",
  "/seller/analytics": "Analytics",
  "/seller/settings": "Settings",
};

export default function Navbar({ openSidebar }) {
  const location = useLocation();
  const isDashboard = location.pathname === "/seller/dashboard";

  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <header
      className="
        sticky top-0 z-30
        flex h-[72px] items-center justify-between
        border-b border-slate-200/80
        bg-white/95
        px-5
        backdrop-blur-md
        md:px-6
        lg:px-8
      "
    >
      {/* Left */}
      <div className="flex min-w-0 items-center gap-4">
        <button
          onClick={openSidebar}
          className="
      flex h-11 w-11 items-center justify-center
      rounded-xl
      transition-all duration-300
      hover:bg-slate-100
      active:scale-95
      lg:hidden
    "
        >
          <Menu size={22} strokeWidth={2} />
        </button>

<div className="relative hidden h-[52px] w-[260px] overflow-hidden md:block">

  {/* Dashboard Title */}

  <div
    className={`absolute inset-0 flex items-center transition-all duration-500 ease-in-out ${
      isDashboard
        ? "translate-y-0 opacity-100"
        : "-translate-y-6 opacity-0"
    }`}
  >
    <h2 className="text-2xl font-bold text-slate-900">
      Seller <span className="text-green-700 font-inter">Dashboard</span> 
    </h2>
  </div>

  {/* Clock */}

  <div
    className={`absolute inset-0 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 transition-all duration-500 ease-in-out ${
      !isDashboard
        ? "translate-y-0 opacity-100"
        : "translate-y-6 opacity-0"
    }`}
  >
    <div className="rounded-xl bg-[#16522d]/10 p-2">
      <Clock
        size={18}
        className="text-[#16522d]"
      />
    </div>

    <div>
      <p className="text-xs text-slate-500">
        {formattedDate}
      </p>

      <p className="text-sm font-semibold text-slate-900">
        {formattedTime}
      </p>
    </div>
  </div>

</div>
      </div>
      {/* Right */}
      <div className="flex items-center gap-3">
        <NotificationButton />

        <ProfileMenu
          seller={{
            name: "Gurdeep Singh",
            role: "Plus Seller",
          }}
        />
      </div>
    </header>
  );
}
