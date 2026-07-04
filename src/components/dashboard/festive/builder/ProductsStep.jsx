import { Plus, Search, Package, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";

const mockProducts = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: 320,
  },
  {
    id: 2,
    name: "Veg Biryani",
    category: "Rice",
    price: 260,
  },
  {
    id: 3,
    name: "Gulab Jamun",
    category: "Dessert",
    price: 140,
  },
  {
    id: 4,
    name: "Chocolate Cake",
    category: "Dessert",
    price: 480,
  },
  {
    id: 5,
    name: "Cold Coffee",
    category: "Beverage",
    price: 180,
  },
  {
    id: 6,
    name: "Family Combo",
    category: "Combo",
    price: 999,
  },
];

export default function ProductsStep({
  data = [],
  onChange,
}) {
  const [search, setSearch] = useState("");

  const selectedProducts = data;

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const addProduct = (product) => {
    if (
      selectedProducts.some(
        (item) => item.id === product.id
      )
    )
      return;

    onChange?.([
      ...selectedProducts,
      {
        ...product,
        festivePrice: product.price,
        quantity: 1,
      },
    ]);
  };

  const removeProduct = (id) => {
    onChange?.(
      selectedProducts.filter(
        (item) => item.id !== id
      )
    );
  };

  const updateField = (id, field, value) => {
    onChange?.(
      selectedProducts.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Add Products
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Select products for this festive menu.
        </p>
      </div>

      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search product..."
          className="h-12 w-full rounded-xl border border-slate-200 bg-transparent pl-11 pr-4 outline-none focus:border-[#1A4D2E] dark:border-slate-700"
        />
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Available Products
        </h3>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
            >
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">
                    {product.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {product.category}
                  </p>
                </div>

                <Package
                  size={20}
                  className="text-[#1A4D2E]"
                />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="font-bold">
                  ₹{product.price}
                </span>

                <button
                  onClick={() =>
                    addProduct(product)
                  }
                  className="flex items-center gap-2 rounded-lg bg-[#1A4D2E] px-3 py-2 text-sm text-white"
                >
                  <Plus size={16} />
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Selected Products
        </h3>

        {selectedProducts.length === 0 && (
          <div className="rounded-xl border border-dashed py-10 text-center text-slate-500">
            No products selected.
          </div>
        )}

        <div className="space-y-4">
          {selectedProducts.map((item) => (
            <div
              key={item.id}
              className="grid gap-4 rounded-xl border p-4 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-4">
                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.category}
                </p>
              </div>

              <div className="lg:col-span-3">
                <label className="mb-1 block text-xs">
                  Festive Price
                </label>

                <input
                  type="number"
                  value={item.festivePrice}
                  onChange={(e) =>
                    updateField(
                      item.id,
                      "festivePrice",
                      Number(e.target.value)
                    )
                  }
                  className="h-11 w-full rounded-lg border px-3"
                />
              </div>

              <div className="lg:col-span-3">
                <label className="mb-1 block text-xs">
                  Quantity
                </label>

                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateField(
                      item.id,
                      "quantity",
                      Number(e.target.value)
                    )
                  }
                  className="h-11 w-full rounded-lg border px-3"
                />
              </div>

              <div className="flex justify-end lg:col-span-2">
                <button
                  onClick={() =>
                    removeProduct(item.id)
                  }
                  className="rounded-lg p-3 text-red-500 hover:bg-red-100"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}