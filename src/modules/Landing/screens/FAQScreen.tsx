import React from "react";
import { Box, Typography } from "@mui/material";
import { Collapse } from "antd";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import type { IFAQScreen } from "@types";
import { useAppContext } from "@context";
import { FAQS_DATA } from "@constants";

const FAQScreen: React.FC<IFAQScreen> = ({ panelStyle }) => {
  const {
    generalActiveKey,
    setGeneralActiveKey,
    meetingsActiveKey,
    setMeetingsActiveKey,
    profileActiveKey,
    setProfileActiveKey,
    communityActiveKey,
    setCommunityActiveKey,
    subscriptionActiveKey,
    setSubscriptionActiveKey,
  } = useAppContext();
  return (
    <Box className="px-[1em] md:py-[8em] sm:py-[5em] py-[3em] bg-white-light">
      <Typography variant="h1" className="mb-[2em] text-center">
        Frequently Asked Questions
      </Typography>
      <Box className="w-full max-w-[1250px] mx-auto">
        {FAQS_DATA.map((item, index) => {
          const { id, title, items } = item;
          return (
            <Box key={index} id={id}>
              <Typography
                variant="h1"
                className="lg:text-[2.5em] sm:text-[1.5em] text-[1.25em] mt-[1em] mb-[0.75em]"
              >
                {title}
              </Typography>
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                  <Box
                    className={`sm:w-[50px] sm:h-[50px] w-[32px] h-[32px] rounded-full bg-white-hard basic-shadow flex items-center justify-center`}
                  >
                    <ArrowBackIosNewIcon
                      className={`text-secondary-main sm:text-2xl text-base ${
                        isActive ? "rotate-90" : "rotate-[-90deg]"
                      }`}
                    />
                  </Box>
                )}
                expandIconPosition="end"
                items={items(panelStyle)}
                activeKey={
                  id === "1"
                    ? generalActiveKey
                    : id === "2"
                    ? meetingsActiveKey
                    : id === "3"
                    ? profileActiveKey
                    : id === "4"
                    ? communityActiveKey
                    : subscriptionActiveKey
                }
                onChange={
                  id === "1"
                    ? setGeneralActiveKey
                    : id === "2"
                    ? setMeetingsActiveKey
                    : id === "3"
                    ? setProfileActiveKey
                    : id === "4"
                    ? setCommunityActiveKey
                    : setSubscriptionActiveKey
                }
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default FAQScreen;
