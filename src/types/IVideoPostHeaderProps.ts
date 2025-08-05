interface IVideoPostHeaderProps {
  categories: string[];
  title: string;
  creator: {
    name: string;
    avatar: string;
    subscribers: number;
  };
  postedAt: string;
  description: string;
  groupButtons?: any;
  user?: any;
}

export type { IVideoPostHeaderProps };
