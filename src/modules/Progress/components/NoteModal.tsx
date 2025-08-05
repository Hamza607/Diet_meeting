import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AppFormItem, AppModal } from "@components";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { ICON } from "@constants";
import type { INoteModal } from "@types";

const NoteModal: React.FC<INoteModal> = ({ open, onClose, note }) => {
  const [editNote, setEditNote] = useState(false);
  const handlePressEnter = () => {
    setEditNote(false);
    onClose();
  };
  const handleModalClose = () => {
    setEditNote(false);
    onClose();
  };
  return (
    <AppModal
      open={open}
      onClose={handleModalClose}
      contentClassName="w-full max-w-[272px] rounded-[12px] px-[1em] py-[1.5em]"
    >
      <Box className="flex items-center justify-between w-full">
        <Typography className="text-xs">Note on 3/20/2025</Typography>
        <IconButton onClick={handleModalClose} className="!p-0 text-4xl">
          <IoCloseOutline className="text-secondary-main" />
        </IconButton>
      </Box>
      <Box className="py-[1.5em]">
        {editNote ? (
          <AppFormItem
            type="message"
            placeholder="Add a note"
            itemClassName="mb-0"
            autoSize={{ minRows: 2, maxRows: 3 }}
            defaultValue={note}
            onPressEnter={handlePressEnter}
          />
        ) : (
          <Typography className="text-xs">
            {note ? note : "Add a note..."}
          </Typography>
        )}
      </Box>
      <Box className="flex items-center justify-between w-full">
        <Button
          className="!bg-transparent !border-none !shadow-none text-sm text-secondary-main font-inter-medium font-medium"
          onClick={() => setEditNote(!editNote)}
        >
          {editNote ? (
            <IoCloseOutline className="text-4xl text-primary-main mr-2" />
          ) : (
            <Box
              component="img"
              src={ICON.PROFILE.DROP_EDIT_ICON}
              alt=""
              className="mr-2 w-[33px] h-[33px]"
            />
          )}
          <Box component="span">
            {editNote ? "Cancel" : note ? "Edit" : "Add"}
          </Box>
        </Button>
        <Button className="!bg-transparent !border-none !shadow-none text-sm text-secondary-main font-inter-medium font-medium">
          <Box
            component="img"
            src={ICON.PROFILE.DROP_DELETE_ICON}
            alt=""
            className="mr-2 w-[33px] h-[33px]"
          />
          <Box component="span">Delete</Box>
        </Button>
      </Box>
    </AppModal>
  );
};

export default NoteModal;
