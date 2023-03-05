import { Button, Divider, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";
import StyledMenu from "../helpers/StyledMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ReactComponent as Values } from "../assets/svgs/values.svg";
import { ReactComponent as Benefits } from "../assets/svgs/benefits.svg";
import { ReactComponent as Partner } from "../assets/svgs/partner2.svg";
import { ReactComponent as Volunteer } from "../assets/svgs/volunteer.svg";
import { ReactComponent as Community } from "../assets/svgs/community.svg";
import navbar1 from "../assets/images/navbar1.png";
import navbar2 from "../assets/images/navbar2.png";
import navbar3 from "../assets/images/navbar3.png";
import navbar4 from "../assets/images/navbar4.png";
import logo from "../assets/images/walkLogo.png";
import missionNav from "../assets/images/missionNav.png";

const MainNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElForJoin, setAnchorElForJoin] = useState(null);
  const open = Boolean(anchorEl);
  const openJoin = Boolean(anchorElForJoin);

  const handleClick = (event) => {
    console.log(event);
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClickJoin = (event) => {
    console.log(event);
    setAnchorElForJoin(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseJoin = () => {
    setAnchorElForJoin(null);
  };

  const openOverlay = () => {
    document.getElementById("overlay").style.display = "block";
  };

  const closeOverlay = () => {
    document.getElementById("overlay").style.display = "none";
  };

  const openStoryOverlay = () => {
    document.getElementById("story_overlay").style.display = "block";
  };

  const closeStoryOverlay = () => {
    document.getElementById("story_overlay").style.display = "none";
  };

  return (
    <>
      <nav
        style={{
          position: "absolute",
          background: "white",
          width: "1523px",
          height: "76px",
          left: "0px",
          top: "0px",
          boxShadow: "0px 6px 28px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "205px",
              top: "21px",
            }}
          >
            <img src={logo} alt="Walk It Logo" width="135px" height="41px" />
          </div>

          <p
            onClick={openStoryOverlay}
            style={{
              textDecoration: "none",
              color: "black",
              position: "absolute",
              width: "95px",
              height: "24px",
              left: "399px",
              top: "29px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              cursor: "pointer",
            }}
          >
            Our Story
          </p>

          <Button
            id="about-us-button"
            aria-controls={open ? "about-us-button" : ""}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // variant="contained"
            onClick={handleClick}
            sx={{
              position: "absolute",
              width: "120px",
              height: "21px",
              left: "525px",
              top: "31px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "21px",
              color: "#111111",
              textTransform: "none",
            }}
            endIcon={<KeyboardArrowDownIcon />}
            disableRipple
            onMouseOver={handleClick}
          >
            About Us
          </Button>
          <StyledMenu
            id="menu-item"
            MenuListProps={{
              "aria-labelledby": "about-us-button",
              onMouseLeave: handleClose,
            }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <div style={{ padding: "6px 7px 0px 0px" }}>
                <Values />
              </div>
              <span
                style={{
                  fontFamily: "PoppinsRegular",
                }}
              >
                Core Values
              </span>
            </MenuItem>
            <Divider sx={{ my: 0.5, mr: 1, ml: 1 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <div style={{ padding: "6px 7px 0px 0px" }}>
                <Benefits />
              </div>
              <span
                style={{
                  fontFamily: "PoppinsRegular",
                }}
              >
                Benefits
              </span>
            </MenuItem>
            <Divider sx={{ my: 0.5, mr: 1, ml: 1 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <div style={{ padding: "6px 7px 0px 0px" }}>
                <img src={missionNav} alt="" />
              </div>
              <span
                style={{
                  fontFamily: "PoppinsRegular",
                }}
              >
                Mission & Vision
              </span>
            </MenuItem>
          </StyledMenu>

          <Button
            id="join-us-button"
            aria-controls={openJoin ? "join-us-button" : ""}
            aria-haspopup="true"
            aria-expanded={openJoin ? "true" : undefined}
            // variant="contained"
            onClick={handleClickJoin}
            sx={{
              position: "absolute",
              width: "120px",
              height: "21px",
              left: "660px",
              top: "31px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "21px",
              color: "#111111",
              textTransform: "none",
            }}
            endIcon={<KeyboardArrowDownIcon />}
            disableRipple
            onMouseOver={handleClickJoin}
          >
            Join Us
          </Button>
          <StyledMenu
            id="menu-items"
            MenuListProps={{
              "aria-labelledby": "join-us-button",
              onMouseLeave: handleCloseJoin,
            }}
            anchorEl={anchorElForJoin}
            open={openJoin}
            onClose={handleCloseJoin}
          >
            <MenuItem onClick={handleCloseJoin} disableRipple>
              <div style={{ padding: "6px 7px 0px 0px" }}>
                <Partner />
              </div>
              <span
                style={{
                  fontFamily: "PoppinsRegular",
                }}
              >
                As a Partner
              </span>
            </MenuItem>
            <Divider sx={{ my: 0.5, mr: 1, ml: 1 }} />
            <MenuItem onClick={handleCloseJoin} disableRipple>
              <div style={{ padding: "6px 7px 0px 0px" }}>
                <Volunteer />
              </div>
              <span
                style={{
                  fontFamily: "PoppinsRegular",
                }}
              >
                Volunteer
              </span>
            </MenuItem>
            <Divider sx={{ my: 0.5, mr: 1, ml: 1 }} />
            <MenuItem onClick={handleCloseJoin} disableRipple>
              <div style={{ padding: "6px 7px 0px 0px" }}>
                <Community />
              </div>
              <span
                style={{
                  fontFamily: "PoppinsRegular",
                }}
              >
                Community
              </span>
            </MenuItem>
          </StyledMenu>

          <div
            style={{
              position: "absolute",
              left: "973px",
              top: "22px",
              display: "flex",
              width: "150.89px",
              height: "46.34px",
            }}
          >
            <a href="/">
              <img
                src={navbar1}
                alt=""
                style={{
                  position: "absolute",
                  left: "0px",
                  width: "25px",
                  height: "25px",
                }}
              />
            </a>

            <a href="/">
              <img
                src={navbar2}
                alt=""
                style={{
                  position: "absolute",
                  left: "45px",
                }}
              />
            </a>

            <a href="/">
              {" "}
              <img
                src={navbar3}
                alt=""
                style={{
                  position: "absolute",
                  left: "90px",
                }}
              />
            </a>

            <a href="/">
              <img
                src={navbar4}
                alt=""
                style={{
                  position: "absolute",
                  left: "135px",
                  width: "22.89px",
                  height: "46.34px",
                }}
              />
            </a>
          </div>

          <Button
            sx={{
              backgroundColor: "#48017D",
              color: "white",
              fontFamily: "inherit",
              borderRadius: 10,
              // width: "80%",
              // padding: 1,
              position: "absolute",
              width: "110px",
              height: "42px",
              left: "1195px",
              top: "19px",
              "&:hover": {
                backgroundColor: "#48017D",
              },
            }}
            onClick={openOverlay}
          >
            FAQ
          </Button>
        </div>
      </nav>

      <div
        id="overlay"
        style={{
          position: "fixed",
          display: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 3,
        }}
      >
        <div
          id="text"
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            fontSize: "12px",
            color: "white",
            transform: "translate(-50%,-50%)",
            backgroundColor: "#FFFFFF",
            width: "593px",
            height: "509px",
            boxShadow: "0px 0px 77px 82px rgba(0, 0, 0, 0.1)",
            borderRadius: "30px",
          }}
        >
          <p
            style={{
              position: "absolute",
              width: "63px",
              height: "31px",
              left: "30px",
              top: "42px",
              fontFamily: "PoppinsRegular",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "123%",
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            FAQ
          </p>
          <div
            style={{
              fontFamily: "PoppinsRegular",
              position: "absolute",
              width: "526px",
              height: "465px",
              left: "30px",
              top: "93px",
              fontStyle: "normal",
              // fontWeight: 700,
              fontSize: "12px",
              lineHeight: "123%",
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            <div
              style={{
                position: "absolute",
                color: "#000",
                fontFamily: "PoppinsRegular",
              }}
            >
              <p style={{ color: "#000", fontFamily: "PoppinsRegular" }}>
                <span>Q:</span>
                &nbsp; Does the device make use of SIM for the emergency module?
              </p>
              <p style={{ fontFamily: "PoppinsRegular" }}>
                <span>A:</span>
                &nbsp; Yes, the device makes use of a GSM module to perform the
                location-tracking feature.
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                color: "#000",
                fontFamily: "PoppinsRegular",
                top: "50px",
              }}
            >
              <p style={{ color: "#000", fontFamily: "PoppinsRegular" }}>
                <span>Q:</span>
                &nbsp; Can the device detect pit holes, unleveled roads, wide
                gutters etc
              </p>
              <p style={{ fontFamily: "PoppinsRegular" }}>
                <span>A:</span>
                &nbsp; Yes, This product considers the real challenges they face
                based on data gotten from user feedback. The aim is to
                supplement the functionality of a white cane and not replace it.
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                color: "#000",
                fontFamily: "PoppinsRegular",
                top: "125px",
              }}
            >
              <p style={{ color: "#000", fontFamily: "PoppinsRegular" }}>
                <span>Q:</span>
                &nbsp; Who are your target audience and what class (Rich,
                Average, Poor, Helpless) of persons is this project on?
              </p>
              <p style={{ fontFamily: "PoppinsRegular" }}>
                <span>A:</span>
                &nbsp; Our target market is the visually impaired and is price
                inclusive for every class.
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                color: "#000",
                fontFamily: "PoppinsRegular",
                top: "190px",
              }}
            >
              <p style={{ color: "#000", fontFamily: "PoppinsRegular" }}>
                <span>Q:</span>
                &nbsp; Is there a particular way for the users to wear the
                device?
              </p>
              <p style={{ fontFamily: "PoppinsRegular" }}>
                <span>A:</span>
                &nbsp; There would be a strap on the back, but besides that it
                will be customizable to meet the users need i.eUsers can decide
                to have it as a strap on their cane / chest, or for it to be
                worn as a belt etc.
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                color: "#000",
                fontFamily: "PoppinsRegular",
                top: "265px",
              }}
            >
              <p style={{ color: "#000", fontFamily: "PoppinsRegular" }}>
                <span>Q:</span>
                &nbsp; Can the device connect to other smart objects?
              </p>
              <p style={{ fontFamily: "PoppinsRegular" }}>
                <span>A:</span>
                &nbsp; The current prototype cannot connect to other smart
                object, the end goal of this device is to behave like an
                automated vehicle that can sense its environment and connect
                with other smart devices to promote the passage and entry of
                information to and from the device.
              </p>
            </div>
          </div>
          <button
            style={{
              position: "absolute",
              width: "91px",
              height: "35px",
              left: "476px",
              top: "447px",
              backgroundColor: "#48017D",
              border: "none",
              borderRadius: "30px",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={closeOverlay}
          >
            <p>Close</p>
          </button>
        </div>
      </div>

      <div
        id="story_overlay"
        style={{
          position: "fixed",
          display: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 3,
        }}
      >
        <div
          id="text"
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            fontSize: "12px",
            color: "white",
            transform: "translate(-50%,-50%)",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 0px 77px 82px rgba(0, 0, 0, 0.1)",
            borderRadius: "30px",
            width: "636px",
            height: "585px",
          }}
        >
          <p
            style={{
              position: "absolute",
              width: "115px",
              height: "31px",
              left: "33px",
              top: "43px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "123%",
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Our Story
          </p>
          <div
            style={{
              fontFamily: "PoppinsRegular",
              position: "absolute",
              width: "526px",
              height: "465px",
              left: "33px",
              top: "85px",
              fontStyle: "normal",
              fontSize: "12px",
              lineHeight: "123%",
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            <div
              style={{
                position: "absolute",
                color: "#000",
                fontFamily: "PoppinsRegular",
              }}
            >
              <p style={{ color: "#000", fontFamily: "PoppinsRegular" }}>
                This innovative idea came about during a training bootcamp in
                enrolled in while in the university 2020. At the end of the
                program a project was assigned relating to the use of object
                detection technologies. My Dad always told me to observe
                people's needs and offer value in that area. I began to research
                on the visually impaired and how an object detection device
                would improve the livelihood of the visually impaired in my
                immediate environment, and by extension the nation as a whole. I
                came across a report from 2020 by the National Association of
                the Blind (NAB), they expressed a claim for an accessible & safe
                Nigeria with better roads & safe buildings. They also mentioned
                the untoward behaviours meted out by some Nigerians to the
                blind. This report drove my purpose in attending to this
                challenge with a creative solution.
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                color: "#000",
                fontFamily: "PoppinsRegular",
                top: "160px",
              }}
            >
              <p style={{ color: "#000", fontFamily: "PoppinsRegular" }}>
                In the following years, a prototype I created was exhibited
                during the Babcock University Computer Club (BUCC) Software
                Exhibition, the ALAT Hackaholic 3.0 at Babcock University. It
                was also submitted as a course work in my final year with
                various approval.
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                color: "#000",
                fontFamily: "PoppinsRegular",
                top: "220px",
              }}
            >
              <p style={{ color: "#000", fontFamily: "PoppinsRegular" }}>
                Over time, a goal-driven team inspired to achieve this value has
                been growing, and this product has been iterated severally based
                on user feedback and analysis carried out to improve the user
                experience.
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                color: "#000",
                fontFamily: "PoppinsRegular",
                top: "280px",
              }}
            >
              <p style={{ color: "#000", fontFamily: "PoppinsRegular"}}>
                In 2023, it was registered as a company named Walk IT Enterprise
                with the Corporate Affairs Commission (CAC) to legalize all
                activities being carried out. We also entered into partnership
                with the Joint National Association of Persons with Disability
                (JONAPWD).
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                color: "#000",
                fontFamily: "PoppinsRegular",
                top: "340px",
              }}
            >
              <p style={{ color: "#000", fontFamily: "PoppinsRegular" }}>
                Today, we are continually working on new and innovative ways to
                improve our products and services for our clients. Our team is
                passionate about what we do and are dedicated to delivering the
                best solutions to meet the needs of the visually impaired
                worldwide.
              </p>
            </div>
          </div>
          <button
            style={{
              position: "absolute",
              width: "110px",
              height: "42px",
              left: "476px",
              top: "509px",
              backgroundColor: "#48017D",
              border: "none",
              borderRadius: "30px",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={closeStoryOverlay}
          >
            <p>Close</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
