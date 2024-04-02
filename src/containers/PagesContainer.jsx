import Grid2 from "@mui/material/Unstable_Grid2";
import { TopNav } from "../common/TopNav";

export const PagesContainer = ({ children }) => {
  return (
    <Grid2
      xs={12}
      sm={12}
      md={9}
      lg={9.5}
      xl={10}
      sx={{ backgroundColor: "#F6F9FF" }}
    >
      <TopNav/>
      {children}
    </Grid2>
  );
};
