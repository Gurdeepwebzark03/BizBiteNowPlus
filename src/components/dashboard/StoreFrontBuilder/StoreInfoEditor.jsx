import { Store } from "lucide-react";

const StoreInfoEditor = ({ data = {}, updateStoreData }) => {
  const handleChange = (field, value) => {
    updateStoreData("storeInfo", {
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Store className="h-5 w-5 text-[#16522D]" />

          <h3 className="text-lg font-semibold text-gray-900">
            Store Information
          </h3>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          Manage the information customers see on your storefront.
        </p>
      </div>

      {/* Store Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Store Name
        </label>

        <input
          type="text"
          value={data.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Pizza Palace"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          rows={4}
          value={data.description || ""}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Tell customers about your restaurant..."
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Contact Number */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Contact Number
        </label>

        <input
          type="tel"
          value={data.phone || ""}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="+91 9876543210"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email
        </label>

        <input
          type="email"
          value={data.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="store@example.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Address */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Address
        </label>

        <textarea
          rows={3}
          value={data.address || ""}
          onChange={(e) => handleChange("address", e.target.value)}
          placeholder="Store address"
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Delivery Time */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Estimated Delivery Time
        </label>

        <input
          type="text"
          value={data.deliveryTime || ""}
          onChange={(e) =>
            handleChange("deliveryTime", e.target.value)
          }
          placeholder="25-35 mins"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Minimum Order */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Minimum Order
        </label>

        <input
          type="number"
          value={data.minimumOrder || ""}
          onChange={(e) =>
            handleChange("minimumOrder", e.target.value)
          }
          placeholder="199"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>
    </div>
  );
};

export default StoreInfoEditor;