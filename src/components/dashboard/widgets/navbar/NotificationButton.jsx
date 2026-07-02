import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import NotificationPanel from "./NotificationPanel";

import { notifications } from "./notificationData";

export default function NotificationButton() {
  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          relative
          rounded-xl
          p-2
          transition
          hover:bg-slate-100
        "
      >
        <Bell size={22} />

        {unreadCount > 0 && (
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
              bg-red-500
              text-xs
              font-semibold
              text-white
            "
          >
            {unreadCount}
          </span>
        )}
      </button>

      {open && <NotificationPanel />}
    </div>
  );
}