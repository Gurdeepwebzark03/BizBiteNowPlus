import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import DesktopSidebar from "./DesktopSidebar";
import CustomerHeader from "./CustomerHeader";
import BottomNavigation from "./BottomNavigation";
import FloatingCartButton from "./FloatingCartButton";

import { useCart } from "../../../context/CartContext";
import { logoutCustomer } from "../../../api/customer/authApi";

const CustomerLayout = () => {
  const { totalItems, totalPrice } = useCart();

  const location = useLocation();
  const navigate = useNavigate();

  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const handleLogout = async () => {
    await logoutCustomer();
    navigate("/", { replace: true });
  };

  const hideFloatingCart = ["/customer/cart", "/customer/checkout"].includes(
    location.pathname,
  );

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-100 dark:bg-[#1E2021] transition-colors duration-300">
      {/* Sidebar */}
      <DesktopSidebar
        expanded={sidebarExpanded}
        setExpanded={setSidebarExpanded}
        onLogout={handleLogout}
      />

      {/* Main */}
      <main
        className="min-h-screen transition-all duration-300 lg:mt-5"
        style={{
          paddingLeft:
            window.innerWidth >= 1024
              ? sidebarExpanded
                ? "17rem"
                : "8rem"
              : "0rem",
        }}>
        {location.pathname === "/customer" && (
          <CustomerHeader
            sidebarExpanded={sidebarExpanded}
            isDesktop={isDesktop}
          />
        )}

        <div
          className={`w-full ${
            location.pathname === "/customer" ? "pt-22" : "pt-0"
          }`}>
          <Outlet />
        </div>
      </main>

      {!hideFloatingCart && (
        <FloatingCartButton totalItems={totalItems} totalPrice={totalPrice} />
      )}

      <BottomNavigation />
    </div>
  );
};

export default CustomerLayout;
