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
import navbar1 from "../assets/images/navbar1.svg";
import navbar2 from "../assets/images/navbar2.svg";
import navbar3 from "../assets/images/navbar3.svg";
import navbar4 from "../assets/images/navbar4.svg";
import logo from "../assets/images/walkLogo.svg";
import missionNav from "../assets/images/missionNav.png";

import "./MainNavigation.css";

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
      <nav className="main_nav">
        <div className="main_nav_wrapper">
          <div className="logo_container">
            <img src={logo} alt="Walk It Logo" width="135px" height="41px" />
          </div>

          <p className="our_story" onClick={openStoryOverlay}>
            Our Story
          </p>

          <Button
            id="about-us-button"
            aria-controls={open ? "about-us-button" : ""}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // variant="contained"
            onClick={handleClick}
            className="about_us_btn"
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
              <div className="menu_icon">
                <Values />
              </div>
              <span className="ff_poppins_reg">
                <a href="/#target_section">Issues Targeted</a>
              </span>
            </MenuItem>
            <Divider sx={{ my: 0.5, mr: 1, ml: 1 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <div className="menu_icon">
                <Benefits />
              </div>
              <span className="ff_poppins_reg">Benefits</span>
            </MenuItem>
            <Divider sx={{ my: 0.5, mr: 1, ml: 1 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <div className="menu_icon">
                <img src={missionNav} alt="" />
              </div>
              <span className="ff_poppins_reg">Mission & Vision</span>
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
              <div className="menu_icon">
                <Partner />
              </div>
              <span className="ff_poppins_reg">As a Partner</span>
            </MenuItem>
            <Divider sx={{ my: 0.5, mr: 1, ml: 1 }} />
            <MenuItem onClick={handleCloseJoin} disableRipple>
              <div style={{ padding: "6px 7px 0px 0px" }}>
                <Volunteer />
              </div>
              <span className="ff_poppins_reg">Volunteer</span>
            </MenuItem>
            <Divider sx={{ my: 0.5, mr: 1, ml: 1 }} />
            <MenuItem onClick={handleCloseJoin} disableRipple>
              <div className="menu_icon">
                <Community />
              </div>
              <span className="ff_poppins_reg">Community</span>
            </MenuItem>
          </StyledMenu>

          <div className="nav_translations_container">
            <a href="/">
              <img className="navbar1" src={navbar1} alt="" />
            </a>

            <a href="/">
              <img className="navbar2" src={navbar2} alt="" />
            </a>

            <a href="/">
              {" "}
              <img className="navbar3" src={navbar3} alt="" />
            </a>

            <a href="/">
              <img className="navbar4" src={navbar4} alt="" />
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
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ffffff",
                border: "1px solid #FED636",
                color: "#48017D",
                fontWeight: "bold",
              },
            }}
            onClick={openOverlay}
          >
            FAQ
          </Button>
        </div>
      </nav>

      <div id="overlay" className="faq_modal">
        <div className="faq_modal_wrapper" id="text">
          <p className="faq_header">FAQ</p>
          <div className="faq_container">
            <div className="faq_wrapper faq_first">
              <p>
                <span>Q:</span>
                &nbsp; Does the device make use of SIM for the emergency module?
              </p>
              <p>
                <span>A:</span>
                &nbsp; Yes, the device makes use of a GSM module to perform the
                location-tracking feature.
              </p>
            </div>

            <div className="faq_wrapper faq_second">
              <p>
                <span>Q:</span>
                &nbsp; Can the device detect pit holes, unleveled roads, wide
                gutters etc
              </p>
              <p>
                <span>A:</span>
                &nbsp; Yes, This product considers the real challenges they face
                based on data gotten from user feedback. The aim is to
                supplement the functionality of a white cane and not replace it.
              </p>
            </div>

            <div className="faq_wrapper faq_third">
              <p>
                <span>Q:</span>
                &nbsp; Who are your target audience and what class (Rich,
                Average, Poor, Helpless) of persons is this project on?
              </p>
              <p>
                <span>A:</span>
                &nbsp; Our target market is the visually impaired and is price
                inclusive for every class.
              </p>
            </div>

            <div className="faq_wrapper faq_forth">
              <p>
                <span>Q:</span>
                &nbsp; Is there a particular way for the users to wear the
                device?
              </p>
              <p>
                <span>A:</span>
                &nbsp; There would be a strap on the back, but besides that it
                will be customizable to meet the users need i.e Users can decide
                to have it as a strap on their cane / chest, or for it to be
                worn as a belt etc.
              </p>
            </div>

            <div className="faq_wrapper faq_fifth">
              <p>
                <span>Q:</span>
                &nbsp; Can the device connect to other smart objects?
              </p>
              <p>
                <span>A:</span>
                &nbsp; The current prototype cannot connect to other smart
                object, the end goal of this device is to behave like an
                automated vehicle that can sense its environment and connect
                with other smart devices to promote the passage and entry of
                information to and from the device.
              </p>
            </div>
          </div>
          <button className="faq_modal_close_btn" onClick={closeOverlay}>
            <p>Close</p>
          </button>
        </div>
      </div>

      <div id="story_overlay" className="our_story_modal">
        <div id="text" className="our_story_container">
          <p className="our_story_header">Our Story</p>
          <div className="our_story_text_wrapper">
            <div
              className="our_story_text our_story_text_first"
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
              className="our_story_text our_story_text_second"
              
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
              className="our_story_text our_story_text_third"
              
            >
              <p style={{ color: "#000", fontFamily: "PoppinsRegular" }}>
                Over time, a goal-driven team inspired to achieve this value has
                been growing, and this product has been iterated severally based
                on user feedback and analysis carried out to improve the user
                experience.
              </p>
            </div>

            <div
              className="our_story_text our_story_text_forth"
              
            >
              <p style={{ color: "#000", fontFamily: "PoppinsRegular" }}>
                In 2023, it was registered as a company named Walk IT Enterprise
                with the Corporate Affairs Commission (CAC) to legalize all
                activities being carried out. We also entered into partnership
                with the Joint National Association of Persons with Disability
                (JONAPWD).
              </p>
            </div>

            <div
              className="our_story_text our_story_text_fifth"
              
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
            className="our_story_modal_close_btn"
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
