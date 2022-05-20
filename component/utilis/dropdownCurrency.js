import React, { useEffect } from "react";
// import { withStyles, alpha, makeStyles } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";

const DropdownCurrency = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currencies, setCurrencies] = React.useState("");
  const  locale  = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.apiUrl}currencies?langCode=${locale.locale}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      setCurrencies(res.data.rows);
    });
  }, []);
  return (
    <div>
      {" "}
      <select className="form-select form-select-lg cuureny_main_mobile_hoverIcon" aria-label=".form-select-lg example" style={{backgroundImage:"none"}} onChange={(e)=>{
        localStorage.setItem("currencyRate",e.target.value)
        locale.reload()
      }} >
        {/* <option selected>gfdgfg</option> */}
      {currencies &&
          currencies.map((currency, index) => {
      return(
      
        <option name={currency.name}  value={currency.rate} key={currency.id} style={{fontSize:"0.9rem",padding:"0 0.5rem",fontWeight:"400",color:"#212529"}}>           
         <img src={currency.files[0]&&currency.files[0].imgUrl} alt="img" className="currencLogo" />
            {currency.name}
        </option>
      
      )


          })} </select>
      {/* <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="currency_hoverIcon"
      >
        <AttachMoneyIcon
          style={{
            padding: "0px",
            top: "-13px",
            left: "2px",
            color: "black",
            // display: `${dispayIcon ? "block" : "none"}`,
          }}
        />{" "}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {currencies &&
          currencies.map((currency, index) => {
            return (
              <MenuItem onClick={handleClose} key={index}>
                {currency.name}
              </MenuItem>
            );
          })}
      </Menu> */}
    </div>
  );
};
export default DropdownCurrency;
