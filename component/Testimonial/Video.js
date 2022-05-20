import React from 'react'
import { Box, Container, Modal, Typography } from "@mui/material";
export default function video({review,isDesktop}) {
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
        src={review && review.video}
      ></iframe>
    </div>
  );
  return (
    <div className="main_vedio">
      <div onClick={handleOpen}>
        <Box style={{ width: "100%" }}>
          <img
            alt="img"
            style={{
              width: "100%",
              height: "110px",
              borderRadius: "10px",
            }}
            src={
              review.files[0]&&review.files[0].imgUrl
                ? review.files[0]&&review.files[0].imgUrl
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
        className={isDesktop?"h-10":"h-10 w-75"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100% !important",
        }}
      >
        {body}
      </Modal>
    </div>  )
}
