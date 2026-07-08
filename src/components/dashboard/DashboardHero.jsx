import React, { useEffect, useMemo, useState } from "react";
import {
  Store,
  CalendarDays,
  Clock3,
  Sun,
  CloudSun,
  MoonStar,
} from "lucide-react";

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

  const greeting = useMemo(() => {
    const hour = currentTime.getHours();

    if (hour < 12)
      return {
        title: "Good Morning",
        subtitle:
          "Hope today's service brings another day of happy customers.",
        Icon: Sun,
      };

    if (hour < 17)
      return {
        title: "Good Afternoon",
        subtitle:
          "Lunch hours are here. Wishing you a successful service.",
        Icon: CloudSun,
      };

    return {
      title: "Good Evening",
      subtitle:
        "Dinner service is about to begin. Make every order memorable.",
      Icon: MoonStar,
    };
  }, [currentTime]);

  const today = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const liveTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const handleToggle = async () => {
    const next = !storeActive;

    setStoreActive(next);
    setLoading(true);

    try {
      // await API.patch("/seller/store/status",{active:next});
    } catch (err) {
      setStoreActive(!next);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const GreetingIcon = greeting.Icon;

  return (
    <section className="relative overflow-hidden  rounded-[30px] border border-[#FBFBFB] bg-[#FBFBFB] shadow-[0_18px_45px_rgba(0,0,0,.06)]">

      {/* background decoration */}

      <div className="absolute left-0 top-0 h-full w-[5px] bg-[#C89B3C]" />

      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-[#183A2A]/5" />

      <div className="absolute -right-2 top-0 h-32 w-32 rounded-full border border-[#183A2A]/5" />

      <div className="relative flex flex-col gap-6 px-8 py-5 xl:flex-row xl:items-center xl:justify-between">

        {/* LEFT */}

        <div className="max-w-xl ">

          <div className="flex items-center gap-1">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F2EC]">

              <Store
                size={28}
                className="text-[#183A2A]"
              />

            </div>

            <div>

              <h2
                className="text-3xl font-bold text-[#183A2A]"
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                BizBiteNow+
              </h2>

              <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#8C8375]">

                Restaurant Seller

              </p>

            </div>

          </div>

          <div className="mt-5 flex items-center gap-3">



            <h1 className="text-4xl font-bold text-[#2C2C2C]">

              {greeting.title}

            </h1>

          </div>

          <h3 className="mt-2 text-3xl font-semibold text-[#183A2A]">

            Welcome back, Seller.

          </h3>

          <p className="mt-5 max-w-lg leading-8 text-[#6B7280]">

            {greeting.subtitle}

          </p>

        </div>
                {/* CENTER */}

        <div className="flex flex-1 justify-center">

          <div className="grid w-full max-w-md grid-cols-2 gap-5">

            {/* DATE */}

            <div className="group rounded-[26px] border border-[#F4DADB] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-5 w-5 items-center justify-center rounded-2xl bg-[#F5F2EC]">

                <CalendarDays
                  size={20}
                  className="text-[#C89B3C]"
                />

              </div>

              <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-[#9C9488]">

                Today

              </p>

              <h3 className="mt-3 text-lg font-semibold leading-7 text-[#2C2C2C]">

                {today}

              </h3>

            </div>

            {/* TIME */}

            <div className="group rounded-[26px] border border-[#E9E4DB] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-5 w-5 items-center justify-center rounded-2xl bg-[#F5F2EC]">

                <Clock3
                  size={20}
                  className="text-[#183A2A]"
                />

              </div>

              <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-[#9C9488]">

                Live Time

              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#183A2A]">

                {liveTime}

              </h3>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="w-full xl:w-[340px]">

          <div className="overflow-hidden rounded-[28px] border border-[#E9E4DB] bg-[#183A2A] shadow-[0_20px_45px_rgba(24,58,42,.18)]">

            <div className="h-1 bg-[#C89B3C]" />

            <div className="relative p-8">

              <div className="absolute -right-8 -top-8 opacity-[0.05]">

                <Store
                  size={140}
                  strokeWidth={1}
                />

              </div>

              <div className="relative flex items-start justify-between">

                <div>

                  <p className="text-[11px] uppercase tracking-[0.35em] text-[#D7C49A]">

                    Restaurant Status

                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-white">

                    {storeActive ? "OPEN" : "CLOSED"}

                  </h2>

                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${
                    storeActive
                      ? "bg-green-500/15"
                      : "bg-white/10"
                  }`}
                >

                  <div
                    className={`h-4 w-4 rounded-full ${
                      storeActive
                        ? "bg-green-400"
                        : "bg-slate-400"
                    }`}
                  />

                </div>

              </div>

              <p className="mt-8 leading-7 text-white/70">

                {storeActive
                  ? "Your restaurant is currently accepting online orders."
                  : "Your restaurant is temporarily unavailable for online ordering."}

              </p>
                            <div className="mt-8 rounded-2xl bg-white/5 p-5 backdrop-blur-sm">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-medium text-white">

                      Online Ordering

                    </p>

                    <p className="mt-1 text-xs text-white/60">

                      Enable or pause customer orders

                    </p>

                  </div>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={handleToggle}
                    className={`relative h-9 w-20 rounded-full transition-all duration-300 ${
                      storeActive
                        ? "bg-[#C89B3C]"
                        : "bg-white/20"
                    } ${
                      loading
                        ? "cursor-not-allowed opacity-60"
                        : ""
                    }`}
                  >

                    <span
                      className={`absolute top-1 h-7 w-7 rounded-full bg-white shadow-lg transition-all duration-300 ${
                        storeActive
                          ? "left-7"
                          : "left-1"
                      }`}
                    />

                  </button>

                </div>

              </div>



              <div className="mt-8 h-px bg-white/10" />

              <div className="mt-6 flex items-center justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">

                    Seller Dashboard

                  </p>

                  <p className="mt-2 text-sm text-white/70">

                    Crafted for premium restaurant management.

                  </p>

                </div>

                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">

                  <span className="text-xs tracking-[0.2em] text-[#D7C49A]">

                    BIZBITENOW+

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
              </div>

    </section>
  );
};

export default DashboardHero;