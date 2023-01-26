import { Subscript } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import React from "react";
import Goals from "../assets/images/goals.jpg";

const GoalsSection = () => {
  return (
    <>
      <Box sx={{ padding: { md: 10, xs: 5 }, mr: 13, ml: 13 }}>
        <Box
          sx={{
            marginBottom: "20px",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>
            Goals of{" "}
            <span
              style={{
                borderBottom: "3px solid white",
                display: "inline-block",
                lineHeight: "17px",
                borderColor: "#FED636",
                color:'#48017D'
              }}
            >
              Walk IT
            </span>
          </Typography>
        </Box>

        <Box sx={{ width: "100%", position: "relative" }}>
          <img src={Goals} style={{ width: "100%" }} alt="Timeline" />
          <Box
            sx={{
              position: "absolute",
              top: "22%",
              left: "35%",
              width: "15%",
            }}
          >
            <Typography>Good health & Well being CO</Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "22%",
              left: "73%",
              width: "25%",
            }}
          >
            <Typography>Innovate mobility & Promote Independence</Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "33%",
              left: "35%",
              width: "15%",
            }}
          >
            <Typography>
              Reduce CO<sub>2</sub>
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "33%",
              left: "73%",
              // width: "15%",
            }}
          >
            <Typography>Save energy & money</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GoalsSection;
