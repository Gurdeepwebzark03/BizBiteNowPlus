import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import HeroBanner from "../../components/customer/hero/HeroBanner";
import StoreCard from "../../components/customer/hero/StoreCard";
import HeroActions from "../../components/customer/hero/HeroActions";

import CategoryTabs from "../../components/customer/menu/CategoryTabs";
import ProductFilters from "../../components/customer/menu/ProductFilters";
import MenuGrid from "../../components/customer/menu/MenuGrid";
import ProductCard from "../../components/customer/menu/ProductCard";

import storeData from "../../data/customer/storeData";
import { categories, menuData } from "../../data/customer/menuData";

const Home = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("all");

  const [filters, setFilters] = useState({
    bestseller: false,
    offers: false,
    rating: false,
    available: true,
  });

  const filteredProducts = useMemo(() => {
    return menuData.filter((product) => {
      if (activeCategory !== "all" && product.category !== activeCategory) {
        return false;
      }

      if (filters.available && !product.available) {
        return false;
      }

      if (filters.bestseller && !product.bestseller) {
        return false;
      }

      if (filters.rating && product.rating < 4) {
        return false;
      }

      if (filters.offers && !product.originalPrice) {
        return false;
      }

      return true;
    });
  }, [activeCategory, filters]);
  return (
    <div
      className="
      w-full

      max-w-[1600px]

      mx-auto
      lg:pl-10
      space-y-8

      pb-28
    "
    >
      <HeroBanner
        banner={storeData.coverImage}
        logo={storeData.logo}
        name={storeData.name}
        tagline={storeData.tagline}
        rating={storeData.rating}
        reviews={storeData.totalReviews}
        deliveryTime={storeData.averageDeliveryTime}
        isOpen={storeData.isOpen}
      />

      <StoreCard
        address={`${storeData.address.line1}, ${storeData.address.city}, ${storeData.address.state}`}
        phone={storeData.contact.phone}
        distance={storeData.distance}
        deliveryTime={storeData.averageDeliveryTime}
        isOpen={storeData.isOpen}
        onCall={() => window.open(`tel:${storeData.contact.phone}`)}
        onDirections={() => window.open("https://maps.google.com", "_blank")}
        onShare={() => {
          if (navigator.share) {
            navigator.share({
              title: storeData.name,
              text: storeData.tagline,
            });
          }
        }}
        onFavorite={() => console.log("Favorite Store")}
        onBookTable={() => navigate("/customer/book-table")}
      />

      <HeroActions
        onMenu={() =>
          document.getElementById("menu-section")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        onBookTable={() => navigate("/customer/book-table")}
        onOrders={() => navigate("/customer/orders")}
        onRewards={() => navigate("/customer/rewards")}
        onDirections={() => window.open("https://maps.google.com", "_blank")}
        onCall={() => window.open(`tel:${storeData.contact.phone}`)}
      />
      {/* Categories */}

      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      {/* Filters */}

      <div
        className="
  w-full

  px-2

 

  
"
      >
        <ProductFilters
          filters={filters}
          onChange={setFilters}
          onMoreFilters={() => console.log("More Filters")}
        />
      </div>

      {/* Products */}

      <section
        id="menu-section"
        className="
    w-full

    space-y-6

    px-2

    sm:px-4

    lg:px-6

    xl:px-8
  "
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Popular Dishes
            </h2>

            <p className="mt-1 text-slate-500">
              Freshly prepared favorites from our kitchen.
            </p>
          </div>

          <button
            onClick={() => navigate("/customer/menu")}
            className="
              text-sm
              font-semibold

              transition

              hover:opacity-80
            "
            style={{
              color: "var(--primary)",
            }}
          >
            View All
          </button>
        </div>

        <MenuGrid>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => navigate(`/customer/product/${product.id}`)}
            />
          ))}
        </MenuGrid>
      </section>
    </div>
  );
};

export default Home;
