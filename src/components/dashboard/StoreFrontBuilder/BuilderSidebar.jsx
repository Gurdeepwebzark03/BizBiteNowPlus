
import {
  Palette,
  Image,
  Store,
  LayoutGrid,
  Star,
  Images,
  Megaphone,
  MessageSquare,
  Footprints,
  Settings,
} from "lucide-react";

const sections = [
  {
    id: "theme",
    label: "Theme",
    icon: Palette,
  },
  {
    id: "banner",
    label: "Banner",
    icon: Image,
  },
  {
    id: "store",
    label: "Store Info",
    icon: Store,
  },
  {
    id: "categories",
    label: "Categories",
    icon: LayoutGrid,
  },
  {
    id: "featured",
    label: "Featured Products",
    icon: Star,
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: Images,
  },
  {
    id: "announcement",
    label: "Announcement",
    icon: Megaphone,
  },
  {
    id: "reviews",
    label: "Reviews",
    icon: MessageSquare,
  },
  {
    id: "footer",
    label: "Footer",
    icon: Footprints,
  },
  {
    id: "settings",
    label: "Advanced",
    icon: Settings,
  },
];

  const BuilderSidebar = ({
  activeSection,
  setActiveSection,
}) => {

  return (
    <div className="flex h-full flex-col bg-[#16522D]">
      {/* Header */}
      <div className="border-b border-white/10 p-5">
        <h2 className="text-lg font-bold text-white">
          Store Builder
        </h2>

        <p className="mt-1 text-sm text-white/70">
          Customize your storefront
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-3">
        {sections.map((item) => {
          const Icon = item.icon;

          return (
            <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`mx-3 mb-2 flex w-[calc(100%-24px)] items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                activeSection === item.id
                ? "bg-[#FFC700] text-[#16522D] shadow-lg"
                : "text-white/80 hover:bg-white/10 hover:text-white"
            }`}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 p-4">
        <div className="rounded-xl bg-white/5 p-3">
          <p className="text-xs text-white/70">
            Changes are shown instantly in the live preview.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuilderSidebar;