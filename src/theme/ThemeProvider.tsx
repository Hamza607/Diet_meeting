import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme as themeConfig } from "@themes";
import type { IThemeProvider } from "@types";

// Create MUI theme with colors from tailwind config
const theme = createTheme(themeConfig);

export function ThemeProvider({ children }: IThemeProvider) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
