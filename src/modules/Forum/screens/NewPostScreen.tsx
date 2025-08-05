import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { Form, Switch, Upload } from "antd";
import { IoAddOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import type { IPostScreen } from "@types";
import { ICON, POST_CATEGORIES_TAGS } from "@constants";
import { AppButton, AppFormItem, CategoryButton } from "@components";
import { useForumContext } from "@context";

const NewPostScreen: React.FC<IPostScreen> = ({
  linkProduct,
  handleChangeLinkProduct,
  fileList,
  handleFileListChange,
  handleOpenCategoryModal,
  handleCategoryClick,
}) => {
  const { postCategories } = useForumContext();
  return (
    <Box>
      <Typography variant="h1" className="mb-7">
        Start a Discussion
      </Typography>
      <Form name="post-form" layout="vertical">
        <AppFormItem
          type="input"
          name="title"
          label="Title"
          placeholder="Enter Title"
          itemClassName="max-w-[824px]"
          inputClassName="!bg-white-strong"
          required
          requiredIcon
          message="Please enter a title"
        />
        <AppFormItem
          type="message"
          name="description"
          label="Description"
          placeholder="Enter Post"
          itemClassName="max-w-[824px]"
          inputClassName="!bg-white-strong"
          autoSize={{ minRows: 4, maxRows: 4 }}
          required
          message="Please enter a post"
        />
        <AppFormItem type="others" name="category" label="Category Tags">
          <Box className="mt-1 flex flex-wrap sm:gap-3 gap-2">
            <CategoryButton type="secondary" onClick={handleOpenCategoryModal}>
              <IoAddOutline className="text-[1.5rem]" />
            </CategoryButton>
            {postCategories.map((category) => {
              const categoryData = POST_CATEGORIES_TAGS.find(
                (cat) => cat.label === category
              );
              const width = categoryData ? categoryData.width : "auto";
              return (
                <CategoryButton
                  key={category}
                  type="primary"
                  className={`sm:${width} justify-start`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <IoClose className="text-xl sm:mx-2 mx-1" />
                  {category}
                </CategoryButton>
              );
            })}
          </Box>
        </AppFormItem>
        <AppFormItem type="others" name="link-switch">
          <Box>
            <Box className="flex items-center gap-2 py-4">
              <Switch
                className="min-w-[34px] h-[20px] !bg-gray-thinnest aria-checked:!bg-primary-main"
                checked={linkProduct}
                onChange={handleChangeLinkProduct}
              />
              <Typography className="sm:text-[15px] text-sm">
                Link Product
              </Typography>
            </Box>
            <Box className="flex items-center gap-3">
              <Box component="img" src={ICON.FORUM.PRODUCT_LOCK_ICON} />
              <Typography className="text-xs text-secondary-thin">
                Adding a product is not available for members
              </Typography>
            </Box>
          </Box>
        </AppFormItem>
        {linkProduct && (
          <Fragment>
            <AppFormItem
              type="input"
              name="product-name"
              label="Product Name"
              placeholder="Enter Product Name"
              inputClassName="!bg-white-strong"
              required
              requiredIcon
              message="Please enter a product name"
            />
            <AppFormItem
              type="input"
              name="product-link"
              label="Product Link"
              placeholder="Enter Product Link"
              inputClassName="!bg-white-strong"
              required
              message="Please enter a product link"
            />
            <AppFormItem
              type="message"
              name="product-description"
              label="Description"
              placeholder="Enter Post"
              inputClassName="!bg-white-strong"
              autoSize={{ minRows: 4, maxRows: 4 }}
              required
              message="Please enter a post"
            />
            <AppFormItem
              type="others"
              name="product-image"
              label="Product Image"
              itemClassName="ml-2"
            >
              <Box className="relative w-fit mb-4">
                {fileList.length < 1 && (
                  <Box className="w-[120px] h-[120px] bg-white-strong rounded-[20px] modal-shadow flex items-center justify-center">
                    <FaImage className="text-5xl text-secondary-main" />
                  </Box>
                )}
                <Upload
                  listType="picture-card"
                  accept="image/*"
                  maxCount={1}
                  fileList={fileList}
                  onChange={handleFileListChange}
                  beforeUpload={() => false}
                  className={`${
                    fileList.length < 1
                      ? "!w-fit !h-fit"
                      : "!w-[120px] !h-[120px] rounded-[20px] overflow-hidden modal-shadow"
                  }`}
                >
                  <Box className="!w-[25.5px] !h-[25.5px] !bg-white-main border-[2px] border-solid border-primary-main rounded-[2px] flex items-center justify-center absolute -bottom-[6px] -right-[6px] z-[2]">
                    <FaPlus className="text-primary-main text-sm" />
                  </Box>
                </Upload>
              </Box>
            </AppFormItem>
          </Fragment>
        )}
        <Form.Item name="submit" label={null} className="mb-0">
          <AppButton
            styleType="primary"
            htmlType="submit"
            className="max-w-[824px]"
          >
            Post
          </AppButton>
        </Form.Item>
      </Form>
    </Box>
  );
};

export default NewPostScreen;
