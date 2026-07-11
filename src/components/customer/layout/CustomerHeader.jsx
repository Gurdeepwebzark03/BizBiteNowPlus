import { Bell, User, ShoppingBag, Gift } from "lucide-react";

import { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

const CustomerHeader = ({ store = {} }) => {
  const navigate = useNavigate();

  const [notificationOpen, setNotificationOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    {
      id: 1,
      icon: ShoppingBag,
      title: "Order Delivered",
      message: "Your order has been delivered.",
      time: "10 min ago",
    },
    {
      id: 2,
      icon: Gift,
      title: "Reward Earned",
      message: "You earned 50 loyalty points.",
      time: "2 hours ago",
    },
  ];

  return (
    <header
      className="
        fixed
        top-5
        left-0
        right-0
        z-50
        flex
        justify-center
        px-4
      "
    >
      <div
        ref={wrapperRef}
        className="
          relative
          flex
          h-16
          w-full
          max-w-[650px]
          items-center
          justify-between
          rounded-[28px]
          border
          border-slate-200
          bg-white/90
          px-5
          shadow-2xl
          backdrop-blur-xl
        "
      >
        {/* Store */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              font-black
              text-white
            "
            style={{
              background: "var(--primary)",
            }}
          >
            {store.initials || "BB"}
          </div>

          <div className="hidden sm:block">
            <p
              className="
                font-bold
                text-slate-900
              "
            >
              {store.name || "Restaurant"}
            </p>
          </div>
        </div>

        {/* Actions */}

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          {/* Notification */}

          <button
            onClick={() => setNotificationOpen(!notificationOpen)}
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

          {/* Notification Panel */}

          {notificationOpen && (
            <div
              className="
                absolute
                right-0
                top-16
                w-80
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-xl
              "
            >
              <h3
                className="
                  mb-3
                  font-bold
                  text-slate-900
                "
              >
                Notifications
              </h3>

              <div className="space-y-2">
                {notifications.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      className="
                        flex
                        gap-3
                        rounded-xl
                        p-3
                        transition
                        hover:bg-slate-50
                      "
                    >
                      <Icon size={20} />

                      <div>
                        <p className="font-semibold text-slate-900">
                          {item.title}
                        </p>

                        <p className="text-sm text-slate-500">{item.message}</p>

                        <p className="text-xs text-slate-400">{item.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Profile */}

          <button
            onClick={() => navigate("/customer/profile")}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              bg-slate-100
              transition
              hover:bg-slate-200
            "
          >
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default CustomerHeader;
