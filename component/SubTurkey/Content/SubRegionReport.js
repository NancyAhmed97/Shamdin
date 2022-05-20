import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import Dropdown from "../../../component/common/LightDropList";
import ImgTwoTypo from "../../../component/common/ImgTwoTypo";
import ImgTypo from "../../../component/common/ImgTypo";
import ToggleTwo from "../../../component/common/ToggleTwo";
const SubRegionReport = () => {
  return (
    <div style={{ diplay: "flex", marginTop: "12px" }}>
      <Typography className="region_titleOne" align="center" variant="h4">
        Istanbul Region Report
      </Typography>

      <div className="region_midSection">
        <ImgTwoTypo
          text={"Average Age"}
          value={33}
          img={"https://www.imtilak.net/assets/img/population-count.png"}
        />
        <ImgTwoTypo
          text={"Population"}
          value={"15, 067, 713"}
          img={"https://www.imtilak.net/assets/img/population-average.png"}
        />
      </div>

      <div className="region_midSection">
        <ImgTypo text={"Civil status"} img={"./chart.png"} />
        <ImgTypo text={"Social statu"} img={"./chart.png"} />
      </div>

      <div className="region_midSection">
        <ImgTypo text={"Civil status"} img={"./chart.png"} />
        <ImgTypo text={"Social statu"} img={"./chart.png"} />
      </div>

      <div className="region_midSection">
        <Typography align="center" variant="h6">
          Property prices
        </Typography>
      </div>

      <div className="toogle_region_midSection">
        <ToggleTwo />
        <ToggleTwo />
      </div>

      <div className="region_midSection">
        <ImgTypo text={"Social status"} img={"./chart.png"} />
      </div>

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

          <ImgTypo text={"Social status"} img={"./chart.png"} />
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

          <ImgTypo text={"Social status"} img={"./chart.png"} />
        </div>
      </div>
    </div>
  );
};
export default SubRegionReport;
