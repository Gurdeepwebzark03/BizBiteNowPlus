import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductHero from "../../components/customer/product/ProductHero";
import ProductGallery from "../../components/customer/product/ProductGallery";
import ProductInfo from "../../components/customer/product/ProductInfo";
import ProductVariants from "../../components/customer/product/ProductVariants";
import Addons from "../../components/customer/product/Addons";
import QuantitySelector from "../../components/customer/product/QuantitySelector";
import Reviews from "../../components/customer/product/Reviews";
import AddToCartBar from "../../components/customer/product/AddToCartBar";

import { menuData } from "../../data/customer/menuData";

const Product = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const product = useMemo(
    () =>
      menuData.find(
        (item) =>
          item.id === Number(id)
      ),
    [id]
  );

  const [selectedVariant, setSelectedVariant] =
    useState(
      product?.variants?.[0] || null
    );

  const [selectedAddons, setSelectedAddons] =
    useState([]);

  const [quantity, setQuantity] =
    useState(1);

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find(
        (item) =>
          item.id === addon.id
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.id !== addon.id
        );
      }

      return [...prev, addon];
    });
  };

  const totalPrice = useMemo(() => {
    const base =
      selectedVariant?.price ??
      product?.price ??
      0;

    const addons =
      selectedAddons.reduce(
        (sum, addon) =>
          sum + addon.price,
        0
      );

    return (
      (base + addons) *
      quantity
    );
  }, [
    product,
    quantity,
    selectedVariant,
    selectedAddons,
  ]);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h2 className="text-xl font-semibold text-slate-600">
          Product not found.
        </h2>
      </div>
    );
  }
    return (
                     <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="space-y-6"
>
    <div className="space-y-8 lg:pl-10 pb-32">

      {/* Hero */}

      <ProductHero
        product={product}
        onBack={() => navigate(-1)}
      />

      {/* Gallery */}

      <ProductGallery
        images={product.gallery}
      />

      <div className="space-y-8 px-4 lg:px-6">

        {/* Product Info */}

        <ProductInfo
          product={product}
        />

        {/* Variants */}

        {product.variants?.length > 0 && (
          <ProductVariants
            variants={product.variants}
            selectedVariant={selectedVariant}
            onChange={setSelectedVariant}
          />
        )}

        {/* Addons */}

        {product.addons?.length > 0 && (
          <Addons
            addons={product.addons}
            selectedAddons={selectedAddons}
            onToggle={toggleAddon}
          />
        )}

        {/* Quantity */}

        <QuantitySelector
          quantity={quantity}
          onIncrease={() =>
            setQuantity((qty) => qty + 1)
          }
          onDecrease={() =>
            setQuantity((qty) =>
              Math.max(1, qty - 1)
            )
          }
        />

        {/* Reviews */}

        <Reviews
          product={product}
        />

      </div>
            {/* Sticky Add To Cart */}

      <AddToCartBar
        quantity={quantity}
        total={totalPrice}
        onAddToCart={() => {
          console.log({
            product,
            quantity,
            variant: selectedVariant,
            addons: selectedAddons,
          });

          navigate("/customer/cart");
        }}
      />

    </div>
    </motion.div>
  );
};

export default Product;