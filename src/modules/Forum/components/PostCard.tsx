import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import { BiLike, BiDislike } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { LuShare2 } from "react-icons/lu";
import { PiWarningCircle } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";
import type { IPostCard } from "@types";
import { useAppContext } from "@context";
import { ICON, ROUTES } from "@constants";
import { AppButton, CategoryButton, EditDeletePopup } from "@components";

const PostCard: React.FC<IPostCard> = ({ id, onClick }) => {
  const location = useLocation();
  const { handleReportModalOpen, handleShareClick } = useAppContext();
  const tags = ["Keto / Carnivore", "Paleo"];
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [editDeletePopup, setEditDeletePopup] =
    useState<HTMLButtonElement | null>(null);

  return (
    <Fragment>
      <Box id={id} className="mb-[2.5em] z-[0]" onClick={onClick}>
        <Box
          className={`w-full ${
            id !== "1" ? "max-w-[400px]" : "items-start"
          } flex flex-wrap items-center justify-between`}
        >
          <Box className="flex items-center mb-2">
            <Box
              component="img"
              src={"https://randomuser.me/api/portraits/men/32.jpg"}
              alt=""
              className="w-[35px] h-[35px] rounded-full mr-2"
            />
            <Box>
              <Typography className="text-xs text-gray-light font-inter-bold font-bold mb-[0.25em]">
                Morgan Nolte
              </Typography>
              {id !== "1" && (
                <Typography className="text-xs text-gray-light">
                  47 Subscribers
                </Typography>
              )}
            </Box>
          </Box>
          {id === "1" ? (
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setEditDeletePopup(e.currentTarget);
              }}
            >
              <Box
                component={"img"}
                src={ICON.DASHBOARD.VIDEODOT}
                alt="more options"
              />
            </IconButton>
          ) : (
            <AppButton
              styleType={isSubscribed ? "bordered" : "primary"}
              className="max-w-[175px] !h-[35px] ml-auto"
              onClick={(e) => {
                e.stopPropagation();
                setIsSubscribed(!isSubscribed);
              }}
            >
              <Box
                component="img"
                src={
                  isSubscribed
                    ? ICON.FORUM.UNSUBSCRIBE_ICON
                    : ICON.FORUM.SUBSCRIBE_ICON
                }
                alt=""
                className="mr-2"
              />
              {isSubscribed ? "Unsubscribe" : "Subscribe"}
            </AppButton>
          )}
        </Box>
        <Typography className="text-xs text-secondary-thin">
          42 minutes ago
        </Typography>
        <Box className="flex items-center mt-3">
          <Typography className="sm:text-xl text-base font-poppins-bold font-bold">
            How to Test glucose and Ketones With the Keto Mojo Device
          </Typography>
          <AppButton
            styleType="primary"
            className="!h-[35px] sm:w-full sm:max-w-[144px] w-max ml-3"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Box
              component="img"
              src={ICON.FORUM.VIDEO_ICON}
              alt=""
              className="sm:mr-2"
            />
            <Box component="span" className="sm:inline-block hidden">
              Go to Video
            </Box>
          </AppButton>
        </Box>
        <Typography className="my-3 sm:text-base text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat. In iaculis arcu eros, eget tempus orci facilisis id.
        </Typography>
        {location.pathname === ROUTES.DASHBOARD_FORUM_POST_DETAILS && (
          <Box className="bg-white-light rounded-xl flex flex-col gap-y-3 p-[0.75rem] my-4 sm:!shadow-none modal-shadow">
            <Box className="flex sm:gap-6 gap-4">
              <Box>
                <Box
                  component="img"
                  src={
                    "https://m.media-amazon.com/images/I/6187uc04PlL._SX522_.jpg"
                  }
                  alt=""
                  className="w-[150px] h-full rounded-xl object-cover"
                />
              </Box>
              <Box>
                <Typography className="text-xl font-poppins-bold font-bold mb-2">
                  Mojo Device
                </Typography>
                <Typography className="text-xs font-inter-regular font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </Typography>
              </Box>
            </Box>
            <AppButton
              className="!h-[35px] max-w-[150px]"
              onClick={(e) => {
                e.stopPropagation();
                window.open(
                  "https://www.amazon.com/Professional-Monitoring-Ketosis-Portable-Analyzer/dp/B0F8BMH9P1/ref=sr_1_4_sspa?crid=15GH3VDVO9O33&dib=eyJ2IjoiMSJ9.q8H8GC-ZepD-w2ByqYmPUIVMo-5dgcBiL_ZaE039WCbhcrCRHMezujlsYq6RlzZEeh5PtXYLoIcTtjTnN9kRay1KCX3XgZcCF6FNPMp3btzTWnR9yzeGYRlrPUc2xeiIEq_sVVLD5WB-BOf56dToSWWrV_ryLAWH5wHtFII3hctPX-4mxg69TBPbYmuNUm0qK5RXBeqkv7eJh8SVpprmDpB1EKqbjCKZyz1bkTQjPOmmlEA2P5PPXn3MxZkV0IW0mctW3jM21cuebhWemridj0teshKOo068FdHOFS_ui9Y.qbbyAkimxxMWKLwaHBuv1ZBW6_AQSq7nK2o-rrWUGG0&dib_tag=se&keywords=keto%2Bmojo%2Bdevice&qid=1750885934&sprefix=mojo%2Bdev%2Caps%2C379&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
                  "_blank"
                );
              }}
            >
              <FiShoppingCart className="mr-2" />
              Shop Now
            </AppButton>
          </Box>
        )}
        <Box className="flex gap-2">
          {tags.map((tag, index) => (
            <CategoryButton
              key={index}
              type="secondary"
              className="h-[33px] pointer-events-none cursor-default"
            >
              {tag}
            </CategoryButton>
          ))}
        </Box>
        <Box className="flex sm:gap-4 gap-2 mt-4">
          <AppButton
            styleType="bordered"
            className="w-max !h-[35px]"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <BiLike className="sm:mr-2 mr-1" />
            <Box component="span">100</Box>
          </AppButton>
          <AppButton
            styleType="bordered"
            className="w-max !h-[35px]"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <BiDislike />
          </AppButton>
          <AppButton
            styleType="bordered"
            className="w-max !h-[35px]"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <BsChat className="sm:mr-2 mr-1" />
            <Box component="span">32</Box>
          </AppButton>
          <AppButton
            styleType="bordered"
            className="w-max !h-[35px]"
            onClick={(e) => {
              e.stopPropagation();
              handleShareClick();
            }}
          >
            <LuShare2 className="sm:mr-2" />
            <Box component="span" className="sm:inline-block hidden">
              Share
            </Box>
          </AppButton>
          {id !== "1" && (
            <AppButton
              styleType="bordered"
              className="w-max !h-[35px]"
              onClick={(e) => {
                e.stopPropagation();
                handleReportModalOpen();
              }}
            >
              <PiWarningCircle className="sm:mr-2 text-xl" />
              <Box component="span" className="sm:inline-block hidden">
                Report
              </Box>
            </AppButton>
          )}
        </Box>
      </Box>
      {/* modal & popups */}
      <EditDeletePopup
        setAnchorEl={setEditDeletePopup}
        anchorEl={editDeletePopup}
      />
    </Fragment>
  );
};

export default PostCard;
