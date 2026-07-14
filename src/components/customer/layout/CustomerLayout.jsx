import {
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

import DesktopSidebar from "./DesktopSidebar";
import CustomerHeader from "./CustomerHeader";
import BottomNavigation from "./BottomNavigation";
import FloatingCartButton from "./FloatingCartButton";
import { useCart } from "../../../context/CartContext";
import { logoutCustomer } from "../../../api/customer/authApi";


const CustomerLayout = () => {
const {
  totalItems,
  totalPrice,
} = useCart();
const location = useLocation();
const navigate = useNavigate();

const handleLogout = async () => {
  await logoutCustomer();
  navigate("/", { replace: true });
};

const hideFloatingCart = [
  "/customer/cart",
  "/customer/checkout",
].includes(location.pathname);
  return (

    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-slate-100
      "
    >

      {/* Sidebar */}

      <DesktopSidebar onLogout={handleLogout} />


      {/* Main */}

      <main
        className="
          min-h-screen

          w-full

          lg:pl-20

          transition-all

          duration-300

          peer-hover:lg:pl-72
        "
      >

        <CustomerHeader />


        <div
          className="
            pt-24

            px-3

            sm:px-5

            lg:px-8

            w-full
          "
        >



            <Outlet />

          

        </div>


      </main>



{!hideFloatingCart && (
  <FloatingCartButton
    totalItems={totalItems}
    totalPrice={totalPrice}
  />
)}
      <BottomNavigation />

    </div>

  );

};


export default CustomerLayout;