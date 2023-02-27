import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Visibility } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { PortfolioItems } from "./../../data/PortfolioData";
import { CustomDivider } from "../../common/CustomDivider";
import { Helmet } from "react-helmet-async";
const Portfolio = () => {
  const ViewBox = styled(Box)({
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#182238de",
    animation: "fade .3s  ease-in-out",

    "@keyframes fade": {
      "0%": {
        opacity: 0,
      },
      "100%": {
        opacity: 0.9,
      },
    },
  });
  return (
    <>
      <Helmet>
        <title>Portfolio | AmiReza Najari Portfolio</title>
      </Helmet>
      <Box sx={{ p: "2%" }}>
        <CustomDivider title="Portfolio" />

        <Grid2 container spacing={4} my={2}>
          {PortfolioItems.reverse().map((item, index) => (
            <Grid2 xs={12} sm={6} lg={4} key={index}>
              <Box
                sx={{
                  position: "relative",
                  ":hover > div": {
                    display: "flex",
                  },
                }}
              >
                <Avatar
                  variant="rounded"
                  src={item.img}
                  alt={item.label}
                  sx={{
                    height: 220,
                    width: 1,
                  }}
                />
                <ViewBox>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Visibility />}
                    href={item.link}
                    target="_blank"
                    sx={{
                      color: "#4B90F8",
                      border: "2px solid #4B90F8",
                      ":hover": { background: "#182238", color: "#F6F9FF" },
                    }}
                  >
                    <Typography variant="subtitle1">{item.label}</Typography>
                  </Button>
                </ViewBox>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
};
export default Portfolio;
