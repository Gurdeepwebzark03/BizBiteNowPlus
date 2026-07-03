import { useState } from "react";

import DashboardLayout from "../../../components/Shared/DashboardLayout";

import ProductsHeader from "../../../components/products/ProductsHeader";
import ProductStats from "../../../components/products/ProductStats";
import ProductFilters from "../../../components/products/ProductFilters";
import ProductGrid from "../../../components/products/ProductGrid";

import {
  products,
  productStats,
} from "../../../data/productsData";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
  
      <div className="space-y-8">

        <ProductsHeader />

        <ProductStats stats={productStats} />

        <ProductFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        <ProductGrid
          products={products}
          search={search}
          category={category}
        />

      </div>

  );
}