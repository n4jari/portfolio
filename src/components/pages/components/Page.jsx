import { Box } from "@mui/material";
import React, { useContext } from "react";
import MainContext from "../../../context/MainContext";

const Page = ({ children, index }) => {
  const { selectedIndex } = useContext(MainContext);

  return (
    <div
      role="listpanel"
      hidden={selectedIndex !== index}
      id={`list-${index}`}
      aria-labelledby={`sidebar-list-${index}`}
    >
      {selectedIndex === index && <Box>{children}</Box>}
    </div>
  );
};
export default Page;
