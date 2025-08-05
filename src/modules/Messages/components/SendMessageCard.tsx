import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Input } from "antd";
import { ICON, useMessagePopups } from "@constants";

const SendMessageCard: React.FC = () => {
  const { contextHolder, errorMessage } = useMessagePopups();
  const [message, setMessage] = useState("");
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.trimStart();
    setMessage(value);
  };
  const handleSendMessage = () => {
    console.log(message);
    errorMessage({
      text: "Unable to send message. Please check your connection and try again ",
    });
    setMessage("");
  };
  return (
    <Box className="p-[1em] sticky bottom-0 bg-white-main">
      {contextHolder}
      <Box className="w-full lg:max-w-[705px] mx-auto flex items-center gap-2">
        <Input.TextArea
          placeholder="Type message..."
          className="!min-h-[44px] border-secondary-light !bg-white-main rounded text-[14px] font-medium font-inter-medium text-black-main !shadow-none placeholder:text-secondary-thin hover:border-primary-main focus:border-primary-main pt-[10px] pb-0 px-4"
          value={message}
          onChange={handleChangeMessage}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.ctrlKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          autoSize={{ minRows: 1, maxRows: 5 }}
        />
        <IconButton
          className={`w-[42px] h-[42px] rounded-full ${
            message ? "bg-primary-main" : "bg-gray-thinner cursor-not-allowed"
          }`}
          onClick={() => {
            if (message) {
              handleSendMessage();
            }
          }}
        >
          <Box
            component="img"
            src={
              message
                ? ICON.DASHBOARD.SEND_ICON
                : ICON.DASHBOARD.SEND_ICON_DISABLED
            }
            alt=""
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SendMessageCard;
