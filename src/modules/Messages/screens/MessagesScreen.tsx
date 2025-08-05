import React from "react";
import { Box, Typography } from "@mui/material";
import { CHATS_DATA, MESSAGES_DATA } from "@constants";
import {
  ChatCard,
  ChatProfileInfo,
  MessageCard,
  SendMessageCard,
} from "@messagesComponents";
import type { IMessageScreen } from "@types";

const MessagesScreen: React.FC<IMessageScreen> = ({ chatId }) => {
  return (
    <Box>
      <Typography className="text-[2em] font-poppins-bold font-bold text-black-main mb-2">
        Messages
      </Typography>
      <Box className="h-full flex">
        <Box
          className={`lg:h-[calc(100vh-160px)] md:h-[calc(100vh-210px)] h-[calc(100vh-196px)] overflow-y-auto scroll-smooth lg:w-[380px] w-full py-1 no-scrollbar lg:relative lg:transition-none lg:duration-0 absolute transition-all duration-500 ease-in-out ${
            chatId ? "lg:left-0 left-[-110%]" : "left-0"
          }`}
        >
          {CHATS_DATA.map((chat, index) => {
            const { id, avatar, userName, message, time } = chat;
            return (
              <ChatCard
                key={index}
                active={id === "1" ? true : false}
                unread={id === "2" ? true : false}
                className={id === "10" ? "!border-b-0" : ""}
                id={id}
                avatar={avatar}
                userName={userName}
                message={message}
                time={time}
              />
            );
          })}
        </Box>
        {chatId && (
          <Box
            className={`lg:h-[calc(100vh-160px)] md:h-[calc(100vh-210px)] h-[calc(100vh-196px)] overflow-y-auto scroll-smooth lg:w-[calc(100%-380px)] w-full ml-auto no-scrollbar lg:relative lg:transition-none lg:duration-0 absolute transition-all duration-500 ease-in-out ${
              chatId ? "right-0" : "lg:right-0 right-[-100%]"
            }`}
          >
            <ChatProfileInfo
              avatar={"https://randomuser.me/api/portraits/men/32.jpg"}
              username={"Jennifer Markus"}
            />
            <Box className="pt-[1.5em] pl-[1.5em] pr-[1em]">
              {MESSAGES_DATA.map((item, index) => {
                const { date, messages } = item;
                return (
                  <Box key={index} className="sm:mb-[3em] mb-[2em]">
                    <Typography className="text-xs mb-[1.5em] text-center">
                      {date}
                    </Typography>
                    {messages.map((item, index) => {
                      const { id, userId, message, time } = item;
                      return (
                        <MessageCard
                          key={index}
                          id={id}
                          userId={userId}
                          message={message}
                          time={time}
                        />
                      );
                    })}
                  </Box>
                );
              })}
            </Box>
            <SendMessageCard />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MessagesScreen;
