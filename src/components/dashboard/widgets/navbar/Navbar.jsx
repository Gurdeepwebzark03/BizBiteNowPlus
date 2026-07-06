import { Menu } from "lucide-react";
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
