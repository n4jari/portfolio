import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { EducationItems } from "./../../../../data/ResumeData";

 const EducationResume = () => {
  return (
    <Grid2 xs={12}>
      <Card>
        <CardContent>
          <Divider textAlign="center">
            <Typography variant="h6">Education</Typography>
          </Divider>

          <Timeline position="alternate" sx={{ mb: 0 }}>
            {EducationItems.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  variant="body1"
                  sx={{ color: "#4B90F8" }}
                >
                  {item.cert}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ color: "#182238" }}>
                  <Typography variant="body2">{item.major}</Typography>
                  <Typography variant="caption">{item.uni}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </Grid2>
  );
};
export default EducationResume;