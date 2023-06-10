import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ncc from "../../assets/svgs/NCC.svg";
import jona from "../../assets/svgs/jonapwd.svg";
import logoright from "../../assets/images/logo-right.svg";
import video from "../../assets/video/WalkitVideo.mp4";
import overlay from "../../assets/images/videoOverlay.png";
import styles from "./future.module.css";

const FutureSection = () => {
  const removeImage = () => {
    const overlayImage = document.getElementById("overlay-image");
    overlayImage.remove();
    overlayImage.display = "none";
  };

  return (
    <>
      <Box id="future_section">
        <Box className={styles["wrapper"]}></Box>
        <Box className={styles["left-side"]}>
          <div className={styles["left-side-wrapper"]}>
            <p className={styles["future-text"]}>
              The future of &nbsp;
              <span className={styles["automate"]}>automated</span>
              <span className={styles["automate"]}>mobility</span> for the
              visually impaired.
            </p>
            <p className={styles["revolution"]}>
              We are building a revolutionary device called{" "}
              <span style={{ color: "#48017D" }}> “White Bot”</span> designed to
              help visually impaired individuals navigate the world around them
              with ease and confidence
            </p>
            <div style={learnMoreButton}>
              <button className={styles["learn"]}>Learn more</button>
            </div>
          </div>
          <div className={styles["partner-wrapper"]}>
            <p className={styles["partner-text"]}>Partners</p>
            <Box className={styles["wrapper-partner-logo"]}>
              <div style={partnerStyle}>
                <img className={styles["ncc"]} src={ncc} alt="Ncc Logo" />{" "}
              </div>
              <div style={partnerStyle}>
                <img className={styles["pwd"]} src={jona} alt="JonaPwd Logo" />{" "}
              </div>
            </Box>
          </div>
        </Box>
        <Box className={styles["video-wrapper"]}>
          <img
            src={overlay}
            alt="Video Overlay"
            id="overlay-image"
            className={styles["video-image"]}
            onClick={removeImage}
          />
          <div>
          <video
            className={styles["walkit-video"]}
            autoPlay="autoplay"
            onClick={removeImage}
            controls
          >
            <source src={video} type="video/mp4" />
          </video>
          </div>
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
