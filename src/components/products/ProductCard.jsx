import {
  Edit3,
  Trash2,
  Eye,
  Star,
  Package,
} from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        {product.featured && (
          <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white">
            <Star size={13} fill="white" />
            Featured
          </div>
        )}

        <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow">
          {product.available ? (
            <span className="text-emerald-600">Available</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {product.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {product.category}
            </p>
          </div>

          <Package
            className="text-slate-400"
            size={22}
          />
        </div>

        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-sm text-slate-500">
              Price
            </p>

            <h2 className="text-2xl font-bold text-slate-900">
              ₹{product.price}
            </h2>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-500">
              Stock
            </p>

            <h3
              className={`font-bold ${
                product.stock <= 5
                  ? "text-red-600"
                  : "text-slate-900"
              }`}
            >
              {product.stock}
            </h3>
          </div>

        </div>

        {/* Actions */}

        <div className="mt-6 flex gap-2">

          <button
            className="
              flex-1
              rounded-xl
              border
              border-slate-200
              py-2.5
              text-slate-700
              transition
              hover:bg-slate-100
            "
          >
            <Eye
              size={18}
              className="mx-auto"
            />
          </button>

          <button
            className="
              flex-1
              rounded-xl
              border
              border-slate-200
              py-2.5
              text-blue-600
              transition
              hover:bg-blue-50
            "
          >
            <Edit3
              size={18}
              className="mx-auto"
            />
          </button>

          <button
            className="
              flex-1
              rounded-xl
              border
              border-red-200
              py-2.5
              text-red-600
              transition
              hover:bg-red-50
            "
          >
            <Trash2
              size={18}
              className="mx-auto"
            />
          </button>

        </div>
      </div>
    </div>
  );
}