import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@layouts";
import { HomeScreen } from "@modules";
import { COLORS } from "@constants";

const HomeContainer: React.FC = () => {
  const navigate = useNavigate();
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const [activeKey, setActiveKey] = useState<string | string[]>("");

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const sliderSettings = {
    className: "slider variable-width",
    dots: false,
    nextArrow: false,
    prevArrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
  };
  const panelStyle = (key: string) => ({
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
      <HomeScreen
        scrollToHowItWorks={scrollToHowItWorks}
        howItWorksRef={howItWorksRef}
        scrollToTop={scrollToTop}
        sliderSettings={sliderSettings}
        navigate={navigate}
        panelStyle={panelStyle}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      />
    </AppLayout>
  );
};

export default HomeContainer;
