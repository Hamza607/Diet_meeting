import React, { useState } from "react";
import { DashboardLayout } from "@layouts";
import { FavoritesScreen } from "@modules";

const FavoritesContainer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };
  const favoritesCategories = [
    {
      id: "1",
      label: "All",
      className: "sm:w-[90px]",
    },
    {
      id: "2",
      label: "Keto / Carnivore",
      className: "sm:w-[187px]",
    },
    {
      id: "3",
      label: "Paleo",
      className: "sm:w-[111px]",
    },
  ];
  return (
    <DashboardLayout>
      <FavoritesScreen
        activeCategory={activeCategory}
        handleCategoryClick={handleCategoryClick}
        favoritesCategories={favoritesCategories}
      />
    </DashboardLayout>
  );
};

export default FavoritesContainer;
