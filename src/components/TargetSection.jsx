import { Box, Grid, Typography } from "@mui/material";
import CardWallet from "../assets/images/CardWallet.jpg";
import DisabledAccess from "../assets/images/DisabledAccess.jpg";
import AccompanySkinType from "../assets/images/AccompanySkinType.jpg";
import DeleteShield from "../assets/images/DeleteShield.jpg";

import React from "react";

const TargetSection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#48017D",
          marginTop: 7,
          color: "white",
          fontFamily: "PoppinsRegular",
        }}
      >
        <Box sx={{ padding: 15, mr: 13, ml: 13 }}>
          <Typography
            sx={{ fontFamily: "Poppins", paddingBottom: 3, fontSize: "20px" }}
          >
            Issues we are{" "}
            <span
              style={{
                borderBottom: "3px solid white",
                display: "inline-block",
                lineHeight: "17px",
                borderColor: "#FED636",
              }}
            >
              targeting
            </span>
          </Typography>
          <Typography sx={{ fontFamily: "PoppinsRegular", paddingTop: 2 }}>
            Statistics have shown that 30% of the world population are visually
            impaired. Nigerians take 2% of this fraction making it about 4
            million people which translates to the fact that 1 to 53 people in
            Nigeria are visually impaired and the following are the common
            issues we are targeting.
          </Typography>
          <Grid container sx={{ marginTop: 2 }} spacing={4}>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 3,
                  color: "black",
                  padding:3
                }}
              >
                <Typography>
                  <img src={CardWallet} alt="Card Wallet" />
                </Typography>
                <Typography sx={{ fontFamily: "Poppins", marginTop: 1 }}>
                  Affordability
                </Typography>
                <Typography sx={{ fontFamily: "PoppinsRegular" }}>
                  Many Electronic traveling aid devices designed for the
                  visually impaired are relatively costly.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 3,
                  color: "black",
                  padding:3
                }}
              >
                <Typography>
                  <img src={DisabledAccess} alt="DisabledAccess" />
                </Typography>
                <Typography sx={{ fontFamily: "Poppins" }}>
                  Stigmatization
                </Typography>
                <Typography sx={{ fontFamily: "PoppinsRegular" }}>
                  There is a stigma attached to the use of white cane in the
                  society
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 3,
                  color: "black",
                  padding:3
                }}
              >
                <Typography>
                  <img src={DeleteShield} alt="Delete Shield" />
                </Typography>
                <Typography sx={{ fontFamily: "Poppins" }}>
                  Insecurity
                </Typography>
                <Typography sx={{ fontFamily: "PoppinsRegular" }}>
                  The visually impaired are susceptible to harm in the society
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 3,
                  color: "black",
                  padding:3
                }}
              >
                <Typography>
                  <img src={AccompanySkinType} alt="AccompanySkinType" />
                </Typography>
                <Typography sx={{ fontFamily: "Poppins" }}>
                  Immobility
                </Typography>
                <Typography sx={{ fontFamily: "PoppinsRegular" }}>
                  The visually impared cannot move around with ease
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default TargetSection;
