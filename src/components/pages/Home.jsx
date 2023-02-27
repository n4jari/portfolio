import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { useEffect } from "react";

import bgHome from "../../assets/pics/bgHome1.jpg";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [typer, setTyper] = useState(false);

  useEffect(() => {
    setTyper(true);

    return () => {
      setTyper(false);
    };
  }, []);

  const BgHome = styled(Box)(() => ({
    backgroundImage: `url(${bgHome})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    filter: "opacity(9)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }));

  return (
    <>
      <Helmet>
        <title>Home | AmiReza Najari Portfolio</title>
      </Helmet>
      <BgHome>
        <Typography
          variant="h2"
          sx={{
            color: "#090C16",
            border: "5px solid #182238",
            padding: "2px 15px",
            borderRadius: 10,
            fontSize: { xs: "2.5rem", md: "3rem" },
          }}
        >
          AmirReza Najari
        </Typography>

        <Typography
          variant="overline"
          sx={{
            color: "#4B90F8",
            textDecoration: "underline #4B90F8",
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
            },
          }}
        >
          {typer ? (
            <Typewriter
              options={{
                strings: [
                  "I'm Developer .",
                  "I build website .",
                  "I want to become a Full-Stack developer .",
                  "My next goal is Web 3 .",
                ],
                autoStart: typer,
                loop: true,
              }}
            />
          ) : null}
        </Typography>
      </BgHome>
    </>
  );
};
export default Home;
