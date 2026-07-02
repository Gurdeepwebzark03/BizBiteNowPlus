import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../dashboard/Sidebar";
import Navbar from "../dashboard/Navbar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-72
          transform
          transition-transform
          duration-300
          ease-in-out
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <Sidebar
          closeSidebar={() => setSidebarOpen(false)}
        />
      </aside>

      {/* Main Area */}
      <div className="flex min-h-screen flex-col lg:ml-72">
        {/* Navbar */}
        <header className="sticky top-0 z-30">
          <Navbar
            openSidebar={() => setSidebarOpen(true)}
          />
        </header>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden">
          <div className="mx-auto w-full max-w-[1700px] px-4 py-5 sm:px-6 lg:px-8 xl:px-10">
{children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;