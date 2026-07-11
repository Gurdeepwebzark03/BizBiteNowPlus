import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryTabs from "../../components/customer/menu/CategoryTabs";
import ProductFilters from "../../components/customer/menu/ProductFilters";
import VegToggle from "../../components/customer/menu/VegToggle";
import SortDropdown from "../../components/customer/menu/SortDropdown";
import MenuGrid from "../../components/customer/menu/MenuGrid";
import ProductCard from "../../components/customer/menu/ProductCard";

import {
  categories,
  menuData,
} from "../../data/customer/menuData";


const Menu = () => {

  const navigate = useNavigate();


  const [activeCategory, setActiveCategory] =
    useState("all");


  const [vegType, setVegType] =
    useState("all");


  const [sortBy, setSortBy] =
    useState("featured");


  const [filters, setFilters] =
    useState({
      bestseller: false,
      offers: false,
      rating: false,
      available: true,
    });



  const filteredProducts = useMemo(() => {

    let products = [...menuData];


    // Category filter

    if (activeCategory !== "all") {

      products =
        products.filter(
          (item) =>
            item.category === activeCategory
        );

    }



    // Veg filter

    if (vegType === "veg") {

      products =
        products.filter(
          (item) =>
            item.isVeg === true
        );

    }


    if (vegType === "nonveg") {

      products =
        products.filter(
          (item) =>
            item.isVeg === false
        );

    }




    // Availability

    if (filters.available) {

      products =
        products.filter(
          (item) =>
            item.available
        );

    }




    // Bestseller

    if (filters.bestseller) {

      products =
        products.filter(
          (item) =>
            item.bestseller
        );

    }



    // Rating

    if (filters.rating) {

      products =
        products.filter(
          (item) =>
            item.rating >= 4
        );

    }




    // Offers

    if (filters.offers) {

      products =
        products.filter(
          (item) =>
            item.originalPrice
        );

    }




    // Sorting

    switch(sortBy) {

      case "priceLow":

        products.sort(
          (a,b)=>
            a.price - b.price
        );

        break;



      case "priceHigh":

        products.sort(
          (a,b)=>
            b.price - a.price
        );

        break;



      case "rating":

        products.sort(
          (a,b)=>
            b.rating - a.rating
        );

        break;



      default:

        products.sort(
          (a,b)=>
            b.featured - a.featured
        );

    }


    return products;


  },[
    activeCategory,
    vegType,
    filters,
    sortBy,
  ]);



  return (

    <div
      className="
        w-full

        space-y-8
        lg:pl-10
        pb-28
      "
    >


      {/* Categories */}

      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />



      {/* Filters */}

      <div
        className="
          flex

          flex-col

          gap-5

          px-4

          lg:px-6
        "
      >


        <div
          className="
            flex

            flex-col

            gap-4

            lg:flex-row

            lg:items-center

            lg:justify-between
          "
        >


          <VegToggle
            value={vegType}
            onChange={setVegType}
          />



          <SortDropdown
            value={sortBy}
            onChange={setSortBy}
          />


        </div>



        <ProductFilters
          filters={filters}
          onChange={setFilters}
          onMoreFilters={() =>
            console.log("Open Filters")
          }
        />


      </div>




      {/* Products */}

      <section
        className="
          w-full

          space-y-6

          px-4

          lg:px-6
        "
      >


        <div>

          <h2
            className="
              text-2xl

              font-bold

              text-slate-900
            "
          >
            Our Menu
          </h2>


          <p
            className="
              mt-1

              text-slate-500
            "
          >
            {filteredProducts.length} items available
          </p>


        </div>




        {
          filteredProducts.length === 0 ? (

            <div
              className="
                rounded-[28px]

                border-2

                border-dashed

                border-slate-300

                bg-white

                px-6

                py-16

                text-center
              "
            >

              <h3 className="text-xl font-bold">
                No Products Found
              </h3>

            </div>


          ) : (


            <MenuGrid>

              {
                filteredProducts.map(
                  (product)=>(

                    <ProductCard

                      key={product.id}

                      product={product}

                      onClick={() =>
                        navigate(
                          `/customer/product/${product.id}`
                        )
                      }

                    />

                  )
                )
              }


            </MenuGrid>


          )
        }


      </section>


    </div>

  );

};


export default Menu;