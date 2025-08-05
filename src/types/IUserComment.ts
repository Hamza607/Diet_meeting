interface IUserComment {
  id: string;
  avatar: string;
  username: string;
  time: string;
  comment: string;
  reply?: boolean;
  replyValue?: boolean;
  handleReplyClick?: () => void;
  handleOptionsClick?: (e: any) => void;
}

export type { IUserComment };
