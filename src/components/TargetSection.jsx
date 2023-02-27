import { Box, Grid, Typography } from "@mui/material";
import { issues } from "../assets/constant/issues";
import mask from "../assets/images/mask.png";
import React from "react";

const TargetSection = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "770px",
          height: "1017px",
          width: "100%",
          backgroundColor: "#48017D",
          // marginTop: 7,
          color: "white",
          fontFamily: "PoppinsRegular",
          backgroundImage: `url(${mask})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "-20px",
          // backgroundSize:'cover',
          // borderTop:'13px solid #eee',
          // borderLeft:'-55px solid white',
          // borderRight:'-55px solid white'
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "191px",
            left: "206px",
            right: "202px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              position: "absolute",
              width: "411px",
              height: "54px",
              left: "0px",
              top: "0px",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
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
          <Typography
            sx={{
              fontFamily: "PoppinsRegular",
              position: "absolute",
              width: "986px",
              height: "90px",
              left: "0px",
              top: "72px",
              fontFamily: "PoppinsRegular",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            Statistics have shown that <strong> 30% </strong>of the world
            population are visually impaired. <strong>Nigerians</strong> take{" "}
            <strong>2%</strong> of this fraction making it about{" "}
            <strong>4 million </strong> people which translates to the fact that{" "}
            <strong>1 to 53 people in Nigeria are visually impaired</strong> and
            the following are the common issues we are targeting.
          </Typography>

          <Grid
            container
            sx={{ position: "absolute", top: "250px" }}
            spacing={4}
          >
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
                      // position:'absolute',
                    }}
                  >
                    <Typography>
                      <img src={issue.url} alt="Card Wallet" />
                    </Typography>
                    <Typography sx={{ fontFamily: "Poppins", marginTop: 1 }}>
                      {issue.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "PoppinsRegular",
                        fontWeight: 500,
                        marginTop: 0.5,
                        fontFamily: "PoppinsRegular",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "17px",
                        lineHeight: "26px",
                        letterSpacing: "-0.02em",

                        color: "#111111",
                      }}
                    >
                      {issue.note}
                    </Typography>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default TargetSection;
