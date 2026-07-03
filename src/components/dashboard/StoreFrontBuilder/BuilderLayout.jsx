import { useState } from "react";

import BuilderSidebar from "./BuilderSidebar";
import BuilderPreview from "./BuilderPreview";
import BuilderProperties from "./BuilderProperties";
import MobileBottomBar from "./MobileBottomBar";

const BuilderLayout = () => {
  const [activeSection, setActiveSection] = useState("theme");

  // This will later come from the API
  const [storeData, setStoreData] = useState({
    theme: {},
    banner: {},
    storeInfo: {},
    categories: [],
    featuredProducts: [],
    gallery: [],
    announcement: {},
    reviews: {},
    footer: {},
  });

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col overflow-hidden">
      <div className="lg:hidden">
        <MobileBottomBar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-[#0f1720] lg:block">
          <BuilderSidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </aside>

        <main className="flex-1 overflow-y-auto bg-[#f4f6f8]">
          <BuilderPreview storeData={storeData} />
        </main>

        <aside className="hidden w-80 shrink-0 border-l border-white/10 bg-[#0f1720] xl:block">
          <BuilderProperties
            activeSection={activeSection}
            storeData={storeData}
            setStoreData={setStoreData}
          />
        </aside>
      </div>
    </div>
  );
};

export default BuilderLayout;