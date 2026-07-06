import { Gift, Plus, Sparkles } from "lucide-react";

export default function FestiveEmptyState({
  search = "",
  onCreate,
}) {
  const isSearching = search.trim().length > 0;

  return (
    <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900">

      <div className="flex flex-col items-center justify-center px-8 py-20 text-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/10">
          <Gift
            size={44}
            className="text-orange-500"
          />
        </div>

        <h2 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">
          {isSearching
            ? "No Matching Festive Menus"
            : "No Festive Menus Yet"}
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">

          {isSearching
            ? "We couldn't find any festive menu matching your search or filters. Try changing the keywords or filters."
            : "Create beautiful seasonal menus for festivals like Diwali, Christmas, Eid, New Year, Valentine's Day and more. Schedule them to go live automatically and delight your customers."}

        </p>

        {!isSearching && (

          <div className="mt-10 grid w-full max-w-3xl gap-4 md:grid-cols-3">

            <div className="rounded-xl border p-5 text-left">
              <Sparkles
                size={22}
                className="mb-3 text-orange-500"
              />

              <h4 className="font-semibold">
                Beautiful Themes
              </h4>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Customize festive branding, banners,
                colors and product highlights.
              </p>
            </div>

            <div className="rounded-xl border p-5 text-left">
              <Gift
                size={22}
                className="mb-3 text-green-500"
              />

              <h4 className="font-semibold">
                Festival Specials
              </h4>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Offer limited-time festive combos,
                discounts and exclusive products.
              </p>
            </div>

            <div className="rounded-xl border p-5 text-left">
              <Plus
                size={22}
                className="mb-3 text-blue-500"
              />

              <h4 className="font-semibold">
                Auto Schedule
              </h4>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Publish and revert menus
                automatically without manual work.
              </p>
            </div>

          </div>

        )}

        <button
          onClick={onCreate}
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          <Plus size={18} />
          Create Festive Menu
        </button>

      </div>

    </div>
  );
}