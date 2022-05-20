import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const Timeline = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <div className="timeline">
      <li>
        <div className="timeline-badge  warning">
          <i className="glyphicon glyphicon-check"></i>
        </div>

        <div className="timeline-panel">
          <div className="timeline-heading">
            <h2 className="timeline-title h5">
              Interview for the group manager of Shamdin Real Estate with the
              Financial Times
            </h2>
          </div>

          <div className="timeline-body">
            <p>
              An exclusive interview by the British Financial Times With Mr.
              Abdullah Al-Hammad
            </p>
            <a href="#" className="btn btn-white">
              Read more
            </a>
          </div>
        </div>

        <div className="timeline-date">
          <p
            style={{
              display: "flex",
              alignItems: "center",
              marginInline: "12px",
            }}
          >
            <DateRangeIcon />

            <span>13, Feb 2020</span>
          </p>
        </div>
      </li>

      <li>
        <div className="timeline-badge ">
          <i className="glyphicon glyphicon-check"></i>
        </div>

        <div className="timeline-panel">
          <div className="timeline-heading">
            <h2 className="timeline-title h5">
              Company's annual honoring ceremony Shamdin Real Estate 2020
            </h2>
          </div>

          <div className="timeline-body">
            <p>
              Annual honoring ceremony forShamdin Real Estate 2020, It was
              attended by more than 200 members of Shamdin group
            </p>
            <a data-fancybox="video" href="#" className="btn btn-transparent">
              Watch the video
            </a>
          </div>
        </div>

        <div className="timeline-date" style={{ right: "30px" }}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              marginInline: "12px",
            }}
          >
            <DateRangeIcon />

            <span>13, Feb 2020</span>
          </p>
        </div>
      </li>
    </div>
  );
};
export default Timeline;
