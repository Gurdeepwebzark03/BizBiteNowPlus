import { useState } from "react";

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
  const [status, setStatus] = useState("All");

  const [view, setView] = useState("grid");

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [modalMode, setModalMode] = useState("add");

  const [productList, setProductList] = useState(products);

  // =========================
  // View
  // =========================

  const handleView = (product) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  // =========================
  // Add
  // =========================

  const handleAdd = () => {
    setSelectedProduct(null);
    setModalMode("add");
    setModalOpen(true);
  };

  // =========================
  // Edit
  // =========================

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setModalMode("edit");
    setModalOpen(true);
  };

  // =========================
  // Delete
  // =========================

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setDeleteOpen(true);
  };

  const confirmDelete = () => {
    setProductList((prev) =>
      prev.filter(
        (item) => item.id !== selectedProduct.id
      )
    );

    setDeleteOpen(false);
    setSelectedProduct(null);
  };

  // =========================
  // Filters
  // =========================

  const filteredProducts = productList.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    const matchesStatus =
      status === "All" ||
      product.status === status;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus
    );
  });

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
        status={status}
        setStatus={setStatus}
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

      <ProductDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        product={selectedProduct}
      />

      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
        product={selectedProduct}
      />

      <DeleteProductModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onDelete={confirmDelete}
        product={selectedProduct}
      />

    </div>
  );
}