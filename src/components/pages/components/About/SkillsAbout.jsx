import {
  Box,
  Card,
  CardContent,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import { SkillsItems } from "./../../../../data/AboutData";

const SkillsAbout = () => {
  return (
    <Grid2 xs={12} sm={12} md={6} lg={8} xl={8}>
      <Card>
        <CardContent>
          <Divider textAlign="center">
            <Typography variant="h6">Skills</Typography>
          </Divider>
          <br />
          {SkillsItems.map((item, index) => (
            <Box key={index} sx={{ ":not(:last-child)": { mb: 2.5 } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" color="#090C16">
                  {item.label}
                </Typography>
                <Typography variant="body2" color="#182238">
                  {item.value}%
                </Typography>
              </Box>
              <LinearProgress
                color="info"
                variant="determinate"
                value={item.value}
              />
            </Box>
          ))}
        </CardContent>
      </Card>
    </Grid2>
  );
};
export default SkillsAbout;
