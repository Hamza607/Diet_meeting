interface IChatCard {
  active?: boolean;
  unread?: boolean;
  id: string;
  avatar: string;
  userName: string;
  message: string;
  time: string;
  className?: string;
}

export type { IChatCard };
