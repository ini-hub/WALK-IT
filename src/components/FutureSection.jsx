import { Box, Button, Typography } from "@mui/material";
import React from "react";
import girl from "../assets/svgs/girl.png";
import ncc from "../assets/svgs/Ncclogo.jpg";
import jona from "../assets/svgs/jona.png";

const FutureSection = () => {
  return (
    <>
      <Box display="flex" sx={{ paddingTop: 5 }}>
        <Box sx={{ paddingTop: 5, paddingLeft: 3, width: "15%" }}>
          <img src={girl} alt="Blind Girl" />
        </Box>
        <Box sx={{ width: "40%" }}>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 900,
              lineHeight: "50px",
              fontFamily: "PoppinsBold",
            }}
          >
            The future of{" "}
            <span
              style={{
                borderBottom: "4px solid white",
                display: "inline-block",
                lineHeight: "20px",
                borderColor: "#FED636",
                color:'#48017D'
              }}
            >
              automated
            </span>
            <span
              style={{
                borderBottom: "4px solid white",
                display: "inline-block",
                lineHeight: "20px",
                borderColor: "#FED636",
                color:'#48017D'
              }}
            >
              mobility
            </span>{" "}
            for the visually impaired.
          </Typography>
          <Typography
            sx={{
              fontFamily: "PoppinsRegular",
              paddingTop: 4,
              fontWeight: 600,
              width: '87%'
            }}
          >
            We are building a revolutionary device called <span style={{  color:'#48017D'}}> “White Bot”</span> designed
            to help visually impaired individuals navigate the world around them
            with ease and confidence
          </Typography>
          <div style={learnMoreButton}>
            <Button
              sx={{
                color: "white",
                borderRadius: "30px",
                backgroundColor: "#48017D",
                padding: 1,
                width: {xs: "50%", md: "30%"},
                textTransform: "none",
                fontFamily: "PoppinsRegular",
                overflow:'hidden'
              }}
            >
              Learn more
            </Button>
          </div>
          <Box sx={{ marginTop: 7, marginLeft: 10 }}>
            <Typography
              sx={{
                color: "#4E4E4E",
                fontFamily: "PoppinsRegular",
                fontWeight: 700,
              }}
            >
              Partners
            </Typography>
            <Box display="flex" sx={{ width: 100 }}>
              <div style={partnerStyle}>
                <img style={{ marginTop: "10px" }} src={ncc} alt="Ncc Logo" />{" "}
              </div>
              <div style={partnerStyle}>
                <img
                  style={{ paddingLeft: "20px" }}
                  src={jona}
                  alt="JonaPwd Logo"
                />{" "}
              </div>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          textAlign:'center',
          justifyContent:'center',
          alignItems:'center',
          
        }}>
          <Typography>Video here</Typography>
        </Box>
      </Box>
    </>
  );
};

export default FutureSection;
const learnMoreButton = {
  "margin-top": "20px",
};
const partnerStyle = {
  width: "100%",
  padding: 1,
};
