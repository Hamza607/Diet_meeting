interface IWeightCard {
  id: string;
  type: "bordered" | "primary";
  title: string;
  weightColor?: string;
  weight: number | string;
  unit: string;
  edit?: boolean;
  editAction?: () => void;
}

export type { IWeightCard };
