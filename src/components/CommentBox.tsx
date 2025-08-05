import React, { Fragment, useState } from "react";
import { Box } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { COLORS, COMMENT_REPLIES_ITEMS } from "@constants";
import { Collapse } from "antd";
import type { ICommentBox } from "@types";
import { EditDeletePopup, ReportPopup, UserComment } from "@components";

const CommentBox: React.FC<ICommentBox> = ({
  id,
  avatar,
  username,
  time,
  comment,
  replies,
  //   handleClick,
}) => {
  const [reply, setReply] = useState(false);
  const [activeKey, setActiveKey] = useState<string | string[]>("");
  const [reportPopup, setReportPopup] = useState<HTMLButtonElement | null>(
    null
  );
  const [editDeletePopup, setEditDeletePopup] =
    useState<HTMLButtonElement | null>(null);

  const panelStyle = () => ({
    backgroundColor: COLORS.transparent,
  });
  const handleReplyClick = () => {
    setReply(!reply);
    if (!reply) {
      setActiveKey("1");
    }
  };
  const handleOptionsClick = (e: any) => {
    if (id === "1") {
      setEditDeletePopup(e.currentTarget);
    } else {
      setReportPopup(e.currentTarget);
    }
  };

  return (
    <Fragment>
      <Box id={id}>
        <UserComment
          id={id}
          avatar={avatar}
          username={username}
          time={time}
          comment={comment}
          reply
          replyValue={reply}
          handleReplyClick={handleReplyClick}
          handleOptionsClick={handleOptionsClick}
        />
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <Box className="mb-1 cursor-pointer">
              <ArrowBackIosNewIcon
                className={`text-secondary-main sm:text-lg text-base ${
                  isActive ? "rotate-90" : "rotate-[-90deg]"
                }`}
              />
            </Box>
          )}
          expandIconPosition="start"
          items={COMMENT_REPLIES_ITEMS({
            replies: replies,
            style: panelStyle,
            reply: reply,
            handleOptionsClick: handleOptionsClick,
          })}
          className="!bg-transparent ml-[2.75rem] pt-0"
          collapsible="header"
          activeKey={activeKey}
          onChange={setActiveKey}
        />
      </Box>
      {/* modals & popups */}
      <ReportPopup setAnchorEl={setReportPopup} anchorEl={reportPopup} />
      <EditDeletePopup
        setAnchorEl={setEditDeletePopup}
        anchorEl={editDeletePopup}
      />
    </Fragment>
  );
};

export default CommentBox;
