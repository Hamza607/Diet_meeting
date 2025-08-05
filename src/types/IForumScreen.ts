import type { NavigateFunction } from "react-router-dom";

interface IForumScreen {
  navigate: NavigateFunction;
  sortBy: string;
  handleSelectSortBy: (sortBy: string) => void;
}

export type { IForumScreen };
