import { Fragment } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Typography } from "@mui/material";
import { ICON, IMG, TABLECONTENTHUB } from "@constants";
import { AppButton } from "@components";
import { ContentHubTablePopup } from "@contentHubComponents";

const ContentHubTable = ({ setAnchorEl, anchorEl }: any) => {
  return (
    <Fragment>
      {/* Desktop Table */}
      <TableContainer
        component={Paper}
        className="!border-none !shadow-none hidden sm:block"
      >
        <Table
          className="max-w-[1155px] !border-none !shadow-none"
          aria-label="customized table"
        >
          <TableHead>
            <TableRow className="!border-none">
              <TableCell className="font-inter-bold text-xs whitespace-nowrap text-secondary-main !border-none p-0 w-[352px]">
                Video
              </TableCell>
              <TableCell
                className="font-inter-bold text-xs whitespace-nowrap text-secondary-main !border-none p-0 "
                align="center"
              >
                Visibility
              </TableCell>
              <TableCell
                className="font-inter-bold text-xs whitespace-nowrap text-secondary-main !border-none p-0 "
                align="center"
              >
                Date
              </TableCell>
              <TableCell
                className="font-inter-bold text-xs whitespace-nowrap text-secondary-main !border-none p-0 "
                align="center"
              >
                Views
              </TableCell>
              <TableCell
                className="font-inter-bold text-xs whitespace-nowrap text-secondary-main hidden md:block  !border-none p-0 "
                align="center"
              >
                Comments
              </TableCell>
              <TableCell
                className="font-inter-bold text-xs  whitespace-nowrap text-secondary-main !border-none p-0 "
                align="center"
              >
                Likes(vs Dislike)
              </TableCell>
              <TableCell
                className="font-inter-bold text-xs whitespace-nowrap text-secondary-main !border-none p-0 "
                align="center"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TABLECONTENTHUB.map((row) => (
              <TableRow key={row.name} className="!border-none !shadow-none ">
                <TableCell
                  component="th"
                  className="!border-none px-0"
                  scope="row"
                >
                  <Box className="flex items-center gap-2">
                    <Box
                      component="img"
                      src={IMG.CONTENTHUB.TABLEIMAGE}
                      className="w-[135px] h-[90px]"
                    />
                    <Typography className="font-inter-medium text-md  max-w-[264px]">
                      {row.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center" className="!border-none">
                  <AppButton className={`${row.width} !text-[12px]`}>
                    {row.visibility}
                  </AppButton>
                </TableCell>
                <TableCell align="center" className="!border-none">
                  {row.date}
                </TableCell>
                <TableCell align="center" className="!border-none">
                  {row.views}
                </TableCell>
                <TableCell
                  align="center"
                  className="!border-none hidden md:block mt-9 "
                >
                  {row.comments}
                </TableCell>
                <TableCell
                  align="center"
                  className="!border-none whitespace-nowrap"
                >
                  {row.like}
                </TableCell>
                <TableCell align="center" className="!border-none">
                  {" "}
                  <IconButton
                    size="small"
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                  >
                    <Box
                      component="img"
                      src={ICON.DASHBOARD.VIDEODOT}
                      alt="more options"
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Mobile Cards */}
      <Box className="block sm:hidden space-y-4">
        {TABLECONTENTHUB.map((row) => (
          <Box key={row.name} className=" rounded-lg   flex flex-col">
            <Box className="font-inter-bold text-xs text-secondary-main mb-2">
              Video
            </Box>
            <Box className="flex items-center gap-3 mb-2 relative">
              <Box
                component={"img"}
                src={IMG.CONTENTHUB.TABLEIMAGE}
                className=" w-[135px] md:w-[90px] h-[90px] md:h-[60px] rounded"
                alt="thumbnail"
              />
              <Box>
                <Box className="font-inter-medium text-md ">{row.name}</Box>
              </Box>
              <Box className="flex justify-end mt-2 absolute -top-2 -right-2 ">
                <IconButton
                  size="small"
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                  <Box
                    component={"img"}
                    src={ICON.DASHBOARD.VIDEODOT}
                    alt="more options"
                  />
                </IconButton>
              </Box>
            </Box>
            <Box className="flex   text-xs mb-1 mt-2">
              <Box className="flex flex-col items-start mb-2 w-2/3">
                <Box
                  component={"span"}
                  className="font-inter-bold text-xs mb-2 text-secondary-main"
                >
                  Visibility
                </Box>
                <AppButton className={`${row.width} !text-[12px] mt-1`}>
                  {row.visibility}
                </AppButton>
              </Box>
              <Box className="flex flex-col items-start mb-2 w-2/3">
                <Box
                  component={"span"}
                  className="font-inter-bold text-xs mb-2 text-secondary-main"
                >
                  Date
                </Box>
                <Box
                  component={"span"}
                  className="mt-1 font-inter-medium text-[16px] text-black-main"
                >
                  {row.date}
                </Box>
              </Box>
              <Box className="flex flex-col items-start mb-2 w-1/3">
                <Box
                  component={"span"}
                  className="font-inter-bold text-xs mb-2 text-secondary-main"
                >
                  Views
                </Box>
                <Box
                  component={"span"}
                  className="mt-1 font-inter-medium text-[16px] text-black-main"
                >
                  {row.views}
                </Box>
              </Box>
            </Box>
            <Box className="flex text-xs mb-1">
              <Box className="flex flex-col items-start mb-2 w-2/3 ">
                <Box
                  component={"span"}
                  className="font-inter-bold text-xs mb-2 text-secondary-main"
                >
                  Comments
                </Box>
                <Box
                  component={"span"}
                  className="mt-1 font-inter-medium text-[16px] text-black-main"
                >
                  {row.comments}
                </Box>
              </Box>
              <Box className="flex flex-col items-start mb-2 w-2/3 ">
                <Box
                  component={"span"}
                  className="font-inter-bold text-xs mb-2 text-secondary-main"
                >
                  Likes (vs. Dislikes)
                </Box>
                <Box
                  component={"span"}
                  className="mt-1 font-inter-medium text-[16px] text-black-main"
                >
                  {row.like}
                </Box>
              </Box>
              <Box className="flex flex-col items-start mb-2 w-1/3 "></Box>
            </Box>
          </Box>
        ))}
      </Box>

      <ContentHubTablePopup setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
    </Fragment>
  );
};

export default ContentHubTable;
