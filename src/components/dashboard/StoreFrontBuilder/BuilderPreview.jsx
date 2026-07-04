const BuilderPreview = ({ storeData }) => {
  const {
    theme = {},
    banner = {},
    storeInfo = {},
    categories = [],
    featuredProducts = [],
    gallery = [],
  } = storeData;

  return (
    <div className="min-h-full bg-slate-100 p-4 lg:p-8">
      <div
        className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl"
        style={{
          backgroundColor: theme.backgroundColor || "#ffffff",
        }}
      >
        {/* Hero Banner */}
        <section
          className="relative flex h-72 items-end bg-gradient-to-r from-[#16522D] to-[#2E7D32] p-8"
          style={{
            height: banner.height || 320,
            backgroundImage: banner.image
              ? `url(${banner.image})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 bg-black"
            style={{
              opacity: (banner.overlay ?? 30) / 100,
            }}
          />

          <div className="relative z-10 max-w-2xl text-white">
            <h1 className="text-4xl font-bold">
              {banner.heading ||
                storeInfo.name ||
                "Your Restaurant"}
            </h1>

            <p className="mt-3 text-white/90">
              {banner.subtitle ||
                storeInfo.description ||
                "Store description will appear here."}
            </p>

            <button
              className="mt-6 rounded-xl px-6 py-3 font-semibold"
              style={{
                backgroundColor:
                  theme.accentColor || "#FFC700",
                color: "#16522D",
              }}
            >
              {banner.buttonText || "Order Now"}
            </button>
          </div>
        </section>

        {/* Store Info */}
        <section className="border-b p-6">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <span>
              📍 {storeInfo.address || "Store Address"}
            </span>

            <span>
              📞 {storeInfo.phone || "+91 XXXXX XXXXX"}
            </span>

            <span>
              🕒 {storeInfo.deliveryTime || "30-40 mins"}
            </span>
          </div>
        </section>

        {/* Categories */}
        <section className="p-6">
          <h2 className="mb-4 text-2xl font-bold">
            Categories
          </h2>

          <div className="flex flex-wrap gap-3">
            {categories.length ? (
              categories.map((category) => (
                <span
                  key={category.id}
                  className="rounded-full border px-5 py-2"
                >
                  {category.name}
                </span>
              ))
            ) : (
              <span className="text-gray-500">
                No categories selected.
              </span>
            )}
          </div>
        </section>

        {/* Featured Products */}
        <section className="border-t p-6">
          <h2 className="mb-6 text-2xl font-bold">
            Featured Products
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.length ? (
              featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-2xl border bg-white"
                >
                  <div className="aspect-[4/3] bg-gray-200" />

                  <div className="p-4">
                    <h3 className="font-semibold">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-lg font-bold text-[#16522D]">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-dashed p-8 text-center text-gray-500 md:col-span-2 xl:col-span-3">
                Featured products will appear here.
              </div>
            )}
          </div>
        </section>

        {/* Gallery */}
        <section className="border-t p-6">
          <h2 className="mb-6 text-2xl font-bold">
            Gallery
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.length ? (
              gallery.map((image) => (
                <div
                  key={image.id}
                  className="aspect-square rounded-2xl bg-gray-200"
                />
              ))
            ) : (
              <div className="col-span-full rounded-xl border border-dashed p-8 text-center text-gray-500">
                Gallery images will appear here.
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 p-6 text-center text-white">
          <p>
            {storeInfo.name || "Your Store"}
          </p>

          <p className="mt-2 text-sm text-gray-400">
            {storeInfo.address || "Store Address"}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BuilderPreview;