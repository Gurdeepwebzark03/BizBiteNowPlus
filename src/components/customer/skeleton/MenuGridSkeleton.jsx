import ProductCardSkeleton from "./ProductCardSkeleton";

const MenuGridSkeleton = ({
  count = 12,
}) => {
  return (
    <div
      className="
        hidden
        lg:grid

        grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6

        gap-6
      "
    >
      {Array.from({
        length: count,
      }).map((_, index) => (
        <ProductCardSkeleton
          key={index}
        />
      ))}
    </div>
  );
};

export default MenuGridSkeleton;