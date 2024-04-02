import { useEffect, useState } from "react";
import MainContext from "./context/MainContext";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MainLayout } from "./layouts/MainLayout";

import { Route, Routes } from "react-router-dom";
import { PagesContainer } from "./containers/PagesContainer";
import {
  Home,
  About,
  Resume,
  Portfolio,
  Comments,
  MainSidebar,
} from "./components";
import { HelmetProvider } from "react-helmet-async";

export const App = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isMdUp) {
      setToggleDrawer(false);
    }
  }, [isMdUp]);

  return (
    <HelmetProvider>
      <MainContext.Provider
        value={{
          toggleDrawer,
          setToggleDrawer,
        }}
      >
        <MainLayout>
          <MainSidebar />
          <PagesContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/comments" element={<Comments />} />
            </Routes>
          </PagesContainer>
        </MainLayout>
      </MainContext.Provider>
    </HelmetProvider>
  );
};
