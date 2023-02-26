import { Box, Grid, Typography } from "@mui/material";
import { issues } from "../assets/constant/issues";
import mask from "../assets/images/mask.png";
import React from "react";

const TargetSection = () => {
  return (
    <>
      <Box
        sx={{
          position:'absolute',
          top:'770px',
          height:'1017px',
          backgroundColor: "#48017D",
          marginTop: 7,
          color: "white",
          fontFamily: "PoppinsRegular",  
          backgroundImage: `url(${mask})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          borderTop:'13px solid #eee',
          borderLeft:'-55px solid white',
          borderRight:'-55px solid white'
        }}
      >
        <Box sx={{ padding: { md: 10, xs: 5 }, mr: 13, ml: 13 }}>
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
            Statistics have shown that <strong> 30% </strong>of the world population are visually
            impaired. <strong>Nigerians</strong>  take <strong>2%</strong> of this fraction making it about <strong>4
            million </strong> people which translates to the fact that <strong>1 to 53 people in
            Nigeria are visually impaired</strong> and the following are the common
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
                      height: "160px",
                      maxWidth: "100%",
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
