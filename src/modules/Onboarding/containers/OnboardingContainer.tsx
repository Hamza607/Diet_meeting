import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Dayjs } from "dayjs";
import { Box } from "@mui/material";
import {
  AgeSelectionScreen,
  GenderSelectionScreen,
  GoalScreen,
  HeightWeightSelectionScreen,
  InfoScreen1,
  InfoScreen2,
  InfoScreen3,
  InfoScreen4,
  InfoScreen5,
  RestrictionsScreen,
  StartedScreen,
  SubscriptionScreen,
} from "@modules";
import { NUMBER_DECIMAL_REGEX } from "@validations";
import { useAuthContext } from "@context";
import { ROUTES } from "@constants";
import { Header, StepsProgress } from "@onboardingComponents";

const OnboardingContainer: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, currentUserData } = useAuthContext();
  const [steps, setSteps] = useState<number>(1);
  const [fileList, setFileList] = useState<any[]>([]);
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [heightUnit, setHeightUnit] = useState("ft");
  const [weightUnit, setWeightUnit] = useState("lb");
  const [goalWeight, setGoalWeight] = useState("lb");
  const [goalDuration, setGoalDuration] = useState("lb");
  const [categories, setCategories] = useState<string[]>([]);
  const [userRole, setUserRole] = useState<"member" | "coach">("member");
  const [customDate, setCustomDate] = useState<Dayjs | null>(null);
  const [datePickerAnchor, setDatePickerAnchor] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    if (!currentUser && !currentUserData) {
      navigate(ROUTES.LOGIN);
    }
  }, [currentUser, currentUserData]);

  const handleNextButton = () => {
    setSteps(steps + 1);
  };
  const handleBackButton = () => {
    setSteps(steps - 1);
  };
  const handleSkipButton = () => {
    setSteps(steps + 1);
  };
  const FileListChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };
  const handleFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and one decimal point
    if (NUMBER_DECIMAL_REGEX.test(value)) {
      setFeet(value);
    }
  };
  const handleInchesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and one decimal point
    if (NUMBER_DECIMAL_REGEX.test(value)) {
      setInches(value);
    }
  };
  const handleHeightUnitChange = (e: any) => {
    setHeightUnit(e.key);
  };
  const handleWeightUnitChange = (e: any) => {
    setWeightUnit(e.key);
  };
  const handleGoalWeightChange = (e: any) => {
    setGoalWeight(e.key);
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
  const handleCategoryClick = (category: string) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };
  const handleUserRoleChange = (role: "member" | "coach") => {
    setUserRole(role);
  };

  return (
    <Box className="bg-white-light">
      <Header />
      {steps < 12 && <StepsProgress steps={steps} />}
      {steps === 1 ? (
        <StartedScreen
          fileList={fileList}
          FileListChange={FileListChange}
          handleNextButton={handleNextButton}
        />
      ) : steps === 2 ? (
        <InfoScreen1 handleNextButton={handleNextButton} />
      ) : steps === 3 ? (
        <AgeSelectionScreen
          handleNextButton={handleNextButton}
          handleBackButton={handleBackButton}
          handleSkipButton={handleSkipButton}
        />
      ) : steps === 4 ? (
        <InfoScreen2 handleNextButton={handleNextButton} />
      ) : steps === 5 ? (
        <GenderSelectionScreen
          handleNextButton={handleNextButton}
          handleBackButton={handleBackButton}
          handleSkipButton={handleSkipButton}
        />
      ) : steps === 6 ? (
        <InfoScreen3 handleNextButton={handleNextButton} />
      ) : steps === 7 ? (
        <HeightWeightSelectionScreen
          handleNextButton={handleNextButton}
          handleBackButton={handleBackButton}
          handleSkipButton={handleSkipButton}
          feet={feet}
          inches={inches}
          handleFeetChange={handleFeetChange}
          handleInchesChange={handleInchesChange}
          heightUnit={heightUnit}
          weightUnit={weightUnit}
          handleHeightUnitChange={handleHeightUnitChange}
          handleWeightUnitChange={handleWeightUnitChange}
        />
      ) : steps === 8 ? (
        <GoalScreen
          goalWeight={goalWeight}
          goalDuration={goalDuration}
          customDate={customDate}
          datePickerAnchor={datePickerAnchor}
          setDatePickerAnchor={setDatePickerAnchor}
          handleWeightUnitChange={handleGoalWeightChange}
          handleGoalDurationChange={handleGoalDurationChange}
          handleCustomDateSelect={handleCustomDateSelect}
          handleCustomButtonClick={handleCustomButtonClick}
          handleNextButton={handleNextButton}
          handleBackButton={handleBackButton}
          handleSkipButton={handleSkipButton}
        />
      ) : steps === 9 ? (
        <InfoScreen4 handleNextButton={handleNextButton} />
      ) : steps === 10 ? (
        <RestrictionsScreen
          handleNextButton={handleNextButton}
          handleBackButton={handleBackButton}
          handleSkipButton={handleSkipButton}
          categories={categories}
          handleCategoryClick={handleCategoryClick}
        />
      ) : steps === 11 ? (
        <InfoScreen5 handleNextButton={handleNextButton} />
      ) : steps === 12 ? (
        <SubscriptionScreen
          navigate={navigate}
          userRole={userRole}
          handleUserRoleChange={handleUserRoleChange}
          handleBackButton={handleBackButton}
        />
      ) : null}
    </Box>
  );
};

export default OnboardingContainer;
