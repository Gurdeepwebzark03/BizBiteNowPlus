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

  const pageTitle =
    pageTitles[location.pathname] || "Seller Dashboard";

  return (
    <header
      className="
        sticky
        top-0
        z-30
        flex
        h-[72px]
        items-center
        justify-between
        border-b
        border-slate-200
        bg-white
        px-4
        md:px-6
      "
    >
      {/* Left */}
      <div className="flex items-center gap-4">

        <button
          onClick={openSidebar}
          className="
            rounded-xl
            p-2
            transition
            hover:bg-slate-100
            lg:hidden
          "
        >
          <Menu size={22} />
        </button>



      </div>

      {/* Center */}
      <div className="hidden flex-1 justify-center px-8 xl:flex">
        <SearchBar />
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