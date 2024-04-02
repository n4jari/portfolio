import { Box, Drawer } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useContext } from "react";
import MainContext from "../../context/MainContext";
import { DrawerContent } from "../";
import { Sidebar } from "react-pro-sidebar";

const MainSidebar = () => {
  const { toggleDrawer, setToggleDrawer } = useContext(MainContext);
  return (
    <Grid2 xs={0} sm={0} md={3} lg={2.5} xl={2}>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          height: "100%",
        }}
      >
        <Sidebar
          width="100%"
          backgroundColor="#090C16"
          style={{ position: "sticky", top: 0, height: "100vh" }}
        >
          <DrawerContent />
          <Drawer
            variant="temporary"
            open={toggleDrawer}
            onClose={() => setToggleDrawer(false)}
            sx={{
              "& .MuiDrawer-paper": {
                width: 280,
                backgroundColor: "#090C16",
              },
            }}
          >
            <DrawerContent />
          </Drawer>
        </Sidebar>
      </Box>
    </Grid2>
  );
};
export default MainSidebar;
