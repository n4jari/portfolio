import { Box, Typography } from "@mui/material";
import React from "react";

const SidebarFooter = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        my: 2,
        color: "#F6F9FF",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <a
        href="https://n4jari.ir/"
        style={{
          color: "white",
          fontSize: ".8rem",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
        target="_blank"
      >
        Created by N4JARI
      </a>
    </Box>
  );
};
export default SidebarFooter;
