import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import { CustomDivider } from "../../common/CustomDivider";
import { EducationResume, ExperienceResume } from "../";
import { Helmet } from "react-helmet-async";

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Resume | AmiReza Najari Portfolio</title>
      </Helmet>

      <Box sx={{ p: "2%" }}>
        <CustomDivider title="Resume" />

        <Grid2 container spacing={2} my={2}>
          <EducationResume />
          <ExperienceResume />
        </Grid2>
      </Box>
    </>
  );
};
export default Resume;
