import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../dashboard/Sidebar";
import Navbar from "../dashboard/widgets/navbar/Navbar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen((prev) => !prev);
    }
  };

  const closeSidebar = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="relative min-h-full mt-0 lg:mt-16 bg-slate-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        onExpandedChange={setSidebarExpanded}
      />

      {/* Main Content */}
      <div
        className="h-full bg-slate-100 transition-[margin-left,width] duration-300 ease-[cubic-bezier(.22,1,.36,1)]"
        style={{
          marginLeft: 0,
          width: "100%",
          ...(window.matchMedia("(min-width: 1024px)").matches && {
            marginLeft: sidebarExpanded ? 240 : 96,
            width: sidebarExpanded ? "calc(100% - 240px)" : "calc(100% - 96px)",
          }),
        }}
      >
        <Navbar openSidebar={toggleSidebar} />

        <main className=" p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-[1700px]">{children || <Outlet />}</div>
        </main>
      </div>
    </div>
  );
}
