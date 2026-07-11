import { NavLink } from "react-router-dom";
import {
  House,
  UtensilsCrossed,
  ReceiptText,
  Gift,
  User,
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    icon: House,
    path: "/customer",
  },
  {
    label: "Menu",
    icon: UtensilsCrossed,
    path: "/customer/menu",
  },
  {
    label: "Orders",
    icon: ReceiptText,
    path: "/customer/orders",
  },
  {
    label: "Rewards",
    icon: Gift,
    path: "/customer/rewards",
  },
  {
    label: "Profile",
    icon: User,
    path: "/customer/profile",
  },
];

const BottomNavigation = () => {
  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50

        border-t
        border-slate-200/70

        bg-white/90
        backdrop-blur-xl

        lg:hidden
      "
    >
      <div
        className="
          flex
          items-center
          justify-around

          px-2
          pt-2
          pb-[calc(env(safe-area-inset-bottom)+10px)]
        "
      >
        {navItems.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `
                relative
                flex
                w-full
                flex-col
                items-center
                justify-center

                rounded-2xl

                py-2

                transition-all
                duration-300

                ${
                  isActive
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-900"
                }
              `
            }
            style={({ isActive }) => ({
              backgroundColor: isActive
                ? "var(--primary)"
                : "transparent",
            })}
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={21}
                  strokeWidth={2.2}
                />

                <span
                  className="
                    mt-1
                    text-[11px]
                    font-medium
                  "
                >
                  {label}
                </span>

                {isActive && (
                  <span
                    className="
                      absolute
                      -top-1

                      h-1.5
                      w-8

                      rounded-full
                      bg-white
                    "
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;