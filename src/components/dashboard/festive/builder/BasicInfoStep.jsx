import { useEffect, useState } from "react";
import { ImagePlus } from "lucide-react";
const FESTIVALS = [
  "Diwali",
  "Holi",
  "Eid",
  "Christmas",
  "Navratri",
  "Raksha Bandhan",
  "Ganesh Chaturthi",
  "Durga Puja",
  "New Year",
  "Other",
];

const THEMES = [
  "Traditional",
  "Modern",
  "Premium",
  "Family Feast",
  "Street Food",
  "Sweets Special",
];

export default function BasicInfoStep({
  data = {},
  onChange,
}) {
  const [preview, setPreview] = useState("");

useEffect(() => {
  if (data.banner instanceof File) {
    const url = URL.createObjectURL(data.banner);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }

  if (typeof data.banner === "string") {
    setPreview(data.banner);
  }
}, [data.banner]);
  const updateField = (field, value) => {
    onChange?.({
      ...data,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Basic Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Enter the basic details for your festive menu.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Menu Name */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Menu Name
          </label>

          <input
            maxLength={60}
            type="text"
            value={data.name || ""}
            onChange={(e) =>
              updateField("name", e.target.value)
            }
            placeholder="Diwali Special Menu"
            className="h-12 w-full rounded-xl border border-slate-200 bg-transparent px-4 outline-none transition focus:border-[#1A4D2E] focus:ring-4 focus:ring-[#1A4D2E]/10 dark:border-slate-700"
          />
          <p className="mt-1 text-xs text-slate-500 text-right">
            {(data.name || "").length}/60
          </p>
        </div>

        {/* Festival */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Festival
          </label>

          <select
            value={data.festival || ""}
            onChange={(e) =>
              updateField("festival", e.target.value)
            }
            className="h-12 w-full rounded-xl border border-slate-200 bg-transparent px-4 outline-none transition focus:border-[#1A4D2E] focus:ring-4 focus:ring-[#1A4D2E]/10 dark:border-slate-700"
          >
            <option value="">
              Select Festival
            </option>

            {FESTIVALS.map((festival) => (
              <option
                key={festival}
                value={festival}
              >
                {festival}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Theme */}

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Theme
        </label>

        <select
          value={data.theme || ""}
          onChange={(e) =>
            updateField("theme", e.target.value)
          }
          className="h-12 w-full rounded-xl border border-slate-200 bg-transparent px-4 outline-none transition focus:border-[#1A4D2E] focus:ring-4 focus:ring-[#1A4D2E]/10 dark:border-slate-700"
        >
          <option value="">
            Select Theme
          </option>

          {THEMES.map((theme) => (
            <option
              key={theme}
              value={theme}
            >
              {theme}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Description
        </label>

        <textarea
          rows={5}
          maxLength={300}
          value={data.description || ""}
          onChange={(e) =>
            updateField("description", e.target.value)
          }
          placeholder="Describe your festive menu..."
          className="w-full rounded-xl border border-slate-200 bg-transparent p-4 outline-none transition focus:border-[#1A4D2E] focus:ring-4 focus:ring-[#1A4D2E]/10 dark:border-slate-700"
        />
        <p className="mt-2 text-xs text-slate-500 text-right">
          {(data.description || "").length}/300
        </p>
      </div>

      {/* Banner */}

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Festival Banner
        </label>

        <label
          className="
            flex
            cursor-pointer
            flex-col
            items-center
            justify-center
            rounded-2xl
            border-2
            border-dashed
            border-slate-300
            p-10
            transition-all
            hover:border-[#1A4D2E]
            hover:bg-[#1A4D2E]/5
            dark:border-slate-700
          "
        >
          <ImagePlus
            size={42}
            className="text-[#1A4D2E]"
          />

          <h3 className="mt-4 font-semibold">
            Upload Festival Banner
          </h3>

          <p className="mt-2 text-center text-sm text-slate-500">
            JPG, PNG or WEBP
            <br />
            Recommended 1600 × 600
          </p>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) =>
              updateField(
                "banner",
                e.target.files?.[0] || null
              )
            }
          />
        </label>

        {preview && (
          <div className="mt-5">
            <img
              src={preview}
              alt="Festival Banner Preview"
              className="h-48 w-full rounded-2xl object-cover border"
            />

            <p className="mt-2 text-sm text-emerald-600 font-medium">
              Banner uploaded successfully
            </p>
          </div>
        )}
      </div>
    </div>
  );
}