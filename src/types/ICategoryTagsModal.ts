interface ICategoryTagsModal {
  open: boolean;
  onClose: () => void;
  categories: string[];
  handleCategoryClick: (category: string) => void;
}

export type { ICategoryTagsModal };
