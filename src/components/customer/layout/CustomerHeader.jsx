import { Search, Bell, User } from "lucide-react";

const CustomerHeader = ({
  store = {},
  customer = {},
  onSearch,
  onNotificationClick,
  onProfileClick,
}) => {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-200/70
        bg-white/90
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          items-center
          justify-between
          gap-4
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Store */}

        <div className="flex items-center gap-3 min-w-0">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-2xl
              text-sm
              font-bold
              text-white
              shadow-md
            "
            style={{
              background: "var(--primary)",
            }}
          >
            {store.initials || "BB"}
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-base font-semibold text-slate-900">
              {store.name || "Restaurant"}
            </h1>

            <p className="truncate text-xs text-slate-500">
              Powered by BizBiteNow
            </p>
          </div>
        </div>

        {/* Search */}

        <div className="hidden flex-1 px-8 md:block">
          <div
            className="
              flex
              h-11
              items-center
              rounded-full
              border
              border-slate-200
              bg-slate-50
              px-4
            "
          >
            <Search
              size={18}
              className="mr-3 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search menu..."
              onChange={(e) => onSearch?.(e.target.value)}
              className="
                w-full
                bg-transparent
                text-sm
                outline-none
                placeholder:text-slate-400
              "
            />
          </div>
        </div>

        {/* Actions */}

        <div className="flex items-center gap-2">

          {/* Mobile Search */}

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              transition
              hover:bg-slate-100
              md:hidden
            "
          >
            <Search size={20} />
          </button>

          {/* Notifications */}

          <button
            onClick={onNotificationClick}
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              transition
              hover:bg-slate-100
            "
          >
            <Bell size={20} />

            <span
              className="
                absolute
                right-3
                top-3
                h-2
                w-2
                rounded-full
              "
              style={{
                background: "var(--primary)",
              }}
            />
          </button>

          {/* Customer */}

          <button
            onClick={onProfileClick}
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              p-1
              transition
              hover:bg-slate-100
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-2xl
                bg-slate-100
              "
            >
              <User size={18} />
            </div>

            <div className="hidden text-left lg:block">
              <p className="text-sm font-semibold text-slate-900">
                {customer.name || "Guest"}
              </p>

              <p className="text-xs text-slate-500">
                Customer
              </p>
            </div>
          </button>

        </div>
      </div>
    </header>
  );
};

export default CustomerHeader;