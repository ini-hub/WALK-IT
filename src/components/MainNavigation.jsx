import { Button, Divider, MenuItem, Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { ReactComponent as Logo } from "../assets/svgs/logo.svg";
import StyledMenu from "../helpers/StyledMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ReactComponent as Values } from "../assets/svgs/values.svg";
import { ReactComponent as Benefits } from "../assets/svgs/benefits.svg";
import { ReactComponent as Mission } from "../assets/svgs/mission.svg";
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

  return (
    <>
      <nav
        style={{
          position: "absolute",
          background:'white',
          width: "1523px",
          height: "76px",
          left: "0px",
          top: "51px",
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

          <a
            href="/"
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
            }}
          >
            Our Story
          </a>

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
                Mission & Mission
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
            }}
          >
            FAQ
          </Button>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
const styles = {
  buttonStyle: {
    position: "absolute",
    width: "73px",
    height: "21px",
    left: "525px",
    top: "82px",
    backgroundColor: "white",
    borderColor: "none",
    color: "black",
    fontFamily: "Poppins",
    boxShadow: "none",
    margin: 0,
    textTransform: "capitalize",
    cursor: "default",
    width: "18%",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "none",
      borderColor: "none",
    },
  },
};
