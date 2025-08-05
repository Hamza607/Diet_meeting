interface IRestrictionsScreen {
  categories: string[];
  handleCategoryClick: (category: string) => void;
  handleNextButton: () => void;
  handleBackButton: () => void;
  handleSkipButton: () => void;
}

export type { IRestrictionsScreen };
