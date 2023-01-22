import { Box } from "@mui/material";
import React from "react";
import FutureSection from "./FutureSection";
import Goals from "./GoalsSection";
import MainNavigation from "./MainNavigation";
import TargetSection from "./TargetSection";

const Layout = () => {
  return (
    <>
      <Box>
        <Box sx={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
          <MainNavigation />
        </Box>

        <FutureSection />
        <TargetSection />
        <Goals />
      </Box>
    </>
  );
};

export default Layout;
