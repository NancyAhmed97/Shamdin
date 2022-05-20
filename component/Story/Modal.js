import React, { useEffect, useState } from "react";
import { Modal, Typography, Box } from "@mui/material";
// import { getData } from "../../pages/api/data";
import { useRouter } from "next/router";
import axios from "axios";
import getData from "../../helpers/getData";

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

export default function SimpleModal() {
  const { locale } = useRouter();
  const [stories, setStories] = useState([]);
  const [storyImg, setStoryImg] = useState("");
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    let active = true;

    function getRows() {
      //setLoading(true);

      let filtersArr = {
        langCode: locale,
        sortBy: 'id',
        sortType: 'desc'
      };
      
      getData(process.env.apiUrl + 'stories', filtersArr)
        .then(response => {

          if (!active) {
            return;
          }

          setStories(response.data.rows);
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };

    getRows();

    return () => {
      active = false;
    };
    
  }, [locale]);

  // const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render


  const handleOpen = (e) => {
    const found = stories.find(
      (element) => element.id === parseInt(e.target.id)
    );
    found.files.forEach((element) => {
      setStoryImg(element.imgUrl);
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className="modal_papper">
      <img
        data-src={storyImg}
        alt="أفضل مشاريع أنطاليا - تملك واستثمار"
        className="owl-lazy"
        width="100%"
        height="90%"
        src={storyImg}
      />
    </div>
  );

  return (
    <div className="d-flex">
      {stories &&
        stories.map((story, index) => {
          return (
            <div onClick={handleOpen} key={index}>
              <span
                className="item d-block text-center"
                target="_blank"
                rel="noreferrer"
                style={{ textAlign: "center" }}
              >
                <div className="circle">
                  {story.files.map((storyImg, index) => {
                    return (
                      <img
                        data-src={storyImg.imgUrl}
                        alt="أفضل مشاريع أنطاليا - تملك واستثمار"
                        className="owl-lazy"
                        src={storyImg.imgUrl}
                        key={index}
                      />
                    );
                  })}

                  <svg
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    dir={locale === "ar" ? "rtl" : "ltr"}
                    id={story.id}
                  >
                    <circle cx="50" cy="50" r="40"></circle>
                  </svg>
                </div>
                <span className="name text-center"> {story.title}</span>
              </span>
            </div>
          );
        })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
