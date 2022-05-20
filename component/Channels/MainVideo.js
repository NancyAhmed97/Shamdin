import React from "react";
import { Box, Container, Modal, Typography } from "@mui/material";
import { makeStyles, alpha } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";
const MainVideo = ({ channels }) => {
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      //  top: `${top}%`,
      // left: `${left}%`,
      // transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [openedVedio, setOpenedVedio] = React.useState(false);

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className="papper">
      <iframe
        width="100%"
        height="100%"
        src={channels && channels.video}
      ></iframe>
    </div>
  );
  return (
    // <section className="video_backBlock">
    //   <Container
    //     className="video_boxImage"
    //     maxWidth="lg"
    //     style={{ position: "relative", paddingBottom: "25px" }}
    //   ></Container>
    // </section>
    <div className="main_vedio">
      <div onClick={handleOpen}>
        <Box style={{ width: "100%" }}>
          {/* {channels&&channels.files[0]?channels.files[0].imgUrl:"./logoo.svg"} */}
          <img
            alt="img"
            style={{
              width: "100%",
              height: "110px",
              borderRadius: "10px",
            }}
            src={
              channels && channels.files.length > 0
                ? channels.files[0].imgUrl
                : "/logoo.svg"
            }
            // id={channelId && channelId}
            className="video_backBlock"
          />
        </Box>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="h-10 w-75"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100% !important",
        }}
      >
        {body}
      </Modal>
    </div>
  );
};
export default MainVideo;
