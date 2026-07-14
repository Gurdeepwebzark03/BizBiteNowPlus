const CompactCategoryTabs = ({
  categories = [],
  activeCategory,
  onChange,
}) => {
  return (
    <div
      className="
        flex
        gap-3

        overflow-x-auto

        px-4
        pb-2

        scrollbar-hide
        
        lg:hidden
      "
    >


      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() =>
            onChange(category.id)
          }
          className={`
            whitespace-nowrap

            rounded-xl

            px-5
            py-2

            text-sm
            font-semibold

            transition

            ${
              activeCategory === category.id
                ? "text-white"
                : "bg-white text-slate-700 "
            }
          `}
          style={
            activeCategory === category.id
              ? {
                  background:
                    "var(--primary)",
                }
              : undefined
          }
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CompactCategoryTabs;
