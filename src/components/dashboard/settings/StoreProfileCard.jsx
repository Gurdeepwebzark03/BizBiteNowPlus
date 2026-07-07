import { motion } from "framer-motion";
import { Camera, Upload, Save } from "lucide-react";

const StoreProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-lg"
    >
      {/* Header */}
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-semibold text-[#16522d]">
          Store Profile
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage your restaurant branding and public information.
        </p>
      </div>

      {/* Body */}
      <div className="space-y-8 p-6">
        {/* Images */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Logo */}
          <div>
            <label className="mb-3 block text-sm font-medium text-[#16522d]">
              Store Logo
            </label>

            <div className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-[#f8faf8] transition hover:border-[#16522d]">
              <Camera
                size={34}
                className="mb-3 text-[#16522d]"
              />

              <p className="text-sm text-slate-600">
                Upload Logo
              </p>

              <span className="mt-2 text-xs text-slate-500">
                PNG / JPG
              </span>
            </div>
          </div>

          {/* Banner */}
<div>
  <label className="mb-3 block text-sm font-medium text-[#16522d]">
    Store Banner
  </label>

  <label
    htmlFor="banner-upload"
    className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-[#f8faf8] transition hover:border-[#16522d]"
  >
    <Upload
      size={34}
      className="mb-3 text-[#16522d]"
    />

    <p className="text-sm text-slate-600">
      Upload Banner
    </p>

    <span className="mt-2 text-xs text-slate-500">
      1200 × 400 Recommended
    </span>
  </label>

  <input
    id="banner-upload"
    type="file"
    accept="image/*"
    className="hidden"
    onChange={(e) => {
      const file = e.target.files?.[0];
      console.log(file);
    }}
  />
</div>
          
        </div>

        {/* Store Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Store Name
          </label>

          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            placeholder="BizBite Restaurant"
          />
        </div>

        {/* Tagline */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Store Tagline
          </label>

          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            placeholder="Fresh Food • Fast Delivery"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#16522d]">
            Description
          </label>

          <textarea
            rows={5}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#16522d] focus:ring-2 focus:ring-[#16522d]/20"
            placeholder="Tell customers about your restaurant..."
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 rounded-xl bg-[#ffc700] px-6 py-3 font-semibold text-[#16522d] transition hover:bg-[#e6b800]">
            <Save size={18} />
            Save Profile
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StoreProfileCard;