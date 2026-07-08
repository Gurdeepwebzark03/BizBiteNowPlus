import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../dashboard/Sidebar";
import Navbar from "../dashboard/widgets/navbar/Navbar";
import { useLocation, Link } from "react-router-dom";
import { LayoutDashboard, ShoppingBag, Settings } from "lucide-react";
const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen mt-20 bg-slate-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40  backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        sidebarOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />


      {/* Main Layout */}
      <div
        className={`
          bg-[#FDFDF5]
          min-h-screen
          transition-[margin]
          duration-300
          ease-in-out
          ${collapsed ? "lg:ml-20" : "lg:ml-72"}
        `}
      >
        {/* Navbar */}
        
        <Navbar
        className="bg-green-200"
          collapsed={collapsed}
          openSidebar={() => setSidebarOpen(true)}
        />
     
        {/* Content */}
        <main className="p-4 sm:p-6 lg:p-8 bg-slate-100">
          <div className="mx-auto max-w-[1700px]">{children || <Outlet />}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
