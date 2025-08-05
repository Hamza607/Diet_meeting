// components/FilterScrollGroup.tsx
import React, { useRef, useEffect, useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import type { IFilterScrollGroupProps } from "@types";


const CommonFilterScroll: React.FC<IFilterScrollGroupProps> = ({
    items,
    selected,
    onSelect,
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

    const scroll = (dir: "left" | "right") => {
        if (scrollRef.current) {
            const amount = dir === "left" ? -200 : 200;
            scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
            setTimeout(checkScrollPosition, 300);
        }
    };

    const checkScrollPosition = () => {
        if (scrollRef.current) {
            setShowLeftArrow(scrollRef.current.scrollLeft > 0);
        }
    };

    useEffect(() => {
        checkScrollPosition();
    }, []);

    return (
        <Box className="relative flex items-center w-full">
            {showLeftArrow && (
                <IconButton
                    onClick={() => scroll("left")}
                    className="absolute left-0 z-10 bg-white shadow"
                >
                    <ArrowBackIosIcon className="text-primary-main text-sm" />
                </IconButton>
            )}
            <Box
                ref={scrollRef}
                onScroll={checkScrollPosition}
                className={`${showLeftArrow ? "mx-10" : "mx-0"} flex overflow-x-hidden whitespace-nowrap gap-2 w-full scroll-smooth`}
            >
                {items.map((item) => (
                    <Button
                        key={item}
                        onClick={() => onSelect(item)}
                        className={`rounded-[8px] px-4 min-w-[90px] h-[32px] py-1 text-sm font-medium transition-all shrink-0
              ${selected === item
                                ? "bg-primary-main text-white-main"
                                : "bg-white-light text-primary-main"
                            }`}
                    >
                        {item}
                    </Button>
                ))}
            </Box>
            <IconButton
                onClick={() => scroll("right")}
                className="absolute right-0 z-10 bg-white-main shadow"
            >
                <ArrowForwardIosIcon className="text-primary-main text-sm" />
            </IconButton>
        </Box>
    );
};

export default CommonFilterScroll;
