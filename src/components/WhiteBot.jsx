import { Box } from "@mui/material";
import React from "react";
import whiteBot from "../assets/images/whiteBot.svg";
import timeline from "../assets/images/timeline.svg";
import signs from "../assets/images/signs.svg";

const WhiteBot = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "2426px",
          width: "1555px",
        }}
      >
        <div
          style={{
            height: "549px",
            position: "absolute",
            backgroundColor: "#111111",
            left: "0",
            width: "1555px",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                left: "206px",
                position: "absolute",
                width: "308px",
                height: "120px",
                top: "53px",
              }}
            >
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "32px",
                  lineHeight: "117.02%",
                  letterSpacing: "-0.02em",
                  color: "#FED636",
                }}
              >
                Introducing
              </p>
              <span
                style={{
              
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "64px",
                  lineHeight: "117.02%",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                }}
              >
                White Bot
              </span>
            </div>
            <div
              style={{
                position:'absolute',
                left: "800px",
                top:'57px'
              }}
            >
              <img src={signs} alt=""/>
            </div>
          </div>

          <p
            style={{
              position: "absolute",
              width: "104px",
              height: "36px",
              left: "205px",
              top: "224px",
            }}
          >
            Features
          </p>

          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "271px",
                height: "557px",
                left: "205px",
                top: "280px",
                fontSize: "16px",
              }}
            >
              <p>- Object detection sensor</p>
              <p style={{ top: "56px", position: "absolute" }}>
                - Image recognition
              </p>
              <p style={{ top: "112px", position: "absolute" }}>
                - Feedback module to alert users
              </p>
              <p
                style={{
                  top: "168px",
                  position: "absolute",
                  letterSpacing: "-0.02rem",
                }}
              >
                - Send SOS with real-time location
              </p>
              <p style={{ top: "224px", position: "absolute" }}>
                - Bluetooth connectivity
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "535px",
            position: "relative",
            background: "#FCF9FF",
            width: "1459px",
            top: "550px",
            color: "#111111",
            display: "flex",
            fontFamily: "16px",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "271px",
              height: "557px",
              left: "205px",
              fontSize: "16px",
            }}
          >
            <p style={{ top: "26px", position: "absolute" }}>
              - Internet connectivity
            </p>
            <p style={{ top: "82px", position: "absolute" }}>
              - Offline and Online Mode
            </p>
            <p style={{ top: "138px", position: "absolute" }}>
              - Solar panelled
            </p>
            <p style={{ top: "194px", position: "absolute" }}>
              - Light and easy to operate
            </p>

            <div
              style={{
                position: "absolute",
                top: "300px",
                color: "black",
              }}
            >
              <p
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "36px",
                  /* identical to box height */
                  letterSpacing: "-0.02em",
                  width: "95px",
                  height: "36px",
                }}
              >
                Benefits
              </p>

              <img
                src={timeline}
                alt=""
                style={{
                  marginTop: "20px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#111111",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    width: "143px",
                    height: "48px",
                    // left: "207px",
                    top: "120px",
                    lineHeight: "24px",
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Convenience in Artificial Inception
                </p>

                <p
                  style={{
                    position: "absolute",
                    width: "253px",
                    height: "24px",
                    left: "199px",
                    top: "120px",
                    lineHeight: "24px",
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Swift Assistance and Navigation
                </p>
                <p
                  style={{
                    position: "absolute",
                    width: "260px",
                    height: "48px",
                    left: "528px",
                    top: "120px",
                    lineHeight: "24px",
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Intelligent and Human Computer Interaction (HCI) Centered
                </p>
                <p
                  style={{
                    position: "absolute",
                    width: "170px",
                    height: "48px",
                    left: "918px",
                    top: "120px",
                    lineHeight: "24px",
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Seamless Emergency Alert to Guardians
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "-500px",
              left: "90px",
              height: "803px",
            }}
          >
            <img
              src={whiteBot}
              alt=""
              height="803px"
              width="1282px"
              style={{
                position: "absolute",
                left: "60px",
              }}
            />
          </div>
        </div>
      </Box>
    </>
  );
};

export default WhiteBot;
