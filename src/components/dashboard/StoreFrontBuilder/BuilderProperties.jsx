import ThemeEditor from "./ThemeEditor";
import BannerEditor from "./BannerEditor";
import StoreInfoEditor from "./StoreInfoEditor";
import CategoriesEditor from "./CategoriesEditor";
import FeaturedProductsEditor from "./FeaturedProductsEditor";
import GalleryEditor from "./GalleryEditor";
import FooterEditor from "./FooterEditor";

const BuilderProperties = ({
  activeSection,
  storeData,
  setStoreData,
}) => {
  const editorMap = {
    theme: (
      <ThemeEditor
        data={storeData.theme}
        storeData={storeData}
        setStoreData={setStoreData}
      />
    ),

    banner: (
      <BannerEditor
        data={storeData.banner}
        storeData={storeData}
        setStoreData={setStoreData}
      />
    ),

    store: (
      <StoreInfoEditor
        data={storeData.storeInfo}
        storeData={storeData}
        setStoreData={setStoreData}
      />
    ),

    categories: (
      <CategoriesEditor
        data={storeData.categories}
        storeData={storeData}
        setStoreData={setStoreData}
      />
    ),

    featured: (
      <FeaturedProductsEditor
        data={storeData.featuredProducts}
        storeData={storeData}
        setStoreData={setStoreData}
      />
    ),

    gallery: (
      <GalleryEditor
        data={storeData.gallery}
        storeData={storeData}
        setStoreData={setStoreData}
      />
    ),

    footer: (
      <FooterEditor
        data={storeData.footer}
        storeData={storeData}
        setStoreData={setStoreData}
      />
    ),
  };

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Customize
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Edit the selected section of your storefront.
        </p>
      </div>

      {/* Active Editor */}
      <div className="flex-1 overflow-y-auto p-5">
        {editorMap[activeSection] || (
          <div className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-gray-500">
            Select a section from the sidebar.
          </div>
        )}
      </div>
    </div>
  );
};

export default BuilderProperties;