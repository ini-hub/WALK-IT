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
        <MainNavigation />
        <FutureSection />
        <TargetSection />
        <Goals />
      </Box>
    </>
  );
};

export default Layout;
