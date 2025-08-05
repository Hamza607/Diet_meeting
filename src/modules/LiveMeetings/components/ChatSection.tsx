import { useNavigate } from "react-router-dom";
import { Avatar, Box, IconButton, TextField, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { ICON, ROUTES } from "@constants";
import { chatData } from "@constants";
import { ReportPopup } from "@components";

const ChatSection = () => {
  const navigate = useNavigate();
  const [reportEl, setReportEl] = useState<HTMLButtonElement | null>(null);
  const [inputValue, setInputValue] = useState("");

  const handleReport = (e: any) => {
    setReportEl(e.currentTarget);
  };

  return (
    <Fragment>
      {/* Chat Section */}
      <Box className="lg:w-[365px] h-[778px] w-full px-2 rounded-[12px] md:ml-1 bg-white-main   flex flex-col border-l border-gray-200">
        <Box className="flex-1 overflow-y-auto p-4 space-y-8">
          {chatData.map((msg) => (
            <Box
              key={msg.id}
              className="flex items-start justify-between gap-2"
            >
              {/* Avatar + text */}
              <Box className="flex items-start gap-2 flex-1">
                <Avatar src={msg.avatar} alt={msg.name} className="w-5 h-5" />
                <Typography
                  variant="body2"
                  className="font-inter-regular text-[10px] text-secondary-thin"
                >
                  <Box component="strong" className="font-inter-bold">
                    {msg.name}
                  </Box>{" "}
                  {msg.message}
                </Typography>
              </Box>

              {/* Right icons */}
              <Box className="flex items-center gap-2">
                <Box
                  component={"img"}
                  src={ICON.DASHBOARD.LIVEMEETINGREAD}
                  alt="Placeholder"
                  className="cursor-pointer"
                  onClick={() => navigate(`${ROUTES.DASHBOARD_MESSAGES_ID}1`)}
                />

                <Box
                  onClick={handleReport}
                  component={"img"}
                  src={ICON.DASHBOARD.VIDEODOT}
                  alt="Placeholder"
                  className="cursor-pointer"
                />
              </Box>
            </Box>
          ))}
        </Box>
        <ReportPopup anchorEl={reportEl} setAnchorEl={setReportEl} />

        {/* Chat Input */}
        <Box className="flex items-center border-t border-gray-200 p-2">
          <TextField
            placeholder="Chat..."
            variant="outlined"
            size="small"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IconButton color="primary">
            <Box
              component={"img"}
              src={ICON.DASHBOARD.LIVEMEETINGSENDCHAT}
              alt="Placeholder"
              className=""
            />
          </IconButton>
        </Box>
      </Box>
    </Fragment>
  );
};

export default ChatSection;
