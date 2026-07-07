import {
  PartyPopper,
  CalendarDays,
  Clock3,
  ArrowRight,
} from "lucide-react";

const FestiveBanner = ({
  menu,
  onViewMenu,
}) => {
  if (!menu) return null;

  const endDate = new Date(menu.endsOn);

  const now = new Date();

  const diff = endDate - now;

  const days = Math.max(
    0,
    Math.floor(diff / (1000 * 60 * 60 * 24))
  );

  const hours = Math.max(
    0,
    Math.floor(
      (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    )
  );

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1A4D2E] via-[#205C38] to-[#2E7D50] p-6 text-white shadow-lg">

      {/* Decorations */}

      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[#F4A300]/20 blur-2xl" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="max-w-3xl">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2">

            <PartyPopper
              size={18}
              className="text-[#F4A300]"
            />

            <span className="text-sm font-semibold">
              Festive Menu LIVE
            </span>

          </div>

          <h2 className="text-3xl font-bold">
            {menu.name}
          </h2>

          <p className="mt-3 max-w-2xl text-green-100 leading-7">
            Customers are currently viewing your festive
            menu instead of your regular menu.
            Once the schedule ends, the regular menu
            will automatically become active again.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">

            <div className="flex items-center gap-2">

              <CalendarDays size={18} />

              <span>
                Ends on{" "}
                {new Date(
                  menu.endsOn
                ).toLocaleDateString("en-IN")}
              </span>

            </div>

            <div className="flex items-center gap-2">

              <Clock3 size={18} />

              <span>
                {days} Days {hours} Hours Remaining
              </span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur lg:min-w-[260px]">

          <div>

            <p className="text-sm text-green-100">
              Auto Revert
            </p>

            <h3 className="mt-1 text-2xl font-bold">
              Enabled
            </h3>

          </div>

          <div className="h-px bg-white/20" />

          <div>

            <p className="text-sm text-green-100">
              Next Menu
            </p>

            <h3 className="mt-1 font-semibold">
              Regular Menu
            </h3>

          </div>

          <button
            onClick={() => onViewMenu?.(menu)}
            className="
              mt-2
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#F4A300]
              px-4
              py-3
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-[#e59a00]
            "
          >
            View Active Menu

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </section>
  );
};

export default FestiveBanner;