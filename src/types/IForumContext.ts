interface IForumContext {
  postCategories: string[];
  setPostCategories: (postCategories: string[]) => void;
}

export type { IForumContext };
