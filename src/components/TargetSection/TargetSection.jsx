import { Box, Grid, Typography } from "@mui/material";
import { issues } from "../../assets/constant/issues";
import mask from "../../assets/images/mask.png";
import styles from "./target.module.css";
import React from "react";

const TargetSection = () => {
  return (
    <>
      <div id="target_section" className={styles["target-section"]}>
        <div className={styles["yellow-div"]}></div>
        <Box className={styles["wrapper"]}>
          <div className={styles["first-div"]}>
            <p className={styles["issues"]}>
              Issues we are{" "}
              <span className={styles["targeting"]}>targeting</span>
            </p>
            <p className={styles["statistics"]}>
              Statistics have shown that <strong> 30% </strong>of the world
              population are visually impaired. <strong>Nigerians</strong> take{" "}
              <strong>2%</strong> of this fraction making it about{" "}
              <strong>4 million </strong> people which translates to the fact
              that{" "}
              <strong>1 to 53 people in Nigeria are visually impaired</strong>{" "}
              and the following are the common issues we are targeting:
            </p>

            <Grid container className={styles["grid"]} spacing={6}>
              {issues &&
                issues.map((issue) => (
                  <Grid item xs={12} md={6}>
                    <Box className={styles["each-target-wrapper"]}>
                      <Typography>
                        <img src={issue.url} alt="Card Wallet" />
                      </Typography>
                      <p className={styles["title"]}>
                        {issue.title}
                      </p>
                      <p className={styles["note"]}>
                        {issue.note}
                      </p>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </div>
        </Box>
      </div>
    </>
  );
};

export default TargetSection;
