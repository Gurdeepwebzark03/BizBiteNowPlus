import { X, UploadCloud } from "lucide-react";
import { useState } from "react";

export default function ProductModal({
  open,
  onClose,
  mode = "add",
}) {
  if (!open) return null;

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    originalPrice: "",
    stock: "",
    sku: "",

    featured: false,
    available: true,
    combo: false,
    delivery: true,
    specialOccasion: false,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

          <div>
            <h2 className="text-2xl font-bold text-slate-900">

              {mode === "add"
                ? "Add Product"
                : "Edit Product"}

            </h2>

            <p className="mt-1 text-slate-500">
              Fill product information below.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X />
          </button>

        </div>

        {/* Body */}

        <form
          onSubmit={handleSubmit}
          className="max-h-[75vh] overflow-y-auto px-8 py-8"
        >

          <div className="grid gap-6">

            {/* Product Name */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Product Name
              </label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Chicken Burger"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1A4D2E]"
              />

            </div>

            {/* Category */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                >
                  <option>Select Category</option>
                  <option>Pizza</option>
                  <option>Burger</option>
                  <option>Beverages</option>
                  <option>Snacks</option>
                </select>

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  SKU
                </label>

                <input
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  placeholder="SKU-001"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

            </div>

            {/* Description */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Description
              </label>

              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 resize-none"
              />

            </div>

            {/* Price */}

            <div className="grid gap-6 md:grid-cols-3">

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Selling Price
                </label>

                <input
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  type="number"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Original Price
                </label>

                <input
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleChange}
                  type="number"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Stock
                </label>

                <input
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  type="number"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

            </div>

            {/* Upload */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Product Image
              </label>

              <div className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 p-10 text-slate-500 hover:border-[#1A4D2E]">

                <UploadCloud size={38} />

                <p className="mt-4">
                  Click to upload image
                </p>

              </div>

            </div>

            {/* Options */}

            <div className="grid gap-4 md:grid-cols-2">

              <label className="flex items-center gap-3 rounded-xl border p-4">

                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                />

                Featured Product

              </label>

              <label className="flex items-center gap-3 rounded-xl border p-4">

                <input
                  type="checkbox"
                  name="available"
                  checked={formData.available}
                  onChange={handleChange}
                />

                Available

              </label>

              <label className="flex items-center gap-3 rounded-xl border p-4">

                <input
                  type="checkbox"
                  name="combo"
                  checked={formData.combo}
                  onChange={handleChange}
                />

                Combo Product

              </label>

              <label className="flex items-center gap-3 rounded-xl border p-4">

                <input
                  type="checkbox"
                  name="delivery"
                  checked={formData.delivery}
                  onChange={handleChange}
                />

                Delivery Available

              </label>

            </div>

          </div>

          {/* Footer */}

          <div className="mt-10 flex justify-end gap-4 border-t pt-6">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-6 py-3 font-medium"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-[#1A4D2E] px-6 py-3 font-medium text-white hover:bg-[#163d25]"
            >
              {mode === "add"
                ? "Add Product"
                : "Save Changes"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}