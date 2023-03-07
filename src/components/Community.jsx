import { Box } from "@mui/material";
import React from "react";
import partner from "../assets/images/partner.svg";
import volunteer from "../assets/images/volunteer.svg";
import join from "../assets/images/join.svg";

const Community = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "#ffffff",
        position: "absolute",
        width: "1707px",
        height: "592px",
        top: "4068px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top:'38px',
          fontFamily: "PoppinsRegular",
        }}
      >
        <p
          style={{
            position: "absolute",
            left: "464px",
            width: "550px",
            height: "108px",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "54px",
            textAlign: "center",
            letterSpacing: "-0.02em",
            fontFamily: "PoppinsRegular",
          }}
        >
          <span style={{ color: "#FED363" }}>Join us </span>in shaping the
          future of visual impaired technology
        </p>

        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            <div
              style={{
                width: "242px",
                height: "151px",
                left: "269px",
                top: "142px",
                position: "absolute",
              }}
            >
              <img src={partner} alt="Partner with us" />
            </div>

            <p
              style={{
                fontFamily: "PoppinsRegular",
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "27px",
                /* identical to box height */
                textAlign: "center",
                letterSpacing: "-0.02em",
                color: "#F3F3F3",
                position: "absolute",
                width: "133px",
                height: "27px",
                left: "321px",
                top: "300px",
              }}
            >
              <span style={{ fontWeight: 700 }}>Partner</span> with us
            </p>
            <p
              style={{
                fontFamily: "PoppinsRegular",
                position: "absolute",
                left: "306px",
                top: "331px",
                width: "187px",
                height: "40px",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "141.5%",
                letterSpacing: "-0.02em",
                color: "#F3F3F3",
              }}
            >
              Invest in our community
            </p>
            <button
              style={{
                fontFamily: "PoppinsRegular",
                width: "140px",
                height: "42px",
                left: "315px",
                top: "370px",
                position: "absolute",
                backgroundColor: "#48017D",
                color: "#ffffff",
                fontSize: "16px",
                borderRadius: "29px",
                border: "none",
                fontWeight: 500,
              }}
            >
              Partner
            </button>
          </div>
          <div>
            <div
              style={{
                width: "175px",
                height: "175px",
                left: "608px",
                top: "224px",
                position: "absolute",
              }}
            >
              <img src={volunteer} alt="Volunteer" />
            </div>
            <p
              style={{
                fontFamily: "PoppinsRegular",
                width: "245px",
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "27px",
                /* identical to box height */
                textAlign: "center",
                letterSpacing: "-0.02em",
                color: "#F3F3F3",
                position: "absolute",
                height: "27px",
                left: "592px",
                top: "375px",
              }}
            >
              <span style={{ fontWeight: 700 }}>Volunteer</span> to our movement
            </p>
            <p
              style={{
                fontFamily: "PoppinsRegular",
                // textAlign: "center",
                position: "absolute",
                left: "645px",
                top: "400px",
                width: "187px",
                height: "40px",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "141.5%",
                /* or 20px */

                letterSpacing: "-0.02em",

                color: "#F3F3F3",
              }}
            >
              <a href="/" style={{color:'#fff', fontFamily:'PoppinsRegular'}}>Make change happen</a>
            </p>
            <button
              style={{
                width: "140px",
                height: "42px",
                left: "645px",
                top: "435px",
                position: "absolute",
                backgroundColor: "#48017D",
                color: "#ffffff",
                fontSize: "16px",
                borderRadius: "29px",
                border: "none",
                fontWeight: 500,
              }}
            >
              <a href="/" style={{color:'#fff', fontFamily:'PoppinsRegular'}}>Volunteer</a> 
            </button>
          </div>
          <div>
            <div
              style={{
                width: "175px",
                height: "175px",
                left: "941px",
                top: "157px",
                position: "absolute",
              }}
            >
              <img src={join} alt="Join us" />
            </div>

            <p
              style={{
                fontFamily: "PoppinsRegular",
                width: "177px",
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "27px",
                textAlign: "center",
                letterSpacing: "-0.02em",
                color: "#F3F3F3",
                top: "300px",
                left: "941px",
                position: "absolute",
              }}
            >
              <span style={{ fontWeight: 700 }}>Join</span> our community
            </p>
            <p
              style={{
                fontFamily: "PoppinsRegular",
                textAlign: "center",
                position: "absolute",
                left: "937px",
                top: "330px",
                width: "187px",
                height: "40px",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "141.5%",
                /* or 20px */

                letterSpacing: "-0.02em",

                color: "#F3F3F3",
              }}
            >
              Share your expertise, values and ideas
            </p>
            <button
              style={{
                fontFamily: "PoppinsRegular",
                width: "110px",
                height: "42px",
                left: "976px",
                top: "384px",
                position: "absolute",
                backgroundColor: "#48017D",
                color: "#ffffff",
                fontSize: "16px",
                borderRadius: "29px",
                border: "none",
                fontWeight: 500,
              }}
            >
             <a href="/" style={{color:'#fff', fontFamily:'PoppinsRegular'}}>Join</a> 
            </button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Community;
