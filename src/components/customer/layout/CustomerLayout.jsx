import { Outlet } from "react-router-dom";

import DesktopSidebar from "./DesktopSidebar";
import CustomerHeader from "./CustomerHeader";
import BottomNavigation from "./BottomNavigation";
import FloatingCartButton from "./FloatingCartButton";
import PageTransition from "./PageTransition";


const CustomerLayout = () => {

  return (

    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-slate-100
      "
    >

      {/* Sidebar */}

      <DesktopSidebar />


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

          <PageTransition>

            <Outlet />

          </PageTransition>

        </div>


      </main>



      <FloatingCartButton />

      <BottomNavigation />

    </div>

  );

};


export default CustomerLayout;