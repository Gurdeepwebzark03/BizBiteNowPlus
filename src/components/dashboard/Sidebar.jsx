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

export default function Sidebar({
  collapsed,
  setCollapsed,
  sidebarOpen,
  closeSidebar,
}) {
  return (
    <aside
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
className={`
fixed z-50
top-4 bottom-4

bg-slate-100
rounded-3xl
shadow-xl
transition-all duration-300 ease-in-out

flex flex-col

${
  sidebarOpen
    ? "left-4"
    : "-left-full"
}

lg:left-4

${collapsed ? "lg:w-20" : "lg:w-55"}

w-72
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
            onClick={closeSidebar}
          />

          <SidebarItem
            title="Product Management"
            icon={Package}
            to="/seller/products"
            collapsed={collapsed}
            className
            onClick={closeSidebar}
          />

          <SidebarItem
            title="Orders"
            icon={ShoppingCart}
            to="/seller/orders"
            collapsed={collapsed}
            onClick={closeSidebar}
          />

          <SidebarItem
            title="Delivery"
            icon={Truck}
            to="/seller/delivery"
            collapsed={collapsed}
            onClick={closeSidebar}
          />

          <SidebarItem
            title="Festive Menu"
            icon={Gift}
            to="/seller/festivemenu"
            collapsed={collapsed}
            onClick={closeSidebar}
          />
          <SidebarItem
            title="Earnings"
            icon={IndianRupee}
            to="/seller/earnings"
            collapsed={collapsed}
            onClick={closeSidebar}
          />

          <SidebarItem
            title="Analytics"
            icon={BarChart3}
            to="/seller/analytics"
            collapsed={collapsed}
            onClick={closeSidebar}
          />

          <SidebarItem
            title="Store Settings"
            icon={Settings}
            to="/seller/settings"
            collapsed={collapsed}
            onClick={closeSidebar}
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
      <div className="border-t border-[#C5BAFF]/40 p-3">
        <SidebarItem
          title="Logout"
          icon={LogOut}
          to="/login"
          collapsed={collapsed}
          danger
          onClick={closeSidebar}
        />
      </div> */}
    </aside>
  );
}