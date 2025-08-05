interface IFavoritesScreen {
  activeCategory: string;
  handleCategoryClick: (category: string) => void;
  favoritesCategories: {
    id: string;
    label: string;
    className: any;
  }[];
}

export type { IFavoritesScreen };
