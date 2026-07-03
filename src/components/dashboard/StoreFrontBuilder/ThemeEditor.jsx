import { Palette } from "lucide-react";

const ThemeEditor = ({ data = {}, updateStoreData }) => {
  const handleChange = (field, value) => {
    updateStoreData("theme", {
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <div className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-[#16522D]" />

          <h3 className="text-lg font-semibold">
            Theme Settings
          </h3>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          Customize the overall appearance of your storefront.
        </p>
      </div>

      {/* Primary Color */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Primary Color
        </label>

        <input
          type="color"
          value={data.primaryColor || "#16522D"}
          onChange={(e) =>
            handleChange("primaryColor", e.target.value)
          }
          className="h-12 w-full cursor-pointer rounded-lg border"
        />
      </div>

      {/* Accent Color */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Accent Color
        </label>

        <input
          type="color"
          value={data.accentColor || "#FFC700"}
          onChange={(e) =>
            handleChange("accentColor", e.target.value)
          }
          className="h-12 w-full cursor-pointer rounded-lg border"
        />
      </div>

      {/* Background */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Background Color
        </label>

        <input
          type="color"
          value={data.backgroundColor || "#FFFFFF"}
          onChange={(e) =>
            handleChange("backgroundColor", e.target.value)
          }
          className="h-12 w-full cursor-pointer rounded-lg border"
        />
      </div>

      {/* Radius */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Card Radius
        </label>

        <input
          type="range"
          min="0"
          max="30"
          value={data.radius ?? 16}
          onChange={(e) =>
            handleChange("radius", Number(e.target.value))
          }
          className="w-full"
        />

        <p className="mt-2 text-sm text-gray-500">
          {data.radius ?? 16}px
        </p>
      </div>
    </div>
  );
};

export default ThemeEditor;