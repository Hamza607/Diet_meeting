import React from "react";

interface IFAQScreen {
  panelStyle: ({
    key,
    activeKey,
  }: {
    key: string;
    activeKey: string | string[];
  }) => React.CSSProperties;
}

export type { IFAQScreen };
