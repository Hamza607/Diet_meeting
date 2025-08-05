interface ICardProps {
  thumbnail?: string;
  duration?: string;
  live?: string;
  title?: string;
  creator: {
    avatar: string;
    name: string;
  };
  postedAt?: string;
  tags: string[];
  showBookmark?: boolean;
  starFilled?: boolean;
  link?: any;
  data?: any;
  liveMeeting?: boolean;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export type { ICardProps };
