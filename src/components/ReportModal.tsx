import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Form } from "antd";
import type { IReportModal } from "@types";
import { ICON, REPORT_OPTIONS } from "@constants";
import { AppButton, AppFormItem, AppModal } from "@components";

const ReportModal: React.FC<IReportModal> = ({
  open,
  onClose,
  handleSubmit,
}) => {
  return (
    <AppModal
      open={open}
      onClose={onClose}
      contentClassName="w-full max-w-[629px] rounded-xl p-[20px] sm:p-[40px]"
    >
      <Box>
        <Box className="flex justify-end w-full mr-0 lg:mr-16">
          <IconButton onClick={onClose}>
            <Box
              component="img"
              src={ICON.DASHBOARD.MODALCLOSE}
              alt=""
              className="w-[32px] h-[32px] "
            />
          </IconButton>
        </Box>
        <Box className="flex gap-2 items-center">
          <Box
            component={"img"}
            src={ICON.CONTENTHUB.REPORTDANGER}
            alt=""
            className="w-[32px] h-[32px] "
          />
          <Typography
            variant="h3"
            className="font-poppins-medium md:text-[32px] text-[24px] text-secondary-main"
          >
            Report Content
          </Typography>
        </Box>
        <Typography className="text-secondary-light  font-inter-regular py-6 md:text-[20px]">
          Help us keep the community safe and respectful
        </Typography>
        <Form name="report-form" layout="vertical">
          <AppFormItem
            name="reportType"
            type="select"
            label="Tell us what's wrong"
            placeholder="Select from list"
            selectOptions={REPORT_OPTIONS}
            inputClassName="!bg-white-strong"
            required
            message="Please select a report type"
          />
          <AppFormItem
            name="reportDetails"
            type="message"
            label="Additional Details"
            placeholder="Optional"
            selectOptions={REPORT_OPTIONS}
            itemClassName="mb-[2rem]"
            inputClassName="!bg-white-strong !min-h-[44px] pt-[10px] pb-0"
            autoSize={{ minRows: 1, maxRows: 3 }}
          />
          <AppFormItem type="others" label={null} itemClassName="mb-0">
            <AppButton onClick={handleSubmit} className="mb-4">
              Submit
            </AppButton>
            <AppButton styleType="text" onClick={onClose}>
              Cancel
            </AppButton>
          </AppFormItem>
        </Form>
      </Box>
    </AppModal>
  );
};

export default ReportModal;
