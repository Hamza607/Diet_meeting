import { createTheme } from "@mui/material/styles";
import { COLORS } from "@constants";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary.main,
    },
    secondary: {
      main: COLORS.secondary.main,
    },
  },
  typography: {
    fontFamily: "Inter-Medium, sans-serif",
    h1: {
      fontFamily: "Poppins-Bold, sans-serif",
      fontSize: "48px",
      fontWeight: 700,
      "@media (max-width: 768px)": {
        fontSize: "24px",
      },
    },
    h3: {
      fontFamily: "Poppins-Medium, sans-serif",
      fontSize: "32px",
      fontWeight: 500,
      "@media (max-width: 640px)": {
        fontSize: "20px",
      },
    },
    h4: {
      fontFamily: "Poppins-Regular, sans-serif",
      fontSize: "24px",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "Inter-Medium, sans-serif",
      fontSize: "16px",
      fontWeight: 500,
    },
    body2: {
      fontSize: "14px",
      fontFamily: "Inter-Medium, sans-serif",
      fontWeight: 500,
      color: COLORS.error.main,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none" as const,
          borderRadius: "8px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: COLORS.secondary.main,
        },
      },
    },
  },
});
