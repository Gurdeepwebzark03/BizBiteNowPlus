import {
  X,
  Package,
  Tag,
  IndianRupee,
  Boxes,
  Star,
  Truck,
} from "lucide-react";

export default function ProductDrawer({
  open,
  onClose,
  product,
}) {
  if (!open || !product) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40"
      />

      {/* Drawer */}
      <div
        className="
          fixed
          right-0
          top-0
          z-[9999]
          h-screen
          w-full
          max-w-xl
          overflow-y-auto
          bg-white
          
          shadow-2xl
        "
      >
        {/* Header */}

        <div className="sticky top-0 z-20 flex items-center  z-[10000] justify-between border-b bg-white p-6">

          <h2 className="text-2xl font-bold text-slate-900">
            Product Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X />
          </button>

        </div>

        {/* Image */}

        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover"
        />

        {/* Body */}

        <div className="space-y-6 p-6">

          <div>

            <h1 className="text-3xl font-bold text-slate-900">
              {product.name}
            </h1>

            <p className="mt-2 text-slate-600">
              {product.description ||
                "No description available."}
            </p>

          </div>

          {/* Details */}

          <div className="grid gap-4">

            <Info
              icon={<Tag size={18} />}
              title="Category"
              value={product.category}
            />

            <Info
              icon={<IndianRupee size={18} />}
              title="Selling Price"
              value={`₹${product.price}`}
            />

            <Info
              icon={<Boxes size={18} />}
              title="Stock"
              value={`${product.stock} Units`}
            />

            <Info
              icon={<Package size={18} />}
              title="SKU"
              value={product.sku || "Not Assigned"}
            />

          </div>

          {/* Features */}

          <div>

            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Features
            </h3>

            <div className="flex flex-wrap gap-3">

              {product.featured && (
                <Badge
                  icon={<Star size={14} />}
                  text="Featured"
                />
              )}

              {product.combo && (
                <Badge
                  text="Combo Product"
                />
              )}

              {product.delivery && (
                <Badge
                  icon={<Truck size={14} />}
                  text="Delivery"
                />
              )}

              {product.available ? (
                <Badge
                  text="Available"
                  color="emerald"
                />
              ) : (
                <Badge
                  text="Out of Stock"
                  color="red"
                />
              )}

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

function Info({
  icon,
  title,
  value,
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-4">

      <div className="rounded-lg bg-slate-100 p-3">
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-500">
          {title}
        </p>

        <h4 className="font-semibold text-slate-900">
          {value}
        </h4>

      </div>

    </div>
  );
}

function Badge({
  text,
  icon,
  color = "amber",
}) {
  const colors = {
    amber: "bg-amber-100 text-amber-700",
    emerald: "bg-emerald-100 text-emerald-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${colors[color]}`}
    >
      {icon}
      {text}
    </span>
  );
}