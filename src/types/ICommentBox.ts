interface ICommentBox {
  id: string;
  avatar: string;
  username: string;
  time: string;
  comment: string;
  handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  replies: {
    id: string;
    avatar: string;
    username: string;
    time: string;
    comment: string;
  }[];
}

export type { ICommentBox };
