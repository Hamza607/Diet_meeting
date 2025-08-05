interface IAppFilterScroll {
  items: { id: string; label: string; className: string }[];
  selected: string[];
  onSelect: (val: string) => void;
}

export type { IAppFilterScroll };
