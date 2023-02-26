import { Typography, Box } from "@mui/material";
import React from "react";
import Goals from "../assets/images/goals.jpg";

const GoalsSection = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "1863px",
          left: "207px",
          width: "1000px",
          height:'600px',
        }}
      >
        <p
          style={{
            position: "absolute",
            height: "54px",
            left: "2px",
            top: "76px",
            width: "279px",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "54px",
            letterSpacing: "-0.02em",
          }}
        >
          Goals of{" "}
          <span
            style={{
              borderBottom: "3px solid white",
              display: "inline-block",
              lineHeight: "20px",
              borderColor: "#FED636",
              color: "#48017D",
            }}
          >
            Walk IT
          </span>
        </p>

        <Box
          sx={{
            width: "1051px",
            height: "311px",
            position: "absolute",
            top: "201px"
          }}
        >
          <img
            src={Goals}
            style={{ width: "1000px", height: "300px" }}
            alt="Timeline"
          />
          <Typography
            sx={{
              position: "absolute",
              width: "169px",
              height: "72px",
              left: "392px",
              top: "61px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "-0.02em",
              color: "#111111",
              // fontFamily:'PoppinsRegular'
            }}
          >
            Good health & Well being
          </Typography>

          <Typography
            sx={{
              position: "absolute",
              width: "278px",
              height: "72px",
              left: "750px",
              top: "61px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "-0.02em",
              color: "#111111",
            }}
          >
            Innovate mobility & Promote Independence
          </Typography>

          <Typography
            sx={{
              position: "absolute",
              width: "136px",
              height: "36px",
              left: "392px",
              top: "189px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "-0.02em",
              color: "#111111",
            }}
          >
            Reduce CO<sub style={{fontSize:'10px'}}>2</sub>
          </Typography>

          <Typography
            sx={{
              position: "absolute",
              width: "259px",
              height: "72px",
              left: "750px",
              top: "189px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "-0.02em",
              color: "#111111",
            }}
          >
            Save energy & money
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default GoalsSection;
