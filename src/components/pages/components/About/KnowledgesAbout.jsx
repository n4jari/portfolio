import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { KnowledgesItems } from "../../../../data/AboutData";

const KnowledgesAbout = () => {
  return (
    <Card>
      <CardContent>
        <Divider textAlign="center">
          <Typography variant="h6">Knowledegs</Typography>
        </Divider>
        <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {KnowledgesItems.map((item, index) => (
            <Chip
              key={index}
              color="info"
              label={
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Typography variant="subtitle1">{item.label}</Typography>
                  <Typography variant="subtitle1">{item.value}</Typography>
                </Box>
              }
            ></Chip>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
export default KnowledgesAbout;
