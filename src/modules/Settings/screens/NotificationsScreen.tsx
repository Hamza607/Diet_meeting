import React from "react";
import { Box, Typography } from "@mui/material";
import { Switch } from "antd";

const NotificationsScreen: React.FC = () => {
  return (
    <Box className="w-full max-w-[680px]">
      <Typography className="font-inter-bold font-bold">
        In-app Notifications
      </Typography>
      <Box className="flex justify-between items-center gap-4 py-[1em]">
        <Typography className="sm:text-[15px] text-sm text-secondary-thin">
          Turn on all In-app notifications or select individually.
        </Typography>
        <Switch
          defaultChecked
          className="min-w-[34px] h-[20px] !bg-secondary-light aria-checked:!bg-primary-main"
        />
      </Box>
      <Box className="flex justify-between items-center gap-4 py-[1em]">
        <Typography className="sm:text-[15px] text-sm">
          New content uploads from subscribed coaches
        </Typography>
        <Switch
          defaultChecked
          className="min-w-[34px] h-[20px] !bg-secondary-light aria-checked:!bg-primary-main"
        />
      </Box>
      <Box className="flex justify-between items-center gap-4 py-[1em]">
        <Typography className="sm:text-[15px] text-sm">
          Live meeting reminders
        </Typography>
        <Switch
          defaultChecked
          className="min-w-[34px] h-[20px] !bg-secondary-light aria-checked:!bg-primary-main"
        />
      </Box>
      <Box className="flex justify-between items-center gap-4 py-[1em]">
        <Typography className="sm:text-[15px] text-sm">
          Comment Replies
        </Typography>
        <Switch
          defaultChecked
          className="min-w-[34px] h-[20px] !bg-secondary-light aria-checked:!bg-primary-main"
        />
      </Box>
      <Box className="flex justify-between items-center gap-4 py-[1em]">
        <Typography className="sm:text-[15px] text-sm">New Messages</Typography>
        <Switch
          defaultChecked
          className="min-w-[34px] h-[20px] !bg-secondary-light aria-checked:!bg-primary-main"
        />
      </Box>
      <Typography className="font-inter-bold font-bold mt-8">
        Email Notifications
      </Typography>
      <Box className="flex justify-between items-center gap-4 py-[1em]">
        <Typography className="sm:text-[15px] text-sm text-secondary-thin">
          Turn on all In-app notifications or select individually.
        </Typography>
        <Switch
          defaultChecked
          className="min-w-[34px] h-[20px] !bg-secondary-light aria-checked:!bg-primary-main"
        />
      </Box>
      <Box className="flex justify-between items-center gap-4 py-[1em]">
        <Typography className="sm:text-[15px] text-sm">
          Live meeting reminders
        </Typography>
        <Switch
          defaultChecked
          className="min-w-[34px] h-[20px] !bg-secondary-light aria-checked:!bg-primary-main"
        />
      </Box>
      <Box className="flex justify-between items-center gap-4 py-[1em]">
        <Typography className="sm:text-[15px] text-sm">
          Comment Replies
        </Typography>
        <Switch
          defaultChecked
          className="min-w-[34px] h-[20px] !bg-secondary-light aria-checked:!bg-primary-main"
        />
      </Box>
      <Box className="flex justify-between items-center gap-4 py-[1em]">
        <Typography className="sm:text-[15px] text-sm">New Messages</Typography>
        <Switch
          defaultChecked
          className="min-w-[34px] h-[20px] !bg-secondary-light aria-checked:!bg-primary-main"
        />
      </Box>
    </Box>
  );
};

export default NotificationsScreen;
