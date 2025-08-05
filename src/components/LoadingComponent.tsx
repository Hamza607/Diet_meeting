import React from "react";
import { COLORS } from "@constants";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingComponent: React.FC = () => {
  return (
    <Spin
      fullscreen
      indicator={
        <LoadingOutlined
          style={{ fontSize: 34, color: COLORS.primary.main }}
          spin
        />
      }
    />
  );
};

export default LoadingComponent;
