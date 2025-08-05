import { Box, Button } from "@mui/material";
import { ICON, ROUTES } from "@constants";
import { AppPopover } from "@components";
import { Fragment, useEffect, useState } from "react";
import { DeleteTableDataModal, ScheduleTimeModal } from "@contentHubComponents";
import { useNavigate } from "react-router-dom";

const ContentHubTablePopup = ({ setAnchorEl, anchorEl }: any) => {
  const [publish, setPublish] = useState("schedule");
  const [schduleModal, setSchduleModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [unpublish, setUnPublish] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popovervideo" : undefined;

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  return (
    <Fragment>
      <AppPopover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
        <Box className={`w-[238px]`}>
          {/* Actions */}
          <Box className="">
            <Box className="flex flex-col ">
              <Button
                onClick={() =>
                  navigate(`${ROUTES.DASHBOARD_UPLOAD_CONTENT}?id=1`)
                }
                className="justify-start text-left gap-1 py-4 px-4 text-sm font-inter-semibold text-secondary-main"
                startIcon={
                  <Box
                    component={"img"}
                    src={ICON.PROFILE.EDIT_ICON}
                    className="w-[20px] h-[20px]"
                    alt="profile"
                  />
                }
              >
                {"Edit Details"}
              </Button>
              <Button
                onClick={() => {
                  if (publish == "unpublish") {
                    // setSchduleModal(true);
                    setAnchorEl(null);
                    setPublish("publish");
                  } else if (publish == "publish") {
                    setUnPublish(true);
                    setAnchorEl(null);
                    setPublish("schedule");
                  } else {
                    setSchduleModal(true);
                    setAnchorEl(null);
                    setPublish("unpublish");
                  }
                }}
                className="justify-start text-left gap-1 py-4 px-4 text-sm font-inter-semibold text-secondary-main"
                startIcon={
                  <Box
                    component={"img"}
                    src={
                      publish === "schedule"
                        ? ICON.CONTENTHUB.EDITSCHEDULETIME
                        : publish === "unpublish"
                        ? ICON.CONTENTHUB.PUBLISHICON
                        : publish === "publish"
                        ? ICON.CONTENTHUB.UNPUBLISHICON
                        : ""
                    }
                    className="w-[20px] h-[20px]"
                    alt="logout"
                  />
                }
              >
                {publish == "publish"
                  ? "Unpublish"
                  : publish == "schedule"
                  ? " Edit Schedule Time"
                  : "Publish"}
              </Button>
              <Button
                onClick={() => {
                  setDeleteModal(true);
                  setAnchorEl(null);
                }}
                className="justify-start text-left gap-1 py-4 px-4 text-sm font-inter-semibold text-secondary-main"
                startIcon={
                  <Box
                    component={"img"}
                    src={ICON.CONTENTHUB.DELETETICON}
                    className="w-[20px] h-[20px]"
                    alt="logout"
                  />
                }
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      </AppPopover>
      <ScheduleTimeModal
        open={schduleModal}
        onClose={() => setSchduleModal(false)}
      />
      <DeleteTableDataModal
        open={deleteModal}
        text={
          " If you delete this content, it will not appear on this list anymore."
        }
        buttontext="Delete Content"
        onClose={() => setDeleteModal(false)}
      />
      <DeleteTableDataModal
        open={unpublish}
        text={
          " If you unpublish this content, it will not appear on the search results anymore."
        }
        buttontext="Unpublish Content"
        onClose={() => setUnPublish(false)}
      />
    </Fragment>
  );
};

export default ContentHubTablePopup;
