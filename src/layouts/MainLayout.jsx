import { ThemeProvider } from "@mui/material/styles";
import Grid2 from '@mui/material/Unstable_Grid2';
import { theme } from "./themes";

export const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid2 container sx={{ height: "100vh" }}>
        {children}
      </Grid2>
    </ThemeProvider>
  );
};
