import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const DashboardHero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [storeActive, setStoreActive] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();

    if (hour < 12) return "Good Morning ☀️";
    if (hour < 17) return "Good Afternoon 🌤️";
    if (hour < 21) return "Good Evening 🌇";

    return "Good Night 🌙";
  };

  const greeting = getGreeting();

  const time = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const today = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    const fetchStoreStatus = async () => {
      try {
        // const res = await API.get("/seller/store/status");
        // setStoreActive(res.data.active);

        setStoreActive(true);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStoreStatus();
  }, []);

  const handleToggle = async () => {
    const newStatus = !storeActive;

    setStoreActive(newStatus);
    setLoading(true);

    try {
      // await API.patch("/seller/store/status", {
      //   active: newStatus,
      // });
    } catch (err) {
      setStoreActive(!newStatus);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1A4D2E] via-[#205C38] to-[#2D6A4F] px-6 py-4 text-white shadow-xl">
      {/* Background */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 right-16 h-24 w-24 rounded-full bg-[#ffc700]/20" />

      <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="max-w-xl text-left">

          <div className="mb-2 flex flex-wrap items-center gap-3">

            <h1 className="text-xl font-bold md:text-2xl">
              {greeting}
            </h1>

          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">

            <span className="text-xs text-green-100">
              {today}
            </span>

            <span className="h-1 w-1 rounded-full bg-green-200" />

            <span className="text-xs font-semibold text-[#FFE082]">
              {time}
            </span>

          </div>

          </div>

          <h2 className="text-base font-semibold md:text-lg">
            Welcome back, Seller
          </h2>

          <p className="mt-1 max-w-lg text-xs leading-5 text-green-100 md:text-sm">
            Manage products, orders and customers from one place.
          </p>

        </div>

        {/* Right */}

        <div className="flex flex-col gap-3">

          <div className="flex min-w-[250px] items-center justify-between rounded-xl border border-white/20 bg-white/15 px-4 py-3 backdrop-blur">

            <div className="flex items-center gap-3">

              <Sparkles
                size={18}
                className={
                  storeActive
                    ? "text-[#ffc700]"
                    : "text-gray-300"
                }
              />

              <div>

                <p className="text-[11px] text-green-100">
                  Store Status
                </p>

                <h3 className="text-sm font-semibold">
                  {storeActive ? "Active" : "Offline"}
                </h3>

              </div>

            </div>

            <button
              type="button"
              disabled={loading}
              onClick={handleToggle}
              className={`relative h-7 w-14 rounded-full transition-all duration-300 ${
                storeActive
                  ? "bg-[#22C55E]"
                  : "bg-gray-400"
              } ${
                loading
                  ? "cursor-not-allowed opacity-60"
                  : ""
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                  storeActive
                    ? "left-8"
                    : "left-1"
                }`}
              />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DashboardHero;