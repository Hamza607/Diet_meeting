import { Config } from "tailwindcss";

export const themeColors = {
  primary: {
    main: "#6356E5",
    strong: "#3A2ADE",
    hard: "#4D3FE2",
    light: "#796EE9",
    thin: "#8C82EC",
    thinner: "#2572ED",
    thinnest: "#54A0FF",
    dim: "rgba(99, 86, 229, 0.25)",
    dimmest: "rgba(10, 57, 99, 0.25)",
  },
  secondary: {
    main: "#2E2E2E",
    light: "#757575",
    hard: "#212121",
    thin: "#8E8E8E",
    thinner: "#8C8C8C",
    thinnest: "#CCDAFF",
  },
  success: {
    light: "#2AA77B",
  },
  error: {
    main: "#E63946",
    light: "#D72638",
    hard: "#C74E5B",
    dim: "#270005",
  },
  ordinary: {
    main: "#2E3038",
    light: "#EFF0FA",
    thin: "#FFEDEC",
    thinner: "#C5C6D0",
    dim: "#11131A",
    dimmest: "#272A31",
  },
  white: {
    main: "#FFFFFF",
    hard: "#FAFAFA",
    strong: "#FCFCFC",
    light: "#F3F6F6",
    thin: "#F7F5FF",
    thinner: "#F5F7FA",
  },
  black: {
    main: "#000000",
    hard: "#333333",
    light: "#4D4D4D",
    thin: "#666666",
    thinner: "rgba(0, 0, 0, 0.6)",
    thinnest: "rgba(0, 0, 0, 0.5)",
    lightest: "rgba(0, 0, 0, 0.38)",
    dim: "rgba(8,15,52,0.06)",
    dimmest: "rgba(0,0,0,0.25)",
  },
  gray: {
    main: "#646464",
    light: "#5B5B5B",
    thin: "#D9D9D9",
    thinner: "#E0E0E0",
    thinnest: "#B7B7B7",
  },
  customGrey: {
    main: "#9CA3AF",
    light: "#D1D5DB",
    thin: "#E5E7EB",
    thinner: "#D6E0E0",
    thinnest: "#AFB8CF",
  },
  gradient: {
    main: "linear-gradient(90deg, #4D3FE2, #796EE9)",
  },
};

const config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: themeColors,
      fontFamily: {
        // Inter Font Family
        "inter-thin": ["Inter-Thin", "sans-serif"],
        "inter-extralight": ["Inter-ExtraLight", "sans-serif"],
        "inter-light": ["Inter-Light", "sans-serif"],
        "inter-regular": ["Inter-Regular", "sans-serif"],
        "inter-medium": ["Inter-Medium", "sans-serif"],
        "inter-semibold": ["Inter-SemiBold", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
        "inter-extrabold": ["Inter-ExtraBold", "sans-serif"],
        "inter-black": ["Inter-Black", "sans-serif"],

        // Poppins Font Family
        "poppins-thin": ["Poppins-Thin", "sans-serif"],
        "poppins-extralight": ["Poppins-ExtraLight", "sans-serif"],
        "poppins-light": ["Poppins-Light", "sans-serif"],
        "poppins-regular": ["Poppins-Regular", "sans-serif"],
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
        "poppins-semibold": ["Poppins-SemiBold", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
        "poppins-extrabold": ["Poppins-ExtraBold", "sans-serif"],
        "poppins-black": ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // This prevents Tailwind from resetting MUI styles
  },
};

export default config;
