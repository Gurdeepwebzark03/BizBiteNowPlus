import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  Gift,
  Store,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import icon from "../../assets/BIZ BITE NOW Icon.png";
import logo from "../../assets/BIZ BITE NOW Horizontal with Icon.png";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      className={`
        flex h-screen flex-col
        bg-[#16522d]
        border-r border-white/10
        shadow-sm
        transition-all duration-300 ease-in-out
        ${collapsed ? "w-20" : "w-72"}
      `}
    >
      {/* Logo */}
      <div className="flex h-20 items-center justify-center border-b border-white/10 bg-white px-4">
        {collapsed ? (
          <img
            src={icon}
            alt="BizBiteNow"
            className="h-20 w-20 object-contain"
          />
        ) : (
          <img
            src={logo}
            alt="BizBiteNow"
            className="h-20 object-contain"
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

          {/* <SidebarItem
            title="Delivery"
            icon={Truck}
            to="/seller/delivery"
            collapsed={collapsed}
          /> */}

{/* Delivery management */}
<SidebarItem
  title="Delivery Management"
  icon={Truck}
  to="/seller/delivery-management"
  collapsed={collapsed}
/>

          <SidebarItem
            title="Festive Menu"
            icon={Gift}
            to="/seller/festivemenu"
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

          
          <SidebarItem
            title="Logout"
            icon={LogOut}
            to="/login"
            collapsed={collapsed}
            danger
          />



        </div>
      </nav>

      {/* Footer */}
      {/* <div className="border-t border-white/10 p-3">
        <SidebarItem
          title="Logout"
          icon={LogOut}
          to="/login"
          collapsed={collapsed}
          danger
        />
      </div> */}
    </aside>
  );
}