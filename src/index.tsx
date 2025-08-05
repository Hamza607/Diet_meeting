import "antd/es/modal/style";
import "antd/es/slider/style";
import "@ant-design/v5-patch-for-react-19";
import "react-phone-input-2/lib/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import { App } from "@core";
import { ThemeProvider } from "@themes";
import { AppProvider, AuthProvider, ForumProvider } from "@context";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "@styles";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StyledEngineProvider enableCssLayer>
      <AuthProvider>
        <AppProvider>
          <ForumProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <ThemeProvider>
                <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
                <App />
              </ThemeProvider>
            </LocalizationProvider>
          </ForumProvider>
        </AppProvider>
      </AuthProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);
