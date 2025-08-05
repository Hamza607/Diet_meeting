interface IMeetingCardProps {
  id?: number;
  isRemindable?: boolean;
  date: string;
  title: string;
  creator: {
    name: string;
    avatar: string;
  };
  tags: string[];
  showBorder?: boolean;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type { IMeetingCardProps };
