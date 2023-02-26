import { Box, Divider } from "@mui/material";
import arrow from "../assets/images/upwardArrow.png";
import logo from "../assets/images/walkLogo.png";
import Instagram from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";
import YouTube from "../assets/images/youTube.png";
import Facebook from "../assets/images/facebook.png";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        position: "absolute",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "1288px",
          height: "480px",
          left: "82px",
          top: "4701px",
          display: "flex",
          right:'147px'
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "1288px",
            height: "480px",
            // top: "451px",
          }}
        >
          <p style={paragraphStyle}> Company</p>
          <span
            style={{
              position: "absolute",
              width: "95.59px",
              height: "22.14px",
              top: "50.31px",
              fontFamily: "PoppinsRegular",
              color: "#363636",
            }}
          >
            Our Story
          </span>
          <p
            style={{
              position: "absolute",
              width: "95.59px",
              height: "22.14px",
              top: "93.58px",
              fontFamily: "PoppinsRegular",
            }}
          >
            FAQ
          </p>
          <p
            style={{
              position: "absolute",
              width: "95.59px",
              height: "22.14px",
              top: "136.86px",
              fontFamily: "PoppinsRegular",
            }}
          >
            Careers
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            width: "1288px",
            height: "480px",
            // top: "451px",
            left: "264.4px",
          }}
        >
          <p style={paragraphStyle}>Product</p>
          <span
            style={{
              position: "absolute",
              width: "95.59px",
              height: "22.14px",
              top: "50.31px",
              fontFamily: "PoppinsRegular",
            }}
          >
            White Bot
          </span>
          <p
            style={{
              position: "absolute",
              width: "95.59px",
              height: "22.14px",
              top: "93.58px",
              fontFamily: "PoppinsRegular",
            }}
          >
            Cam Bot
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            width: "1288px",
            height: "480px",
            // top: "451px",
            left: "543.82px",
          }}
        >
          <p style={paragraphStyle}>Contact Us</p>

          <a
            href="/"
            style={{
              position: "absolute",
              width: "242.65px",
              height: "22.14px",
              top: "50.31px",
              fontFamily: "PoppinsRegular",
              color: "#363636",
            }}
          >
            0813 830 3956
          </a>
          <a
            href="/"
            style={{
              position: "absolute",
              width: "242.65px",
              height: "22.14px",
              top: "93.58px",
              fontFamily: "PoppinsRegular",
              color: "#363636",
            }}
          >
            info.walkit@gmail.com
          </a>
        </div>

        <div
          style={{
            position: "absolute",
            width: "317.4px",
            height: "260.63px",
            // top: "451px",
            left: "846.52px",
          }}
        >
          <p style={paragraphStyle}>Got questions?</p>

          <span
            style={{
              position: "absolute",
              top: "50.31px",
            }}
          >
            We have an answer
          </span>
          <div
            style={{
              position: "absolute",
              top: "93.58px",
            }}
          >
            <input
              type="email"
              placeholder="Email"
              style={{
                width: "316.18px",
                height: "40.25px",
                paddingLeft: "10px",
                boxSizing: "border-box",
                fontSize: "14px",
                background: "#F3F3F3",
                borderRadius: "8px",
                border: "none",
                fontFamily: "PoppinsRegular",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: "145.9px",
            }}
          >
            <input
              type="question"
              placeholder="Question"
              style={{
                width: "316.18px",
                height: "60.38px",
                paddingLeft: "10px",
                boxSizing: "border-box",
                fontSize: "14px",
                background: "#F3F3F3",
                borderRadius: "8px",
                border: "none",
                fontFamily: "PoppinsRegular",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: "223.39px",
            }}
          >
            <button
              style={{
                width: "316.18px",
                height: "40.25px",
                background: "#FAF4FF",
                borderRadius: "8px",
                border: "none",
              }}
            >
              <span style={{ color: "#48017D", textAlign: "center" }}>
                Send
              </span>
            </button>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            width: "48px",
            height: "48px",
            left: "596px",
            top: "287px",
          }}
        >
          <img src={arrow} alt="Upward arrow" />
        </div>

        <div
          style={{
            position: "absolute",
            width: "48px",
            height: "48px",
            // left: "83px",
            top: "323px",
            display: "flex",
          }}
        >
          <img src={logo} alt="Logo" width="257px" height="78px" />
          <div
            style={{
              position: "absolute",
              left: "970.6px",
              width: "225.49px",
              height: "84.53px",
              
            }}
          >
            <p style={{ paddingLeft: "7.75px" }}>Follow us</p>
            <div style={{ display: "flex", paddingTop: "17.11px" }}>
              <a href="/">
                <img src={Instagram} alt="Instagram Logo" />
              </a>
              <a href="/">
                <img src={Twitter} alt="Twitter Logo" />
              </a>
              <a href="/">
                <img src={YouTube} alt="YouTube Logo" />
              </a>
              <a href="/">
                <img src={Facebook} alt="Facebook Logo" />
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            width: "1150px",
            height: "0px",
            // left: "82px",
            right: "127px",
            top: "425px",
            display: "flex",
            border: "1px solid #717171",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            width: "1210px",
            height: "0px",
            // left: "82px",
            right: "70px",
            top: "441.57px",
            display: "flex",
            paddingBottom: "41px",
            // border:'1px solid #717171'
          }}
        >
          <p
            style={{
              fontFamily: "PoppinsRegular",
              position: "absolute",
              width: "143.38px",
              height: "27.17px",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "27px",
              letterSpacing: " -0.02em",
              color: "#000000",
            }}
          >
            Privacy Policy
          </p>
          <p
            style={{
              left: "143.38px",
              position: "absolute",
              fontFamily: "PoppinsRegular",
              width: "219.36px",
              height: "27.17px",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "27px",
              letterSpacing: " -0.02em",

              color: "#000000",
            }}
          >
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms and Services
          </p>
          <p
            style={{
              left: "900.6px",
              // right: "87px",
              position: "absolute",
              fontFamily: "PoppinsRegular",
              width: "311.28px",
              height: "27.17px",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "27px",
              letterSpacing: " -0.02em",

              color: "#000000",
            }}
          >
            © 2023 Walk IT, all rights reserved
          </p>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
const paragraphStyle = {
  position: "absolute",
  width: "161.77px",
  height: "27.17px",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "27px",
  letterSpacing: "-0.02em",
  color: "#000000",
};
