import React from "react";
import { Form, Input, Select } from "antd";
import PhoneInput from "react-phone-input-2";
import { Box, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import type { Rule } from "antd/es/form";
import type { IAppFormItem } from "@types";
import { COLORS } from "@constants";
import { FormItemErrorMsg } from "@components";
import { VerificationInput } from "@authComponents";

const AppFormItem: React.FC<IAppFormItem> = ({
  type,
  name,
  valuePropName,
  label,
  requiredIcon,
  placeholder,
  message,
  required,
  validator,
  validateStatus,
  help,
  rows,
  autoSize,
  maxLength,
  minLength,
  autoFocus,
  allowClear,
  readOnly,
  onPressEnter,
  itemClassName,
  inputClassName,
  inputContainerClassName,
  layout,
  defaultValue,
  selectOptions,
  onInputChange,
  onMessageChange,
  onSelectChange,
  onPhoneChange,
  onVerificationChange,
  onComplete,
  children,
}) => {
  const rules: Rule[] = [];

  if (required) {
    rules.push({
      required: true,
      message: (message ? (
        <FormItemErrorMsg message={message} />
      ) : (
        ""
      )) as unknown as string, // forcefully cast JSX to string due to Ant Design type limitation
    });
  }

  if (validator) {
    rules.push({
      validator: (_rule: any, value: any) => {
        if (!value) {
          return Promise.resolve(); // required rule will show error
        }
        return validator(value);
      },
    });
  }
  return (
    <Form.Item
      className={itemClassName}
      label={
        label ? (
          <Typography variant="body1">
            {label}
            {requiredIcon && (
              <Box
                className="text-error-main relative -right-1 -top-1/2"
                component="span"
              >
                *
              </Box>
            )}
          </Typography>
        ) : null
      }
      validateStatus={validateStatus}
      help={help}
      name={name}
      valuePropName={valuePropName}
      layout={layout}
      rules={rules}
    >
      {type === "input" ? (
        <Input
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onInputChange}
          maxLength={maxLength}
          minLength={minLength}
          autoFocus={autoFocus}
          readOnly={readOnly}
          onPressEnter={onPressEnter}
          className={`h-[44px] border-secondary-light !bg-white-main rounded text-[14px] font-medium font-inter-medium text-black-main !shadow-none placeholder:text-secondary-thin hover:border-primary-main focus:border-primary-main px-4 ${inputClassName}`}
        />
      ) : type === "password" ? (
        <Input.Password
          placeholder={placeholder}
          defaultValue={defaultValue}
          maxLength={maxLength}
          minLength={minLength}
          autoFocus={autoFocus}
          readOnly={readOnly}
          onPressEnter={onPressEnter}
          onChange={onInputChange}
          className={`h-[44px] border-secondary-light !bg-white-main rounded text-[14px] font-medium font-inter-medium text-black-main !shadow-none placeholder:text-secondary-thin hover:border-primary-main focus:border-primary-main focus-within:border-primary-main px-4 ${inputClassName}`}
          iconRender={(visible) =>
            visible && !readOnly ? (
              <VisibilityOutlinedIcon
                classes={{ root: "!text-secondary-thin !cursor-pointer" }}
              />
            ) : !readOnly ? (
              <VisibilityOffOutlinedIcon
                classes={{ root: "!text-secondary-thin !cursor-pointer" }}
              />
            ) : null
          }
        />
      ) : type === "phone" ? (
        <PhoneInput
          country={"us"}
          buttonClass={`!border-inherit !bg-white-main ${
            readOnly ? "!hidden" : ""
          }`}
          inputClass={`!w-full !h-[44px] !border-inherit text-[14px] font-medium font-inter-medium text-black-main placeholder:!text-secondary-thin focus:!border-primary-main ${
            readOnly ? "!pl-4" : ""
          } ${inputClassName}`}
          containerClass={`w-full h-[44px] !border-secondary-light hover:!border-primary-main focus:!border-primary-main ${inputContainerClassName}`}
          placeholder={placeholder}
          disabled={readOnly}
          value={defaultValue}
          onChange={onPhoneChange}
        />
      ) : type === "code" ? (
        <VerificationInput
          containerClassName={inputContainerClassName}
          inputClassName={inputClassName}
          onComplete={onComplete}
          onChange={onVerificationChange}
          readOnly={readOnly}
        />
      ) : type === "message" ? (
        <Input.TextArea
          placeholder={placeholder}
          rows={rows}
          autoSize={autoSize}
          defaultValue={defaultValue}
          maxLength={maxLength}
          minLength={minLength}
          autoFocus={autoFocus}
          readOnly={readOnly}
          onPressEnter={onPressEnter}
          onChange={onMessageChange}
          className={`h-[44px] border-secondary-light !bg-white-main rounded text-[14px] font-medium font-inter-medium text-black-main !shadow-none placeholder:text-secondary-thin hover:border-primary-main focus:border-primary-main px-4 ${inputClassName}`}
        />
      ) : type === "select" ? (
        <Select
          placeholder={placeholder}
          defaultValue={defaultValue}
          maxLength={maxLength}
          allowClear={allowClear}
          autoFocus={autoFocus}
          disabled={readOnly}
          className={`h-[44px] border-secondary-light !bg-white-main rounded text-[14px] font-medium font-inter-medium text-black-main !shadow-none placeholder:text-secondary-thin hover:border-primary-main focus:border-primary-main ${inputClassName}`}
          options={selectOptions}
          onChange={onSelectChange}
          suffixIcon={
            <ArrowBackIosNewIcon className="text-secondary-light text-base rotate-[-90deg]" />
          }
          styles={{
            popup: {
              root: {
                border: `1px solid ${COLORS.primary.main}`,
              },
            },
          }}
        />
      ) : (
        children
      )}
    </Form.Item>
  );
};

export default AppFormItem;
