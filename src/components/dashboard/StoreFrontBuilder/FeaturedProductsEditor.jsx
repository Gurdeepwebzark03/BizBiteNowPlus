import { Star, Search } from "lucide-react";

const FeaturedProductsEditor = ({ data = [], updateStoreData }) => {
  // Temporary data
  // Replace with products from API later
  const products = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 299,
      featured: true,
    },
    {
      id: 2,
      name: "Veg Burger",
      price: 199,
      featured: false,
    },
    {
      id: 3,
      name: "Pasta Alfredo",
      price: 349,
      featured: true,
    },
    {
      id: 4,
      name: "Cold Coffee",
      price: 149,
      featured: false,
    },
  ];

  const toggleFeatured = (id) => {
    const updated = products.map((product) =>
      product.id === id
        ? {
            ...product,
            featured: !product.featured,
          }
        : product
    );

    updateStoreData("featuredProducts", updated);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-[#16522D]" />

          <h3 className="text-lg font-semibold text-gray-900">
            Featured Products
          </h3>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          Choose products to highlight on your storefront.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-[#16522D]"
        />
      </div>

      {/* Product List */}
      <div className="space-y-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between rounded-xl border border-gray-200 p-4 transition hover:border-[#16522D]/30"
          >
            <div>
              <h4 className="font-medium text-gray-900">
                {product.name}
              </h4>

              <p className="mt-1 text-sm text-gray-500">
                ₹{product.price}
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggleFeatured(product.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                product.featured
                  ? "bg-[#16522D] text-white"
                  : "border border-gray-300 text-gray-600 hover:border-[#16522D]"
              }`}
            >
              {product.featured ? "Featured" : "Add"}
            </button>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4">
        <p className="text-sm text-gray-500">
          Featured products are displayed at the top of your storefront to
          increase visibility.
        </p>
      </div>
    </div>
  );
};

export default FeaturedProductsEditor;
