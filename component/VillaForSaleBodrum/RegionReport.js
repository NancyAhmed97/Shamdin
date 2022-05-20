import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import Dropdown from "../common/LightDropList";
import ImgTwoTypo from "../common/ImgTwoTypo";
import ImgTypo from "../common/ImgTypo";
const RegionReport = () => {
  return (
    <div className="region_backBlock">
      <div className="region_big__container">
        <div style={{ diplay: "flex" }}>
          <Typography align="left" className="region_title" variant="h4">
            Bodrum Region Report
          </Typography>

          <div className="region_midSection">
            <div className="region_subMidSection">
              <Typography className="region_subTitle" align="center">
                The most favorite cities for foreign investors
              </Typography>

              <div
                style={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px 10px",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Dropdown />
                  <Dropdown />
                </div>
              </div>

              <ImgTypo
                text={"Social status"}
                img={"./chart.png"}
                className="region_title"
              />
            </div>

            <div className="region_subMidSection">
              <Typography className="region_subTitle" align="center">
                The most favorite cities for foreign investors
              </Typography>

              <div
                style={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px 10px",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Dropdown />
                  <Dropdown />
                </div>
              </div>

              <ImgTypo
                text={"Social status"}
                img={"./chart.png"}
                className="region_title"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegionReport;
