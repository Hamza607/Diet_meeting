import React, { useEffect, useRef, useState } from "react";
import { Input } from "antd";
import type { InputRef } from "antd";
import { Box } from "@mui/material";
import type { IVerificationInput } from "@types";

const VerificationInput: React.FC<IVerificationInput> = ({
  onChange,
  onComplete,
  containerClassName,
  inputClassName,
  readOnly,
}) => {
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const inputRefs = useRef<(InputRef | null)[]>([]);

  useEffect(() => {
    const codeString = code.join("");
    onChange?.(codeString);
    if (codeString.length === 6) {
      onComplete?.(codeString);
    }
  }, [code, onChange, onComplete]);

  const handleInput = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) {
      return;
    }

    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
      setActiveIndex(index + 1);
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveIndex(index - 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
    const newCode = [...code];

    // Only paste numbers
    pastedData.forEach((value, index) => {
      if (index < 6 && /^\d$/.test(value)) {
        newCode[index] = value;
      }
    });
    setCode(newCode);
  };

  const getInputClassName = (index: number) => {
    const baseClasses =
      "sm:w-[70px] sm:h-[70px] sm:text-5xl w-[40px] h-[40px] text-2xl text-center font-inter-medium text-primary-main border-[2px] border-solid rounded-lg";
    const isActive = activeIndex === index;
    const isFilled = code[index] !== "";

    if (isActive || isFilled) {
      return `${baseClasses} !border-primary-main ${inputClassName}`;
    }
    return `${baseClasses} !border-gray-main ${inputClassName}`;
  };

  return (
    <Box className={`flex justify-between ${containerClassName}`}>
      {code.map((digit, index) => (
        <Input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={digit}
          onChange={(e) => handleInput(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          onFocus={() => setActiveIndex(index)}
          onBlur={() => setActiveIndex(-1)}
          className={`${getInputClassName(index)}`}
          readOnly={readOnly}
        />
      ))}
    </Box>
  );
};

export default VerificationInput;
