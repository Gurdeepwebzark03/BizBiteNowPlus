import { useState } from "react";

import DashboardLayout from "../../../components/Shared/DashboardLayout";

import ProductsHeader from "../../../components/products/ProductsHeader";
import ProductStats from "../../../components/products/ProductStats";
import ProductFilters from "../../../components/products/ProductFilters";
import ProductGrid from "../../../components/products/ProductGrid";
import ProductDrawer from "../../../components/products/ProductDrawer";
import ProductModal from "../../../components/products/ProductModal";
import DeleteProductModal from "../../../components/products/DeleteProductModal";

import {
  products,
  productStats,
} from "../../../data/productsData";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Shared Grid/List view state
  const [view, setView] = useState("grid");

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [modalMode, setModalMode] = useState("add");

  // Later this will come from API
  const [productList, setProductList] = useState(products);

  // =========================
  // View Product
  // =========================

  const handleView = (product) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  // =========================
  // Add Product
  // =========================

  const handleAdd = () => {
    setSelectedProduct(null);
    setModalMode("add");
    setModalOpen(true);
  };

  // =========================
  // Edit Product
  // =========================

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setModalMode("edit");
    setModalOpen(true);
  };

  // =========================
  // Delete Product
  // =========================

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setDeleteOpen(true);
  };

  const confirmDelete = () => {
    setProductList((prev) =>
      prev.filter((item) => item.id !== selectedProduct.id)
    );

    setDeleteOpen(false);
    setSelectedProduct(null);
  };

  // Filtered Products
  const filteredProducts = productList.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });
console.log(filteredProducts);
console.log(productList);
  return (
    
      <div className="space-y-8">
        <ProductsHeader
          onAdd={handleAdd}
        />

        <ProductStats
          stats={productStats}
        />

        <ProductFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          view={view}
          setView={setView}
        />

        <ProductGrid
          products={filteredProducts}
          view={view}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Product Details */}
        <ProductDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          product={selectedProduct}
        />

        {/* Add / Edit Product */}
        <ProductModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          mode={modalMode}
          product={selectedProduct}
        />

        {/* Delete Product */}
        <DeleteProductModal
          open={deleteOpen}
          onClose={() => setDeleteOpen(false)}
          onDelete={confirmDelete}
          product={selectedProduct}
        />
      </div>
    
  );
}