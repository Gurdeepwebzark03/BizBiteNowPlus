import { NavLink } from "react-router-dom";
import {
  House,
  UtensilsCrossed,
  ReceiptText,
  Gift,
  User,
  LogOut,
  ShoppingBag,
  Heart,
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
  label: "Favourite",
  path: "/customer/favorites",
  icon: Heart,
},
    {
    label: "Cart",
    path: "/customer/cart",
    icon: ShoppingBag,
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

const DesktopSidebar = ({ store = {}, onLogout, expanded, setExpanded }) => {
  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`
        hidden
        lg:flex

        fixed
        mt-0
        min-h-full
        z-50

        overflow-hidden

        flex-col
        items-center

        
        min-h-full
        border
        border-slate-200 dark:border-[#A9BDCF]/40

        bg-white/90 dark:bg-[#181A1B]

        backdrop-blur-xl

        

        transition-all
        duration-300
        ease-in-out

        ${expanded ? "w-60" : "w-24"}
      `}
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

            rounded-[14px]

            text-lg
            font-black
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

      <nav className="flex w-full flex-1 flex-col gap-4 px-5">
        {navItems.map(({ icon: Icon, path, label }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/customer"}
            className="w-full"
          >
            {({ isActive }) => (
          <div
            className={`
              group
              relative

              flex
              h-14
              w-full

              items-center
              gap-4

              rounded-[14px]

              transition-all
              duration-300

              ${
                isActive
                  ? "text-white shadow-lg"
                  : "text-green-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-yellow-600"
              }
            `}
                style={{
                  background: isActive ? "var(--primary)" : "transparent",
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
                  <Icon size={22} />
                </div>

<span
  className={`
    whitespace-nowrap
    transition-all
    duration-300
    ease-[cubic-bezier(.22,1,.36,1)]

    ${
      expanded
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-2"
    }

    ${
      isActive
        ? "text-white"
        : "group-hover:text-[#F4A300] group-hover:-translate-y-0.5"
    }
  `}
>
                  {label}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}

      <div className="w-full px-5 pb-5">
        <button
          onClick={onLogout}
          className="
            flex
            h-14
            w-full
            items-center
            gap-4

            rounded-2xl

            text-red-600

            transition

            hover:bg-red-50 dark:hover:bg-red-500/10
            hover:text-red-700
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
            <LogOut size={22} />
          </div>

          <span
            className={`
              whitespace-nowrap
              text-sm
              font-semibold

              transition-all
              duration-300

              ${expanded ? "opacity-100" : "opacity-0"}
            `}
          >
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
