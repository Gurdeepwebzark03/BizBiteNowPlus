import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../dashboard/Sidebar";
import Navbar from "../dashboard/widgets/navbar/Navbar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          transition-transform
          duration-300
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          closeSidebar={() => setSidebarOpen(false)}
        />
      </aside>

      {/* Main Layout */}
      <div
        className={`
          bg-slate-100
          min-h-screen
          transition-[margin]
          duration-300
          ease-in-out
          ${collapsed ? "lg:ml-20" : "lg:ml-72"}
        `}
      >
        {/* Navbar */}
        <Navbar
          className="position-fixed border-b border-slate-200 bg-white"
          collapsed={collapsed}
          openSidebar={() => setSidebarOpen(true)}
        />

        {/* Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-[1700px]">
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;