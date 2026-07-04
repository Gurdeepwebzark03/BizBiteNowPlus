import { ImageIcon } from "lucide-react";

const BannerEditor = ({ data = {}, updateStoreData }) => {
  const handleChange = (field, value) => {
    updateStoreData("banner", {
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5 text-[#16522D]" />

          <h3 className="text-lg font-semibold text-gray-900">
            Banner
          </h3>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          Customize the hero section of your storefront.
        </p>
      </div>

      {/* Banner Image */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Banner Image
        </label>

        <div className="flex h-40 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
          <div className="text-center">
            <ImageIcon className="mx-auto mb-3 h-10 w-10 text-gray-400" />

            <p className="text-sm text-gray-600">
              Upload banner image
            </p>

            <button
              type="button"
              className="mt-3 rounded-lg bg-[#16522D] px-4 py-2 text-sm font-medium text-white hover:bg-[#134526]"
            >
              Choose Image
            </button>
          </div>
        </div>
      </div>

      {/* Heading */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Heading
        </label>

        <input
          type="text"
          value={data.heading || ""}
          onChange={(e) =>
            handleChange("heading", e.target.value)
          }
          placeholder="Welcome to our store"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Subtitle */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Subtitle
        </label>

        <textarea
          rows={3}
          value={data.subtitle || ""}
          onChange={(e) =>
            handleChange("subtitle", e.target.value)
          }
          placeholder="Describe your store..."
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Button Text */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Button Text
        </label>

        <input
          type="text"
          value={data.buttonText || ""}
          onChange={(e) =>
            handleChange("buttonText", e.target.value)
          }
          placeholder="Order Now"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Banner Height */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Banner Height
        </label>

        <input
          type="range"
          min="200"
          max="500"
          step="10"
          value={data.height || 320}
          onChange={(e) =>
            handleChange("height", Number(e.target.value))
          }
          className="w-full"
        />

        <p className="mt-2 text-sm text-gray-500">
          {data.height || 320}px
        </p>
      </div>

      {/* Overlay */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Overlay Opacity
        </label>

        <input
          type="range"
          min="0"
          max="100"
          value={data.overlay || 30}
          onChange={(e) =>
            handleChange("overlay", Number(e.target.value))
          }
          className="w-full"
        />

        <p className="mt-2 text-sm text-gray-500">
          {data.overlay || 30}%
        </p>
      </div>
    </div>
  );
};

export default BannerEditor;