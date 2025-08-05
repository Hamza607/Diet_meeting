// components/FilterScrollGroup.tsx
import React, { useRef, useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import type { IAppFilterScroll } from "@types";
import { CategoryButton } from "@components";

const AppFilterScroll: React.FC<IAppFilterScroll> = ({
  items,
  selected,
  onSelect,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Delay to update visibility of arrows after scroll
      setTimeout(() => {
        checkScrollPosition();
      }, 300);
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  return (
    <Box className="relative flex items-center w-full gap-2">
      {/* Left Arrow (conditionally visible) */}
      {showLeftArrow && (
        <IconButton
          onClick={() => scroll("left")}
          className="w-[30px] h-[30px] z-10 bg-transparent !shadow-none"
        >
          <ChevronLeftIcon className="text-primary-main text-3xl" />
        </IconButton>
      )}

      {/* Scrollable category list */}
      <Box
        ref={scrollRef}
        onScroll={checkScrollPosition}
        className={`flex overflow-x-hidden whitespace-nowrap gap-3 w-full scroll-smooth`}
      >
        {items.map((item) => {
          const { id, label, className } = item;
          return (
            <CategoryButton
              key={id}
              onClick={() => onSelect(label)}
              type={selected.includes(label) ? "primary" : "secondary"}
              className={className}
            >
              {label}
            </CategoryButton>
          );
        })}
      </Box>

      {/* Right Arrow (conditionally visible) */}
      {showRightArrow && (
        <IconButton
          onClick={() => scroll("right")}
          className="w-[30px] h-[30px] z-10 bg-transparent"
        >
          <ChevronRightIcon className="text-primary-main text-3xl" />
        </IconButton>
      )}
    </Box>
  );
};

export default AppFilterScroll;
