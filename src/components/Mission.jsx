import { Box } from "@mui/material";
import React from "react";
import mission from "../assets/images/mission.png";
import vision from "../assets/images/vision.png";
import mask from "../assets/images/mask2.png";

const Mission = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "3510px",
        height:'575px',
        width:'1566px'
      }}
    >
      <img src={mask} alt="" />
      {/* <div> */}
        <div
          style={{
            display: "flex",
            left: "161px",
            position: "absolute",
            top:'63px'
          }}
        >
          <img src={mission} width='160px' height='160px' alt="" />
          <div
            style={{
              height: "54px",
              left: "238px",
              position: "absolute",
            }}
          >
            <p style={headingStyle}>
              Our <span style={spanStyle}>Mission</span>
            </p>
            <p style={paragraphStyle}>
              To eliminate stigma, insecurity and also create artificial
              perception of their environment to the visually impaired
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: "573px",
            top: "274px",
          }}
        >
          <img src={vision} alt="" />
          <div
            style={{
              height: "54px",
              left: "245px",
              position: "absolute",
            }}
          >
            <p style={headingStyle}>
              Our <span style={spanStyle}>Vision</span>
            </p>
            <p
              style={paragraphStyle}
            >
              To provide an intelligent device that can aid the movement of the
              visually impaired, and get to their destination with a better
              chance at eliminating getting in contact with any fixed or moving
              object
            </p>
          </div>
        </div>
      {/* </div> */}
    </Box>
  );
};

export default Mission;

const headingStyle = {
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "36px",
  lineHeight: "54px",
  letterSpacing: "-0.02em",
  width: "206px",
  height: "54px",
  left: "399px",
  // top: "3452px",
};

const spanStyle = {
  borderBottom: "3px solid white",
  display: "inline-block",
  lineHeight: "25px",
  borderColor: "#FED636",
  color: "#48017D",
};

const paragraphStyle = {
  position: "absolute",
  width: "379px",
  height: "81px",
  top: "68px",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "27px",
  letterSpacing: "-0.02em",
};
