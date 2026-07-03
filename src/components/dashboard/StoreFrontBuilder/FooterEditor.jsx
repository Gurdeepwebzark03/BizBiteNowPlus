import { Footprints } from "lucide-react";

const FooterEditor = ({ data = {}, updateStoreData }) => {
  const handleChange = (field, value) => {
    updateStoreData("footer", {
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Footprints className="h-5 w-5 text-[#16522D]" />

          <h3 className="text-lg font-semibold text-gray-900">
            Footer Settings
          </h3>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          Customize the information shown at the bottom of your storefront.
        </p>
      </div>

      {/* Copyright */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Copyright Text
        </label>

        <input
          type="text"
          value={data.copyright || ""}
          onChange={(e) =>
            handleChange("copyright", e.target.value)
          }
          placeholder="© 2026 Pizza Palace. All rights reserved."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Contact Email */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Support Email
        </label>

        <input
          type="email"
          value={data.supportEmail || ""}
          onChange={(e) =>
            handleChange("supportEmail", e.target.value)
          }
          placeholder="support@example.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Support Phone
        </label>

        <input
          type="text"
          value={data.supportPhone || ""}
          onChange={(e) =>
            handleChange("supportPhone", e.target.value)
          }
          placeholder="+91 9876543210"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Show Social Links */}
      <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
        <div>
          <h4 className="font-medium text-gray-900">
            Show Social Links
          </h4>

          <p className="text-sm text-gray-500">
            Display social media icons in the footer.
          </p>
        </div>

        <input
          type="checkbox"
          checked={data.showSocialLinks ?? true}
          onChange={(e) =>
            handleChange("showSocialLinks", e.target.checked)
          }
          className="h-5 w-5 accent-[#16522D]"
        />
      </div>

      {/* Show Contact */}
      <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
        <div>
          <h4 className="font-medium text-gray-900">
            Show Contact Information
          </h4>

          <p className="text-sm text-gray-500">
            Display email and phone number in the footer.
          </p>
        </div>

        <input
          type="checkbox"
          checked={data.showContact ?? true}
          onChange={(e) =>
            handleChange("showContact", e.target.checked)
          }
          className="h-5 w-5 accent-[#16522D]"
        />
      </div>

      {/* Footer Note */}
      <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4">
        <p className="text-sm text-gray-500">
          Footer settings will be shown at the bottom of your storefront preview and will be saved when you publish your storefront.
        </p>
      </div>
    </div>
  );
};

export default FooterEditor;