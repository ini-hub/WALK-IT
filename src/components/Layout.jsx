import { Box } from "@mui/material";
import React from "react";
import Community from "./Community";
import Footer from "./Footer";
import FutureSection from "./FutureSection/FutureSection";
import Goals from "./GoalsSection";
import MainNavigation from "./MainNavigation";
import Mission from "./Mission";
import TargetSection from "./TargetSection/TargetSection";
import WhiteBot from "./WhiteBot";

const Layout = () => {
  return (
    <>
      <Box>
        <MainNavigation />
        <FutureSection />
        <TargetSection />
        <Goals />
        <WhiteBot />
        <Mission />
        <Community />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
