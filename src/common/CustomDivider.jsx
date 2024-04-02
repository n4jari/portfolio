import { Divider, Typography } from "@mui/material";
import React from "react";

export const CustomDivider = ({ title }) => {
  return (
    <Divider textAlign="left">
      <Typography variant="h4">{title}</Typography>
    </Divider>
  );
};
