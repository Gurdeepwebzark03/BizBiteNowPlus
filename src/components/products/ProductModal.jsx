import { X, UploadCloud } from "lucide-react";
import { useState } from "react";

export default function ProductModal({
  open,
  onClose,
  mode = "add",
  product = null,
}) {
  if (!open) return null;

  const [formData, setFormData] = useState({
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || "",
    category: product?.category || "",
    image: product?.image || "",
    is_available: product?.is_available ?? true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    onClose();
  };
  return (
    <>
      <div className="fixed inset-0 z-50 h-full backdrop-blur-sm" />

      <div className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              {mode === "add" ? "Add Product" : "Edit Product"}
            </h2>
            <p className="mt-2 text-slate-500">Create and manage your restaurant products.</p>
          </div>

          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-h-[75vh] overflow-y-auto scrollbar-hide px-8 py-6"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-lg font-semibold text-slate-900">Product Information</h3>

                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium text-slate-700">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Chicken Burger"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#16522D] focus:ring-4 focus:ring-[#ffc700]/30"
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium text-slate-700">Category</label>
                    <select
                    name="category"
                    value={formData.category}

                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#16522D] focus:ring-4 focus:ring-[#ffc700]/30"
                  >
                    <option value="">Select Category</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Burger">Burger</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Description</label>
                  <textarea
                    rows={6}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Write a short description..."
                    className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#16522D] focus:ring-4 focus:ring-[#16522D]/10"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-lg font-semibold text-slate-900">Pricing</h3>

                <label className="mb-2 block text-sm font-medium text-slate-700">Selling Price</label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="299"
                    className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none transition focus:border-[#16522D] focus:ring-4 focus:ring-[#16522D]/10"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-lg font-semibold text-slate-900">Product Image</h3>

                <label
                  className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 transition hover:border-[#16522D] hover:bg-[#16522D]/5"
                >
                  <input type="file" accept="image/*" className="hidden" />

                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#16522D]/10 text-[#16522D] transition group-hover:scale-110">
                    <UploadCloud size={30} />
                  </div>

                  <h4 className="text-base font-semibold text-slate-900">Upload Product Image</h4>

                  <p className="mt-2 text-center text-sm text-slate-500">Drag & drop or click to browse</p>

                  <span className="mt-1 text-xs text-slate-400">PNG, JPG, WEBP (Max 5MB)</span>
                </label>

                <div className="mt-6">
                  <div className="overflow-hidden rounded-2xl border border-slate-200">
                    {formData.image ? (
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="aspect-square w-full object-cover"
                      />
                    ) : (
                      <div className="flex aspect-square items-center justify-center bg-slate-100">
                        <div className="text-center">
                          <UploadCloud size={40} className="mx-auto text-slate-300" />
                          <p className="mt-3 text-sm text-slate-400">Image Preview</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-lg font-semibold text-slate-900">Product Status</h3>

                <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                  <div>
                    <h4 className="font-medium text-slate-900">Available</h4>
                    <p className="mt-1 text-sm text-slate-500">Customers can order this product.</p>
                  </div>

                  <input
                    type="checkbox"
                    name="is_available"
                    checked={formData.is_available}
                    onChange={handleChange}
                    className="h-5 w-5 accent-[#16522D]"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 z-20 mt-6 flex flex-col gap-4 border-t border-slate-200 bg-white/95 px-8 py-5 shadow-[0_-10px_30px_rgba(15,23,42,0.04)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="font-semibold text-slate-900">Ready to save?</h4>
              <p className="mt-1 text-sm text-slate-500">Review the information before saving this product.</p>
            </div>

            <div className="flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                type="reset"
                className="rounded-xl border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                Reset
              </button>

              <button
                type="submit"
                className="rounded-xl bg-[#16522D] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#16522D]/20 transition hover:bg-[#114125] hover:shadow-xl"
              >
                {mode === "add" ? "Save Product" : "Update Product"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}


