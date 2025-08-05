import { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { ICON, ROUTES } from "@constants";
import { AppButton } from "@components";
import { useNavigate } from "react-router-dom";

const LiveButton = ({ handleShareClick }: any) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      {false ? (
        <AppButton
          className="!h-[48px] mt-4"
          onClick={() =>
            navigate(
              `${ROUTES.DASHBOARD_STAR_LIVE_MEETING_LIVE.replace(
                ":id",
                String("1")
              )}`
            )
          }
        >
          <Box className="flex items-center gap-2">
            <Box
              component={"img"}
              src={ICON.CONTENTHUB.GOLIVE}
              className="w-[20px] h-[20px]"
            />
            <Typography className="text-white-main font-inter-medium">
              Go Live
            </Typography>
          </Box>
        </AppButton>
      ) : (
        <Box className="flex items-center gap-4 mt-4">
          <AppButton
            className="!h-[48px] "
            onClick={() =>
              navigate(
                `${ROUTES.DASHBOARD_STAR_LIVE_MEETING_LIVE.replace(
                  ":id",
                  String("1")
                )}`
              )
            }
          >
            <Box className="flex items-center gap-2">
              <Box
                component={"img"}
                src={ICON.STARLIVEMEETING.STARTMEETINGICON}
              ></Box>

              <Typography className="text-white-main font-inter-medium">
                Start Meeting
              </Typography>
            </Box>
          </AppButton>
          <AppButton
            styleType="bordered"
            className="!w-[52px]"
            onClick={handleShareClick}
          >
            <Box
              component={"img"}
              src={ICON.CONTENTHUB.SHARE}
              className="w-[20px] h-[20px]"
            />
          </AppButton>
        </Box>
      )}
    </Fragment>
  );
};

export default LiveButton;
