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
        hidden
        lg:flex

        sticky
        top-5

        h-[calc(100vh-40px)]
        w-24
        shrink-0

        flex-col
        items-center

        rounded-[30px]

        border
        border-slate-200

        bg-white/90
        backdrop-blur-xl

        shadow-xl
      "
    >
      {/* Logo */}

      <div className="pt-5 pb-8">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-2xl

            font-bold
            text-lg
            text-white

            shadow-lg
          "
          style={{
            background: "var(--primary)",
          }}
        >
          {store.initials || "BB"}
        </div>
      </div>

      {/* Navigation */}

      <nav className="flex flex-1 flex-col gap-4">
        {navItems.map(({ icon: Icon, path, label }) => (
          <NavLink
            key={path}
            to={path}
            title={label}
          >
            {({ isActive }) => (
              <div
                className={`
                  relative

                  flex
                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-2xl

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "text-white shadow-lg"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }
                `}
                style={{
                  background: isActive
                    ? "var(--primary)"
                    : "transparent",
                }}
              >
                <Icon size={22} />

                {isActive && (
                  <span
                    className="
                      absolute
                      -right-3

                      h-8
                      w-1

                      rounded-full
                    "
                    style={{
                      background: "var(--primary)",
                    }}
                  />
                )}
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Cart */}

      <div className="pb-5">
        <button
          className="
            relative

            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            bg-slate-100

            transition

            hover:bg-slate-200
          "
        >
          <ShoppingCart size={22} />

          {cartCount > 0 && (
            <span
              className="
                absolute
                -right-1
                -top-1

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
                background: "var(--primary)",
              }}
            >
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default DesktopSidebar;