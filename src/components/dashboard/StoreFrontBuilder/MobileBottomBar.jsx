import { LayoutPanelLeft, Eye, SlidersHorizontal } from "lucide-react";

const MobileBottomBar = ({
  setSidebarOpen,
  setPropertiesOpen,
}) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white lg:hidden">
      <div className="grid grid-cols-3">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="flex flex-col items-center gap-1 py-3 transition hover:bg-gray-50"
        >
          <LayoutPanelLeft size={20} />

          <span className="text-xs font-medium">
            Sections
          </span>
        </button>

        <button
          type="button"
          className="flex flex-col items-center gap-1 py-3 transition hover:bg-gray-50"
        >
          <Eye size={20} />

          <span className="text-xs font-medium">
            Preview
          </span>
        </button>

        <button
          type="button"
          onClick={() => setPropertiesOpen(true)}
          className="flex flex-col items-center gap-1 py-3 transition hover:bg-gray-50"
        >
          <SlidersHorizontal size={20} />

          <span className="text-xs font-medium">
            Edit
          </span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomBar;