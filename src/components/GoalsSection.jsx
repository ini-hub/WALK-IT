import { Typography, Box } from "@mui/material";
import React from "react";
import Goals from "../assets/images/goals.jpg";

const GoalsSection = () => {
  return (
    <>
      <Box>
        <Typography>Goals of Walk IT</Typography>
        <Box sx={{width:'40px'}}>
          <img src={Goals} style={{"width":"200px"}} alt="Timeline" />
        </Box>
      </Box>
    </>
  );
};

export default GoalsSection;
