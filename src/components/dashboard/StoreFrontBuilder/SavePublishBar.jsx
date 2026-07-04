import { Eye, RotateCcw, Save, UploadCloud } from "lucide-react";

const SavePublishBar = ({
  hasChanges = false,
  saving = false,
  publishing = false,
  onPreview,
  onReset,
  onSave,
  onPublish,
}) => {
  return (
    <div className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 bg-white px-6 py-4">
      {/* Left */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Store Front Builder
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {hasChanges
            ? "You have unpublished changes."
            : "Everything is up to date."}
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onPreview}
          className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium transition hover:bg-gray-100"
        >
          <Eye size={18} />
          Preview
        </button>

        <button
          type="button"
          onClick={onReset}
          disabled={!hasChanges}
          className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RotateCcw size={18} />
          Reset
        </button>

        <button
          type="button"
          onClick={onSave}
          disabled={saving}
          className="flex items-center gap-2 rounded-xl bg-[#16522D] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#134526] disabled:opacity-60"
        >
          <Save size={18} />
          {saving ? "Saving..." : "Save Draft"}
        </button>

        <button
          type="button"
          onClick={onPublish}
          disabled={publishing}
          className="flex items-center gap-2 rounded-xl bg-[#FFC700] px-4 py-2.5 text-sm font-semibold text-[#16522D] transition hover:bg-[#e6b600] disabled:opacity-60"
        >
          <UploadCloud size={18} />
          {publishing ? "Publishing..." : "Publish"}
        </button>
      </div>
    </div>
  );
};

export default SavePublishBar;