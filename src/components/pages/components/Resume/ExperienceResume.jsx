import { Card, CardContent, Divider, Tooltip, Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ExperienceItems } from "../../../../data/ResumeData";

const ExperienceResume = () => {
  return (
    <Grid2 xs={12}>
      <Card>
        <CardContent>
          <Divider textAlign="center">
            <Typography variant="h6">Experience</Typography>
          </Divider>

          <Timeline position="alternate" sx={{ mb: 0 }}>
            {ExperienceItems.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  variant="body1"
                  sx={{ color: "#4B90F8" }}
                >
                  {item.com}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Tooltip title={item.time} arrow placement="top">
                    <Typography variant="overline" color="gray">
                      {item.date}
                    </Typography>
                  </Tooltip>
                  <Typography
                    variant="body2"
                    sx={{
                      background: "#F6F9FF",
                      color: "#182238",
                      p: ".5rem",
                      textAlign: "justify",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Typography variant="overline" color="gray">
                    {item.location}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </Grid2>
  );
};
export default ExperienceResume;
