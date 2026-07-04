import { LayoutGrid } from "lucide-react";

const CategoriesEditor = ({ data = [], updateStoreData }) => {
  // Temporary data
  // Later replace with categories fetched from the API
  const categories = [
    { id: 1, name: "Pizza", visible: true },
    { id: 2, name: "Burger", visible: true },
    { id: 3, name: "Drinks", visible: false },
    { id: 4, name: "Desserts", visible: true },
  ];

  const toggleCategory = (id) => {
    const updated = categories.map((category) =>
      category.id === id
        ? { ...category, visible: !category.visible }
        : category
    );

    updateStoreData("categories", updated);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <LayoutGrid className="h-5 w-5 text-[#16522D]" />

          <h3 className="text-lg font-semibold">
            Categories
          </h3>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          Choose which categories appear on your storefront.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
          >
            <div>
              <h4 className="font-medium text-gray-800">
                {category.name}
              </h4>

              <p className="text-xs text-gray-500">
                Customer category
              </p>
            </div>

            <label className="inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={category.visible}
                onChange={() => toggleCategory(category.id)}
                className="h-5 w-5 accent-[#16522D]"
              />
            </label>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-dashed border-gray-300 p-4">
        <p className="text-sm text-gray-500">
          Categories are synced from your products. You can control their visibility here.
        </p>
      </div>
    </div>
  );
};

export default CategoriesEditor;