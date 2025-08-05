import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import { DashboardLayout } from "@layouts";
import { ProgressScreen } from "@modules";
import {
  GoalModal,
  LogWeightModal,
  NoteModal,
  WeightModal,
} from "@progressComponents";

const ProgressContainer: React.FC = () => {
  const [weightModal, setWeightModal] = useState(false);
  const [weightUnit, setWeightUnit] = useState("lb");
  const [goalModal, setGoalModal] = useState(false);
  const [goalUnit, setGoalUnit] = useState("lb");
  const [goalDuration, setGoalDuration] = useState("");
  const [customDate, setCustomDate] = useState<Dayjs | null>(null);
  const [datePickerAnchor, setDatePickerAnchor] = useState<HTMLElement | null>(
    null
  );
  const [logWeightModal, setLogWeightModal] = useState(false);
  const [logWeightUnit, setLogWeightUnit] = useState("lb");
  const [noteModal, setNoteModal] = useState(false);
  const [note, setNote] = useState("");

  const handleWeightCardClick = (id: string) => {
    if (id === "start-weight") {
      handleOpenWeightModal();
    } else if (id === "goal-weight") {
      handleGoalModalOpen();
    }
  };
  const handleOpenWeightModal = () => {
    setWeightModal(true);
  };
  const handleCloseWeightModal = () => {
    setWeightModal(false);
  };
  const handleWeightUnitChange = (e: any) => {
    setWeightUnit(e.key);
  };
  const handleGoalModalOpen = () => {
    setGoalModal(true);
  };
  const handleGoalModalClose = () => {
    setGoalModal(false);
  };
  const handleGoalUnitChange = (e: any) => {
    setGoalUnit(e.key);
  };
  const handleGoalDurationChange = (date: string) => {
    setGoalDuration(date);
    setCustomDate(null);
  };
  const handleCustomDateSelect = (date: Dayjs | null) => {
    setCustomDate(date);
    if (date) {
      setGoalDuration("custom");
    }
    setDatePickerAnchor(null);
  };
  const handleCustomButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDatePickerAnchor(event.currentTarget);
  };
  const handleLogWeightModalOpen = () => {
    setLogWeightModal(true);
  };
  const handleLogWeightModalClose = () => {
    setLogWeightModal(false);
  };
  const handleLogWeightUnitChange = (e: any) => {
    setLogWeightUnit(e.key);
  };
  const handleNoteModalOpen = () => {
    setNoteModal(true);
  };
  const handleNoteModalClose = () => {
    setNoteModal(false);
  };

  return (
    <DashboardLayout>
      <ProgressScreen
        handleWeightCardClick={handleWeightCardClick}
        handleLogWeightModalOpen={handleLogWeightModalOpen}
        handleNoteModalOpen={handleNoteModalOpen}
        setNote={setNote}
      />
      {/* modals */}
      <WeightModal
        open={weightModal}
        onClose={handleCloseWeightModal}
        weightUnit={weightUnit}
        handleWeightUnitChange={handleWeightUnitChange}
      />
      <GoalModal
        open={goalModal}
        onClose={handleGoalModalClose}
        goalUnit={goalUnit}
        handleGoalUnitChange={handleGoalUnitChange}
        goalDuration={goalDuration}
        customDate={customDate}
        datePickerAnchor={datePickerAnchor}
        setDatePickerAnchor={setDatePickerAnchor}
        handleCustomDateSelect={handleCustomDateSelect}
        handleCustomButtonClick={handleCustomButtonClick}
        handleGoalDurationChange={handleGoalDurationChange}
      />
      <LogWeightModal
        open={logWeightModal}
        onClose={handleLogWeightModalClose}
        logWeightUnit={logWeightUnit}
        handleLogWeightUnitChange={handleLogWeightUnitChange}
      />
      <NoteModal open={noteModal} onClose={handleNoteModalClose} note={note} />
    </DashboardLayout>
  );
};

export default ProgressContainer;
