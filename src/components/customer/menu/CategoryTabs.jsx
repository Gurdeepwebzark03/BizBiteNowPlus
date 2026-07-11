import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

import HorizontalScroller from "../common/HorizontalScroller";
import Chip from "../common/Chip";

const CategoryTabs = ({
  categories = [],
  activeCategory = "",
  onChange,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const activeButton =
      containerRef.current?.querySelector(
        `[data-category="${activeCategory}"]`
      );

    activeButton?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeCategory]);

  return (
    <div
      className="
        sticky
        top-16
        z-30

        border-b
        border-slate-200

        bg-white/90

        backdrop-blur-xl
      "
    >
      <div
        ref={containerRef}
        className="px-4 py-4 lg:px-6"
      >
        <HorizontalScroller
          showControls={false}
          gap="gap-3"
        >
          {categories.map((category) => {
            const active =
              activeCategory ===
              category.id;

            return (
              <div
                key={category.id}
                data-category={category.id}
                className="shrink-0"
              >
                <Chip
                  selected={active}
                  onClick={() =>
                    onChange?.(
                      category.id
                    )
                  }
                  className={`
                    px-5
                    py-3

                    font-semibold

                    ${
                      active
                        ? "shadow-lg"
                        : ""
                    }
                  `}
                  label={
                    <div className="flex items-center gap-2">
                      {category.icon && (
                        <span className="text-base">
                          {category.icon}
                        </span>
                      )}

                      <span>
                        {category.name}
                      </span>

                      {active && (
                        <ChevronRight
                          size={16}
                          strokeWidth={
                            2.5
                          }
                        />
                      )}
                    </div>
                  }
                />
              </div>
            );
          })}
        </HorizontalScroller>
      </div>
    </div>
  );
};

export default CategoryTabs;