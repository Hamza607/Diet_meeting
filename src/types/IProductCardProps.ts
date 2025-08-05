interface IProductCardProps {
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

export type { IProductCardProps };
