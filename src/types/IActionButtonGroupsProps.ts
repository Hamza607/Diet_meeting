interface ActionButton {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

interface IActionButtonsGroupProps {
  buttons: ActionButton[];
  className?: string;
}

export type {IActionButtonsGroupProps}