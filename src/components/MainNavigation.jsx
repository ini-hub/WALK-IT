import {
  Button,
  Divider,
  MenuItem,
  Typography,
  Box,
  AppBar,
} from "@mui/material";
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
              width: "135px",
              height: "41px",
              left: "205px",
              top: "21px",
            }}
          >
            <Logo />
          </div>

          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "black",
              position: "absolute",
              width: "75px",
              height: "24px",
              left: "399px",
              top: "29px",
              fontFamily: "PoppinsRegular",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Our Story
          </a>

          <button
            id="about-us-button"
            // aria-controls={open ? "about-us-button" : ""}
            // aria-haspopup="true"
            // aria-expanded={open ? "true" : undefined}
            // variant="contained"
            // onClick={handleClick}
            style={{
              position: "absolute",
              width: "73px",
              height: "21px",
              left: "525px",
              top: "82px",
            }}
            // endIcon={<KeyboardArrowDownIcon />}
            // disableRipple
            // onMouseOver={handleClick}
          >
            About Us
          </button>
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
              Core Values
            </MenuItem>
            <Divider sx={{ my: 0.5, mr: 1, ml: 1 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <div style={{ padding: "6px 7px 0px 0px" }}>
                <Benefits />
              </div>
              Benefits
            </MenuItem>
            <Divider sx={{ my: 0.5, mr: 1, ml: 1 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <div style={{ padding: "6px 7px 0px 0px" }}>
                <Mission />
              </div>
              Mission & Mission
            </MenuItem>
          </StyledMenu>

          <Button
            id="join-us-button"
            aria-controls={openJoin ? "join-us-button" : ""}
            aria-haspopup="true"
            aria-expanded={openJoin ? "true" : undefined}
            variant="contained"
            onClick={handleClickJoin}
            sx={styles.buttonStyle}
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
              As a Partner
            </MenuItem>
            <Divider sx={{ my: 0.5, mr: 1, ml: 1 }} />
            <MenuItem onClick={handleCloseJoin} disableRipple>
              <div style={{ padding: "6px 7px 0px 0px" }}>
                <Volunteer />
              </div>
              Volunteer
            </MenuItem>
            <Divider sx={{ my: 0.5, mr: 1, ml: 1 }} />
            <MenuItem onClick={handleCloseJoin} disableRipple>
              <div style={{ padding: "6px 7px 0px 0px" }}>
                <Community />
              </div>
              Community
            </MenuItem>
          </StyledMenu>

          <Box sx={{ float: "right", width: "15%" }}>
            <Button
              sx={{
                backgroundColor: "#48017D",
                color: "white",
                fontFamily: "inherit",
                borderRadius: 10,
                width: "80%",
                padding: 1,
              }}
            >
              FAQ
            </Button>
          </Box>
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
