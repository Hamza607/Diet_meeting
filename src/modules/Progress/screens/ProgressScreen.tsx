import React, { Fragment } from "react";
import { ParentSize } from "@visx/responsive";
import { Box, LinearProgress, Typography } from "@mui/material";
import { Col, Form, Row } from "antd";
import type { IProgressScreen } from "@types";
import { PROGRESS_WEIGHT_CARDS } from "@constants";
import { AppButton, AppFormItem } from "@components";
import { ProgressChart, WeightCard } from "@progressComponents";

const ProgressScreen: React.FC<IProgressScreen> = ({
  handleWeightCardClick,
  handleLogWeightModalOpen,
  handleNoteModalOpen,
  setNote,
}) => {
  return (
    <Fragment>
      
        <Box className="overflow-hidden">
          <Typography variant="h1">Progress</Typography>
          <Form
            name="weight-form"
            layout="vertical"
            className="flex items-end gap-4 my-4"
          >
            <AppFormItem
              type="input"
              name="weight"
              label="Enter Today’s Weight"
              placeholder="Enter today's weight"
              required
              message="enter today's weight"
              itemClassName="w-full max-w-[181px] sm:inline-block hidden"
            />
            <AppFormItem
              type="input"
              name="note"
              label="Note (Optional)"
              placeholder="Enter note"
              itemClassName="w-full sm:inline-block hidden"
            />
            <AppFormItem
              type="others"
              name="submit"
              label={null}
              itemClassName="w-full sm:max-w-[279px]"
            >
              <AppButton
                styleType="primary"
                htmlType="submit"
                onClick={handleLogWeightModalOpen}
              >
                Log Today’s Weight
              </AppButton>
            </AppFormItem>
          </Form>
          <Row gutter={[{ xl: 24, md: 16, sm: 16, xs: 16 }, 24]}>
            {PROGRESS_WEIGHT_CARDS.map((card) => {
              const { id, type, title, weight, weightColor, edit } = card;
              return (
                <Col xl={6} md={8} xs={12}>
                  <WeightCard
                    id={id}
                    type={type as "bordered" | "primary"}
                    title={title}
                    weightColor={weightColor}
                    weight={weight}
                    unit="lb"
                    edit={edit}
                    editAction={() => handleWeightCardClick(id)}
                  />
                </Col>
              );
            })}
          </Row>
          <Box className="border-[1px] border-solid border-primary-main rounded-[20px] p-2 lg:p-5 w-full flex flex-col gap-2 my-5">
            <Typography className="text-secondary-main text-[10px] text-xl font-inter-regular font-normal">
              Weight Goal
            </Typography>

            <LinearProgress
              variant="determinate"
              value={33}
              className="h-[12px] rounded-[10px] bg-gray-thinner [&>.MuiLinearProgress-bar]:bg-primary-main [&>.MuiLinearProgress-bar]:rounded-[10px]"
            />

            <Box className="flex justify-between text-[16px] text-secondary-main font-inter-regular">
              <Box>
                <Typography className="sm:text-base text-[10px] font-inter-regular font-normal">
                  186 lbs
                </Typography>
                <Typography className="sm:text-xs text-[10px] font-inter-regular font-normal text-secondary-light">
                  June 12, 2025
                </Typography>
              </Box>
              <Box className="text-center">
                <Typography className="sm:text-base text-[10px] font-inter-regular font-normal">
                  174 lbs
                </Typography>
              </Box>
              <Box>
                <Typography className="sm:text-base text-[10px] font-inter-regular font-normal text-secondary-thin">
                  (34.6 lbs to go)
                </Typography>
              </Box>
              <Box className="text-right">
                <Typography className="sm:text-base text-[10px] font-inter-regular font-normal">
                  180 lbs
                </Typography>
                <Typography className="sm:text-xs text-[10px] font-inter-regular font-normal text-secondary-thin">
                  October 1st 2025
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="w-full sm:h-[425px] h-[480px]">
            <ParentSize>
              {({ width }) => (
                <ProgressChart
                  width={width}
                  height={280}
                  handleNoteModalOpen={handleNoteModalOpen}
                  setNote={setNote}
                />
              )}
            </ParentSize>
          </Box>
        </Box>
    </Fragment>
  );
};

export default ProgressScreen;
