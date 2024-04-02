import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useContext } from "react";
import MainContext from "../context/MainContext";

export const TopNav = () => {
  const { setToggleDrawer } = useContext(MainContext);
  return (
    <AppBar
      elevation={0}
      position="sticky"
      dir="rtl"
      sx={{
        bgcolor: "#182238",
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Toolbar>
        <IconButton
          sx={{ color: "#F6F9FF" }}
          onClick={() =>
            setToggleDrawer((prevToggleDrawer) => !prevToggleDrawer)
          }
        >
          <MenuOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
