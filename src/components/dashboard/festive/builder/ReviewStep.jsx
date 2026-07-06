import {
  CalendarDays,
  Package,
  Palette,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function ReviewStep({
  basicInfo = {},
  products = [],
  appearance = {},
  schedule = {},
}) {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h2 className="text-xl font-semibold">
          Review & Publish
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Review every section before publishing your festive menu.
        </p>
      </div>

      {/* Basic Information */}

      <div className="rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-700">

        <div className="border-b px-6 py-4 flex items-center gap-2">
          <Package className="text-orange-500" size={18} />
          <h3 className="font-semibold">
            Basic Information
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">

          <div>
            <p className="text-xs uppercase text-slate-500">
              Menu Name
            </p>

            <p className="font-medium mt-1">
              {basicInfo.name || "--"}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-500">
              Festival
            </p>

            <p className="font-medium mt-1">
              {basicInfo.festival || "--"}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-500">
              Theme
            </p>

            <p className="font-medium mt-1">
              {basicInfo.theme || "--"}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-500">
              Status
            </p>

            <span className="inline-flex mt-2 rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-medium">
              Ready
            </span>
          </div>

          <div className="md:col-span-2">

            <p className="text-xs uppercase text-slate-500">
              Description
            </p>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {basicInfo.description ||
                "No description added."}
            </p>

          </div>

        </div>

      </div>

      {/* Products */}

      <div className="rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-700">

        <div className="border-b px-6 py-4 flex items-center gap-2">

          <Package
            className="text-indigo-500"
            size={18}
          />

          <h3 className="font-semibold">
            Selected Products
          </h3>

        </div>

        <div className="p-6">

          <div className="flex items-center justify-between mb-5">

            <p className="font-medium">
              Total Products
            </p>

            <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm">
              {products.length}
            </span>

          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto">

            {products.length === 0 ? (
              <div className="rounded-lg border border-dashed p-8 text-center text-slate-500">
                No products selected.
              </div>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg border p-4 flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-medium">
                      {product.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {product.category}
                    </p>
                  </div>

                  <div className="text-right">

                    <p className="font-semibold">
                      ₹
                      {product.festivePrice ||
                        product.price}
                    </p>

                    {product.festivePrice && (
                      <p className="text-xs line-through text-slate-400">
                        ₹{product.price}
                      </p>
                    )}

                  </div>

                </div>
              ))
            )}

          </div>

        </div>

      </div>
            {/* Appearance */}

      <div className="rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-700">

        <div className="border-b px-6 py-4 flex items-center gap-2">
          <Palette className="text-pink-500" size={18} />
          <h3 className="font-semibold">
            Appearance
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">

          <div>
            <p className="text-xs uppercase text-slate-500">
              Theme
            </p>

            <p className="font-medium mt-1">
              {appearance.theme || "--"}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-500">
              Primary Color
            </p>

            <div className="flex items-center gap-3 mt-2">
              <div
                className="w-6 h-6 rounded-full border"
                style={{
                  background:
                    appearance.primaryColor ||
                    "#f97316",
                }}
              />

              <span>
                {appearance.primaryColor ||
                  "#f97316"}
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-500">
              Banner
            </p>

            <p className="mt-1 font-medium">
              {appearance.banner
                ? "Uploaded"
                : "Not Uploaded"}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-500">
              Decorative Effects
            </p>

            <p className="mt-1 font-medium">
              {appearance.effects?.length || 0} Enabled
            </p>
          </div>

        </div>

      </div>

      {/* Schedule */}

      <div className="rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-700">

        <div className="border-b px-6 py-4 flex items-center gap-2">

          <CalendarDays
            className="text-green-500"
            size={18}
          />

          <h3 className="font-semibold">
            Schedule
          </h3>

        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">

          <div>

            <p className="text-xs uppercase text-slate-500">
              Publish
            </p>

            <p className="font-medium mt-1">
              {schedule.startDate || "--"}{" "}
              {schedule.startTime || "--"}
            </p>

          </div>

          <div>

            <p className="text-xs uppercase text-slate-500">
              End
            </p>

            <p className="font-medium mt-1">
              {schedule.endDate || "--"}{" "}
              {schedule.endTime || "--"}
            </p>

          </div>

          <div>

            <p className="text-xs uppercase text-slate-500">
              Timezone
            </p>

            <p className="font-medium mt-1">
              {schedule.timezone || "--"}
            </p>

          </div>

          <div>

            <p className="text-xs uppercase text-slate-500">
              Auto Publish
            </p>

            <p className="font-medium mt-1">
              {schedule.autoPublish
                ? "Enabled"
                : "Disabled"}
            </p>

          </div>

        </div>

      </div>

      {/* Validation */}

      <div className="rounded-xl border bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800 p-6">

        <div className="flex items-center gap-2 mb-5">

          <CheckCircle2
            className="text-emerald-600"
            size={20}
          />

          <h3 className="font-semibold">
            Ready To Publish
          </h3>

        </div>

        <div className="space-y-4">

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-emerald-600"
            />

            <span>
              Basic information completed
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-emerald-600"
            />

            <span>
              Products selected
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-emerald-600"
            />

            <span>
              Appearance configured
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-emerald-600"
            />

            <span>
              Schedule configured
            </span>
          </div>

        </div>

      </div>

      {/* Final Card */}

      <div className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white p-8">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-2xl font-bold">
              Your Festive Menu is Ready 🎉
            </h3>

            <p className="mt-2 text-orange-100">
              Review everything once before publishing.
            </p>

          </div>

          <Clock3 size={48} />

        </div>

      </div>

    </div>
  );
}