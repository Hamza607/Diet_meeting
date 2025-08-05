import { createContext, useContext, useState } from "react";
import type { IForumContext } from "@types";

const ForumContext = createContext<IForumContext>({} as IForumContext);

export const ForumProvider = ({ children }: { children: React.ReactNode }) => {
  const [postCategories, setPostCategories] = useState<string[]>([]);

  const values: IForumContext = {
    postCategories,
    setPostCategories,
  };
  return (
    <ForumContext.Provider value={values}>{children}</ForumContext.Provider>
  );
};

export const useForumContext = () => {
  return useContext(ForumContext);
};
