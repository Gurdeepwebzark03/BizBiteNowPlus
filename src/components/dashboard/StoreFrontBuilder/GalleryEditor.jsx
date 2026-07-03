import { Images, ImagePlus, Trash2 } from "lucide-react";

const GalleryEditor = ({ data = [], updateStoreData }) => {
  // Temporary gallery data
  // Replace with API response later
  const gallery = data.length
    ? data
    : [
        {
          id: 1,
          image: "",
          title: "Restaurant Front",
        },
        {
          id: 2,
          image: "",
          title: "Dining Area",
        },
      ];

  const removeImage = (id) => {
    updateStoreData(
      "gallery",
      gallery.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Images className="h-5 w-5 text-[#16522D]" />

          <h3 className="text-lg font-semibold text-gray-900">
            Gallery
          </h3>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          Showcase your restaurant with beautiful images.
        </p>
      </div>

      {/* Upload Placeholder */}
      <button
        type="button"
        className="flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 transition hover:border-[#16522D]"
      >
        <ImagePlus className="mb-3 h-10 w-10 text-gray-400" />

        <p className="font-medium text-gray-700">
          Upload Images
        </p>

        <span className="mt-1 text-sm text-gray-500">
          JPG, PNG, WEBP
        </span>
      </button>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-4">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            <div className="flex aspect-square items-center justify-center bg-gray-100">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Images className="h-10 w-10 text-gray-400" />
              )}
            </div>

            <div className="flex items-center justify-between p-3">
              <p className="truncate text-sm font-medium">
                {item.title}
              </p>

              <button
                type="button"
                onClick={() => removeImage(item.id)}
                className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4">
        <p className="text-sm text-gray-500">
          Gallery images help customers learn more about your restaurant before ordering.
        </p>
      </div>
    </div>
  );
};

export default GalleryEditor;
