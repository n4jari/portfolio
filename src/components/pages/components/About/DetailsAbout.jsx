import { ArrowRight } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { DetailsItems } from "./../../../../data/AboutData";

const DetailsAbout = () => {
  return (
    <Grid2 xs={12} sm={12} md={6} lg={4} xl={4}>
      <Card>
        <CardContent>
          <Divider textAlign="center">
            <Typography variant="h6">Details</Typography>
          </Divider>
          <br />
          {DetailsItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                ":not(:last-child)": { mb: 2.5 },
              }}
            >
              <Typography
                sx={{
                  color: "#090C16",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ArrowRight htmlColor="#4B90F8" />
                {item.label}
              </Typography>
              <Typography sx={{ color: "#182238" }}>{item.value}</Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default DetailsAbout;
