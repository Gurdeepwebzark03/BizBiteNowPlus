import {
  LayoutDashboard,
  Package,
  IndianRupee,
  ShoppingCart,
  Truck,
  Gift,
  Store,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import icon from "../../assets/BIZ BITE NOW Vertical with Icon.png";
import logo from "../../assets/BIZ BITE NOW Horizontal with Icon.png";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
     className={`
  fixed left-4 top-4 bottom-4
  flex flex-col
  rounded-3xl
  bg-slate-100
  backdrop-blur-md
  shadow-xl
  transition-all duration-300 ease-in-out
  ${collapsed ? "w-20" : "w-55"}
`}
    >
      {/* Logo */}
      <div className="flex h-20 items-center justify-center rounded-t-3xl  py-10 backdrop-blur-md px-4">
        {collapsed ? (
        <div className="h-16 w-16 overflow-hidden rounded-[14px]">
          <img
            src={icon}
            alt="BizBiteNow"
            className="h-full w-full object-cover"
          />
        </div>
        ) : (
          <img
            src={logo}
            alt="BizBiteNow"
            className="h-20 rounded-3xl object-contain"
          />
        )}
      </div>

      {/* Navigation */}
      <nav className="sidebar-scroll flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-2">
          <SidebarItem
            title="Dashboard"
            icon={LayoutDashboard}
            to="/seller/dashboard"
            collapsed={collapsed}
          />

          <SidebarItem
            title="Product Management"
            icon={Package}
            to="/seller/products"
            collapsed={collapsed}
            className
          />

          <SidebarItem
            title="Orders"
            icon={ShoppingCart}
            to="/seller/orders"
            collapsed={collapsed}
          />

          <SidebarItem
            title="Delivery"
            icon={Truck}
            to="/seller/delivery"
            collapsed={collapsed}
          />

          <SidebarItem
            title="Festive Menu"
            icon={Gift}
            to="/seller/festivemenu"
            collapsed={collapsed}
          />
          <SidebarItem
            title="Earnings"
            icon={IndianRupee}
            to="/seller/earnings"
            collapsed={collapsed}
          />

          <SidebarItem
            title="Analytics"
            icon={BarChart3}
            to="/seller/analytics"
            collapsed={collapsed}
          />

          <SidebarItem
            title="Store Settings"
            icon={Settings}
            to="/seller/settings"
            collapsed={collapsed}
          />
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-[#C5BAFF]/40 p-3">
        <SidebarItem
          title="Logout"
          icon={LogOut}
          to="/login"
          collapsed={collapsed}
          danger
        />
      </div>
    </aside>
  );
}