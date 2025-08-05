interface IRestrictionCard {
  title: string;
  description: string;
  image: string;
  active: boolean;
  handleClick: () => void;
}

export type { IRestrictionCard };
