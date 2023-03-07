import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ncc from "../assets/svgs/NCC.svg";
import jona from "../assets/svgs/jonapwd.svg";
import logoright from "../assets/images/logo-right.svg";
import video from "../assets/video/WalkitVideo.mp4";
import overlay from '../assets/images/videoOverlay.png';

const FutureSection = () => {
  const removeImage = () => {
    const overlayImage = document.getElementById('overlay-image');
    overlayImage.remove();
    overlayImage.display = "none";
  }
  
  return (
    <>
      <Box id="future_section">
        <Box
          sx={{
            paddingTop: 5,
            paddingLeft: 3,
            backgroundImage: `url(${logoright})`,
            backgroundRepeat: "no-repeat",
            position: "absolute",
            width: "621px",
            height: "600px",
            left: "0px",
            top: "50px",
            //  backgroundColor:'black',
          }}
        ></Box>

        <Box
          sx={{
            position: "absolute",
            // backgroundColor:'black',
            top: "205px",
            left: "206px",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "490px",
              height: "317px",
              // backgroundColor:'black'
            }}
          >
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: 900,
                // lineHeight: "40px",
                fontFamily: "Poppins",
                width: "487px",
                height: "141px",
                // letterSpacing:'-0.02em',
                lineHeight: "117.02%",
                letterSpacing: "-0.02em",
              }}
            >
              The future of &nbsp;
              <span
                style={{
                  borderBottom: "4px solid white",
                  display: "inline-block",
                  lineHeight: "27px",
                  borderColor: "#FED636",
                  color: "#48017D",
                  letterSpacing: "-0.02em",
                }}
              >
                automated
              </span>
              <span
                style={{
                  borderBottom: "4px solid white",
                  display: "inline-block",
                  lineHeight: "27px",
                  borderColor: "#FED636",
                  color: "#48017D",
                  letterSpacing: "-0.02em",
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
                width: "469px",
                height: "78px",
              }}
            >
              We are building a revolutionary device called{" "}
              <span style={{ color: "#48017D" }}> “White Bot”</span> designed to
              help visually impaired individuals navigate the world around them
              with ease and confidence
            </Typography>
            <div style={learnMoreButton}>
              <Button
                sx={{
                  color: "white",
                  borderRadius: "30px",
                  backgroundColor: "#48017D",
                  padding: 1,
                  // width: { xs: "50%", md: "30%" },
                  textTransform: "none",
                  fontFamily: "PoppinsRegular",
                  overflow: "hidden",
                  position: "absolute",
                  width: "140px",
                  height: "42px",
                  fontSize: "16px",
                }}
              >
                Learn more
              </Button>
            </div>
          </div>
          <Box
            sx={{
              position: "absolute",
              width: "215px",
              height: "91px",
              // left: "201px",
              top: "356px",
            }}
          >
            <Typography
              sx={{
                color: "#4E4E4E",
                fontFamily: "PoppinsRegular",
                fontWeight: 700,
                position: "absolute",
                top: "2px",
              }}
            >
              Partners
            </Typography>
            <Box
              display="flex"
              sx={{ width: 100, position: "absolute", top: "35px" }}
            >
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
        <Box
          sx={{
            position: "absolute",
            left: "811px",
            top: "210px",
            m:0, p:0,
            overflow:"hidden",
          }}
        >
          <img src={overlay} alt="Video Overlay" id="overlay-image" style={{
              position:'absolute',
              top: 0,
              left: 0,
              height:'422px',
            }} onClick={removeImage} />
          <video
            width="750px"
            height="422px"
            autoPlay="autoplay"
            onClick={removeImage}
            style={{
              borderRadius:'10px',
              display: 'block'
            }}
            controls
          >
            
            <source src={video} type="video/mp4" />
          </video>
        </Box>
      </Box>
    </>
  );
};

export default FutureSection;
const learnMoreButton = {
  marginTop: "20px",
};
const partnerStyle = {
  width: "100%",
  padding: 1,
};
