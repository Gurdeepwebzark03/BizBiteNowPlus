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
    fixed
    top-4
    left-1/2
    -translate-x-1/2
    z-[1000]
    flex
    h-[72px]
    w-[55%]
    items-center
    justify-between
    rounded-3xl
    border
    border-slate-200
    
    px-5
    shadow-lg
    bg-slate-100
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
      hover:bg-[#FDFDF5]
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
      BizBitesNow<span className="text-green-700 font-inter">Plus</span> 
    </h2>
  </div>

  {/* Clock */}

  <div
    className={`absolute inset-0 flex items-center gap-3 rounded-2xl background-blur-md px-4 py-2 transition-all duration-500 ease-in-out ${
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
      <p className="text-xs text-slate-600 ">
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
            name: "Seller",
            role: "Plus Seller",
          }}
        />
      </div>
    </header>
  );
}
