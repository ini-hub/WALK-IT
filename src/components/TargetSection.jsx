import { Box, Grid, Typography } from "@mui/material";
import { issues } from "../assets/constant/issues";
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
        <Box sx={{ padding: {md: 10, xs:5}, mr: 13, ml: 13 }}>
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
            {issues &&
              issues.map((issue) => (
                <Grid item xs={6} md={6}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderRadius: 3,
                      color: "black",
                      padding: 3,
                      maxHeight: '500px',
                      maxWidth:'100%'
                    }}
                  >
                    <Typography>
                      <img src={issue.url} alt="Card Wallet" />
                    </Typography>
                    <Typography sx={{ fontFamily: "Poppins", marginTop: 1 }}>
                      {issue.title}
                    </Typography>
                    <Typography sx={{ fontFamily: "PoppinsRegular" }}>
                      {issue.note}
                    </Typography>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default TargetSection;
