import Carousel from "react-multi-carousel";
import { withStyles, makeStyles } from "@mui/material//styles";
import { Paper, Button } from "@mui/material/";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const Slider = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const { locale } = useRouter();
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.apiUrl}sliders?langCode=${locale}`,

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      setSliders(res.data.rows);
    });
  }, []);
  return (
    <div dir="ltr" width="100%">
      <Carousel
        autoPlay={false}
        animation="slide"
        responsive={responsive}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        indicators={true}
        swipe={true}
        NavButton={({ onClick, className, style, next, prev }) => {
          return (
            <Button onClick={onClick} className="carousul_arrow">
              {next && <ArrowForwardIosIcon />}
              {prev && <ArrowBackIosIcon />}
            </Button>
          );
        }}
        next={(next, active) => `we left ${active}, and are now at ${next}`}
        prev={(prev, active) => `we left ${active}, and are now at ${prev}`}
      >
        {sliders &&
          sliders.map((slider, index) => {
            return (
              <div key={index}>
                {slider.files.map((sliderImg, index) => {
                  return <Item key={index} id={slider.id} item={sliderImg} />;
                })}
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};
const Item = (props) => {
  return (
    <Paper style={{ height: "370px", width: "100%" }}>
      <Link href={`/galaxy-tower/${props.id}`}>
        <img height="370px" width="100%" src={props.item.imgUrl} alt="Img" />
      </Link>
    </Paper>
  );
};
export default Slider;
