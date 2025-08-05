import React, { useRef, useState, useEffect } from "react";
import { Box, Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const categories = [
    "All",
    "Keto / Carnivore",
    "Vegetarian / Vegan",
    "Paleo",
    "Mediterranean",
    "Gluten-Free",
    "Low Carb / Sugar",
    "Intermittent Fasting",
    "GLP - 1 / Semaglutide",
    "Dairy-Free",
    "Doctor-Prescribed Diet",
    "Calorie Counters",
];

const CategoryScroll: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<string[]>(["All"]);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

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
            setShowLeftArrow(scrollRef.current.scrollLeft > 0);
        }
    };

    useEffect(() => {
        checkScrollPosition();
    }, []);

    const handleToggle = (cat: string) => {
        setSelected((prev) =>
            prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
        );
    };

    return (
        <Box className="relative flex items-center w-full gap-2 py-3">
            {/* Left Arrow (conditionally visible) */}
            {showLeftArrow && (
                <IconButton
                    onClick={() => scroll("left")}
                    className="absolute left-0 z-10 bg-white-main shadow-md"
                >
                    <ArrowBackIosIcon className="text-primary-main text-sm" />
                </IconButton>
            )}

            {/* Scrollable category list */}
            <Box
                ref={scrollRef}
                onScroll={checkScrollPosition}
                className={`${showLeftArrow ? "mx-10" : "mx-0"} flex overflow-x-hidden whitespace-nowrap gap-2 w-full scroll-smooth`}
            >
                {categories.map((cat, i) => (
                    <Button
                        key={i}
                        onClick={() => handleToggle(cat)}
                        className={`rounded-[8px] px-4 py-1 text-sm font-medium transition-all shrink-0
              ${selected.includes(cat)
                                ? "bg-primary-main text-white-main"
                                : "bg-white-light text-primary-main"
                            }`}
                    >
                        {cat}
                    </Button>
                ))}
            </Box>

            {/* Right Arrow */}
            <IconButton
                onClick={() => scroll("right")}
                className="absolute right-0 z-10 bg-white-main shadow-md"
            >
                <ArrowForwardIosIcon className="text-primary-main text-sm" />
            </IconButton>
        </Box>
    );
};

export default CategoryScroll;
