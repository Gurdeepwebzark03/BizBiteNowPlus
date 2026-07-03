import { Eye, Edit3, Trash2 } from "lucide-react";

export default function ProductTable({
  products,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed">
<thead className="bg-slate-50">
  <tr className="border-b border-slate-200">

    <th className="w-[34%] px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
      Product
    </th>

    <th className="w-[14%] px-6 py-5 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
      Category
    </th>

    <th className="w-[12%] px-6 py-5 text-center font-semibold text-xs font-semibold uppercase tracking-wide text-slate-500">
      Price
    </th>

    <th className="w-[10%] px-6 py-5 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
      Stock
    </th>

    <th className="w-[15%] px-6 py-5 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
      Status
    </th>

    <th className="w-[15%] px-6 py-5 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
      Actions
    </th>

  </tr>
</thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t transition hover:bg-slate-50"
              >
                {/* Product */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-14 w-14 rounded-xl object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {product.name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        #{product.id}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-6 py-4">
                  {product.category}
                </td>

                {/* Price */}
                <td className="px-6 py-4 font-semibold">
                  ₹{product.price}
                </td>

                {/* Stock */}
                <td className="px-6 py-4">
                  {product.stock}
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      product.available
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.available ? "Available" : "Out of Stock"}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onView(product)}
                      className="rounded-lg p-2 hover:bg-slate-100"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => onEdit(product)}
                      className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                    >
                      <Edit3 size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(product)}
                      className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}