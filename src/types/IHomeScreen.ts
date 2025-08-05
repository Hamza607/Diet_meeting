import React from "react";
import type { NavigateFunction } from "react-router-dom";

interface IHomeScreen {
  scrollToHowItWorks: () => void;
  howItWorksRef: React.RefObject<HTMLDivElement | null>;
  scrollToTop: () => void;
  sliderSettings: object;
  navigate: NavigateFunction;
  panelStyle: (key: string) => React.CSSProperties;
  activeKey: string | string[];
  setActiveKey: (key: string | string[]) => void;
}

export type { IHomeScreen };
