import { NavLink } from "react-router-dom";

import {
  House,
  UtensilsCrossed,
  ReceiptText,
  Gift,
  User,
  ShoppingCart,
} from "lucide-react";


const navItems = [
  {
    label: "Home",
    path: "/customer",
    icon: House,
  },
  {
    label: "Menu",
    path: "/customer/menu",
    icon: UtensilsCrossed,
  },
  {
    label: "Orders",
    path: "/customer/orders",
    icon: ReceiptText,
  },
  {
    label: "Rewards",
    path: "/customer/rewards",
    icon: Gift,
  },
  {
    label: "Profile",
    path: "/customer/profile",
    icon: User,
  },
];


const DesktopSidebar = ({
  store = {},
  cartCount = 0,
}) => {

  return (

    <aside

  className="
    group

    hidden
    lg:flex
     peer
        fixed

        left-5
        top-5
        bottom-5

        z-50

        w-24

        hover:w-60

        overflow-hidden

        flex-col
        items-center

        rounded-[30px]

        border
        border-slate-200

        bg-white/90

        backdrop-blur-xl

        shadow-xl

        transition-all
        duration-300
        ease-in-out

      "
    >


      {/* Logo */}

      <div className="pt-5 pb-8">

        <div
          className="
            flex
            h-14
            w-14
            shrink-0

            items-center
            justify-center

            rounded-2xl

            text-lg
            font-black

            text-white

            shadow-lg
          "

          style={{
            background:
            "var(--primary)",
          }}
        >

          {store.initials || "BB"}

        </div>

      </div>





      {/* Navigation */}

      <nav
        className="
          flex
          flex-1

          w-full

          flex-col

          gap-4

          px-5
        "
      >

        {navItems.map(
          ({
            icon: Icon,
            path,
            label,
          }) => (

            <NavLink
              key={path}
              to={path}
              title={label}
              end={
                path === "/customer"
              }

              className="w-full"
            >

              {({isActive}) => (

                <div
                  className={`
                    relative

                    flex

                    h-14

                    w-full

                    items-center

                    gap-4

                    rounded-2xl

                    transition-all

                    duration-300

                    ${
                      isActive
                      ?
                      "text-white shadow-lg"
                      :
                      "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                    }
                  `}

                  style={{
                    background:
                    isActive
                    ?
                    "var(--primary)"
                    :
                    "transparent",
                  }}
                >

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0

                      items-center
                      justify-center
                    "
                  >

                    <Icon size={22}/>

                  </div>


                  {/* Label */}

<span
  className="
    whitespace-nowrap

    text-sm

    font-semibold

    opacity-0
    
    group-hover:opacity-100

    transition-all

    duration-300
  "
>
  {label}
</span>


                </div>

              )}

            </NavLink>

          )
        )}

      </nav>





      {/* Cart */}

     <div className="pb-5 px-5 w-full">

  <NavLink
    to="/customer/cart"
    className="block group"
  >

    <div
      className="
        relative

        flex

        h-14

        w-full

        items-center

        gap-4

        rounded-2xl

        bg-slate-100

        text-slate-700

        transition

        hover:bg-slate-200
      "
    >

      <div
        className="
          flex

          h-14

          w-14

          shrink-0

          items-center

          justify-center
        "
      >

        <ShoppingCart size={22}/>

      </div>


      <span
        className="
          whitespace-nowrap

          text-sm

          font-semibold

          opacity-0

          group-hover:opacity-100

          transition-all

          duration-300
        "
      >
        Cart
      </span>



      {cartCount > 0 && (

        <span
          className="
            absolute

            left-10

            top-0

            flex

            h-5

            w-5

            items-center

            justify-center

            rounded-full

            text-[10px]

            font-bold

            text-white
          "

          style={{
            background:
            "var(--primary)",
          }}
        >
          {
            cartCount > 99
            ? "99+"
            : cartCount
          }

        </span>

      )}


    </div>

  </NavLink>

</div>


    </aside>

  );

};


export default DesktopSidebar;