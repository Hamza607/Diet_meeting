import React from "react";
import { AppLayout } from "@layouts";
import { FAQScreen } from "@modules";
import { COLORS } from "@constants";

const FAQContainer: React.FC = () => {
  const panelStyle = ({
    key,
    activeKey,
  }: {
    key: string;
    activeKey: string | string[];
  }) => ({
    background: COLORS.white.hard,
    borderRadius: 18,
    padding: "28px 10px",
    boxShadow: `0px 5px 16px 0px ${COLORS.primary.dimmest}`,
    width: "100%",
    maxWidth: 1250,
    margin: "0 auto 24px",
    border: `1px solid ${
      activeKey === key || (Array.isArray(activeKey) && activeKey.includes(key))
        ? COLORS.primary.main
        : COLORS.white.hard
    }`,
  });
  return (
    <AppLayout>
      <FAQScreen panelStyle={panelStyle} />
    </AppLayout>
  );
};

export default FAQContainer;
