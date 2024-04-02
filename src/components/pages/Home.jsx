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
            color: "orangered",
            textShadow: "-3px 1px 10px orangered",
            border: "5px solid orange",
            boxShadow: "-3px 1px 10px orange",
            padding: "2px 15px",
            borderRadius: 4,
            fontSize: { xs: "2.5rem", md: "3rem" },
          }}
        >
          AmirReza Najari
        </Typography>

        <Typography
          variant="overline"
          sx={{
            color: "#4B90F8",
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
                  "<span style='color: white'>I'm Developer .</span>",
                  "<span style='color: white'>I build website .</span>",
                  "<span style='color: white'>I want to become a Full-Stack developer .</span>",
                  "<span style='color: white'>My next goal is Web 3 .</span>",
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
