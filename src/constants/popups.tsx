import { Box, Typography } from "@mui/material";
import { message } from "antd";
import { ICON } from "@constants";

const useMessagePopups = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const successMessage = ({ text }: { text: string }) => {
    messageApi.open({
      type: "success",
      content: (
        <Box className="flex items-center gap-2">
          <Box component="img" src={ICON.DASHBOARD.SUCCESS_MESSAGE_ICON} />
          <Typography className="text-sm">{text}</Typography>
        </Box>
      ),
      className: "custom-message",
      duration: 7,
    });
  };
  const infoMessage = ({ text }: { text: string }) => {
    messageApi.open({
      type: "success",
      content: (
        <Box className="flex items-center gap-2">
          <Box component="img" src={ICON.DASHBOARD.INFO_MESSAGE_ICON} />
          <Typography className="text-sm">{text}</Typography>
        </Box>
      ),
      className: "custom-message",
      duration: 7,
    });
  };
  const errorMessage = ({ text }: { text: string }) => {
    messageApi.open({
      type: "error",
      content: (
        <Box className="flex items-center gap-4">
          <Box component="img" src={ICON.DASHBOARD.ERROR_MESSAGE_ICON} />
          <Typography className="text-sm">{text}</Typography>
        </Box>
      ),
      className: "custom-message",
      duration: 7,
    });
  };

  return { contextHolder, successMessage, infoMessage, errorMessage };
};

export default useMessagePopups;
