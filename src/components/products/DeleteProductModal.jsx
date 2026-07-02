import { AlertTriangle, Trash2, X } from "lucide-react";

export default function DeleteProductModal({
  open,
  onClose,
  onDelete,
  product,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle
                className="text-red-600"
                size={24}
              />
            </div>

            <div>

              <h2 className="text-xl font-bold text-slate-900">
                Delete Product
              </h2>

              <p className="text-sm text-slate-500">
                This action cannot be undone.
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6">

          <p className="text-slate-700 leading-7">

            Are you sure you want to delete

            <span className="font-semibold text-slate-900">
              {" "}
              {product?.name}
            </span>

            ?

          </p>

          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">

            <ul className="space-y-2 text-sm text-red-700">

              <li>• Product will be permanently removed.</li>

              <li>• Product images will also be deleted.</li>

              <li>• This action cannot be recovered.</li>

            </ul>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t border-slate-200 p-6">

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-5 py-2.5 font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700"
          >
            <Trash2 size={18} />

            Delete Product
          </button>

        </div>

      </div>

    </div>
  );
}