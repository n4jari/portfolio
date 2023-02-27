import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { CustomDivider } from "./../../common/CustomDivider";
import { DetailsAbout, KnowledgesAbout, SkillsAbout } from "./../";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | AmiReza Najari Portfolio</title>
      </Helmet>
      <Box sx={{ p: "2%" }}>
        <CustomDivider title="About" />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            my: 2,
            gap: 2,
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="body1">
                A front-end site programmer and react developer, my career
                started when i entered computer school and continued until my
                bachelor's degree, but i have gained most of my experience and
                expertise in this field by self-taught and taking relevant
                specialized courses.
              </Typography>
            </CardContent>
          </Card>

          <Grid2 container spacing={2}>
            <DetailsAbout />
            <SkillsAbout />
          </Grid2>

          <KnowledgesAbout />
        </Box>
      </Box>
    </>
  );
};
export default About;
