import React, { useEffect } from "react";
// import { withStyles, makeStyles } from "@mui/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import LanguageIcon from "@mui/icons-material/Language";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";
// const useStyles = makeStyles((theme) => ({
//   rootFirstSelect: {
//     padding: "5px",
//     color: "black",
//   },
// }));

export default function CustomizedMenus() {
  // const classes = useStyles();
  const [age, setAge] = React.useState("en");
  const router = useRouter();
  const { asPath } = router;
  const [dispayIcon, setdispayIcon] = React.useState(true);
  const [dir, setDir] = React.useState("ltr");
  const handleChange = (event) => {
    setdispayIcon(false);
    setAge(event.target.value);
    // switch (event.target.value) {
    //   case "ar":
    //     dispatch(changeLocal("ar"));
    //     break;
    //   case "en":
    //     dispatch(changeLocal("en"));
    //     break;
    //   case "fr":
    //     dispatch(changeLocal("fr"));
    //     break;
    // }
  };

  return (
    <div>
      {/* <FormControl variant="outlined" className="lang_formControl">
        <InputLabel
          id="demo-simple-select-outlined-label"
          style={{
            padding: "0px",
            top: "-17px",
            left: "-11px",
          }}
        >
          {" "}
          <LanguageIcon
            className="lang_hoverIcon"
            style={{
              padding: "0px",
              top: "-13px",
              left: "2px",
              color: "black",
              display: `${dispayIcon ? "block" : "none"}`,
            }}
          />
        </InputLabel>

        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          //value={age}
          onChange={handleChange}
          // classes={{ root: classes.rootFirstSelect }}
        >
          <MenuItem value={"ar"}>
            <Link color="initial" href={asPath} locale={"ar"}>
              عربي
            </Link>
          </MenuItem>
          <MenuItem value={"en"}>
            {" "}
            <Link color="initial" href={asPath} locale={"en"}>
              English
            </Link>
          </MenuItem>
          <MenuItem value={"tr"}>
            {" "}
            <Link color="initial" href={asPath} locale={"tr"}>
              Tuekish
            </Link>
          </MenuItem>
        </Select>
      </FormControl> */}
      <div className="dropdown mx-2">
  <button className="dropdown-toggle lang_main_mobile_hoverIcon" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"  style={{border:"none"}}>
  <LanguageIcon
            className="lang_hoverIcon"
            style={{
              padding: "0px",
              top: "-13px",
              left: "2px",
              color: "rgb(102, 102, 102)",
              display: `${dispayIcon ? "block" : "none"}`,
            }}
          />
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{position:"relative",zIndex:"5555555555555555555555"}}>
    <li style={{padding:"8px 10px"}}>  <Link className="dropdown-item p-2" color="initial" href={asPath} locale={"en"}>

English
            </Link></li>
    <li style={{padding:"8px 10px"}}>     <Link className="dropdown-item p-2" color="initial" href={asPath} locale={"ar"}>
              عربي
            </Link></li>
    <li style={{padding:"8px 10px"}}>     <Link className="dropdown-item p-2" color="initial" href={asPath} locale={"tr"}>
              Tuekish
            </Link></li>
  </ul>
</div>

</div>
  );
}
