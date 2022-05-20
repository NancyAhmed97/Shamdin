import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { makeStyles } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

// Common Component
import DarkBtn from "../common/DarkBtn";
// Local component
import TypeFilterItem from "./TypeFilterItem";
import LocationFilterItem from "./LocationFilterItem";
import PriceSpaceFilterItem from "./PriceSpaceFilterItem";

// const useStyles = makeStyles((theme) => ({
//   btn: {
//     alignItems: "center",
//     borderRadius: "8px",
//     marginTop: theme.spacing(3),
//     background: "#ec94b4",
//     color: "#fff",
//     fontWeight: "700",
//     fontSize: "1.4rem",
//     border: "1px",
//     height: "60px",
//     width: "100%",
//     "&:hover": {
//       backgroundColor: "#fff",
//       color: "#ec94b4",
//       boxShadow: "none",
//     },
//   },
//   btnAction: {
//     margin: "0 auto",
//   },
//   content: {
//     /* width: '500px',*/
//   },
//   dialogContent: {
//     display: "flex",
//     flexShrink: 0,
//   },
// }));

export default function AlertDialog() {
  // const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="filter_mobile_.btn"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        <SearchIcon /> Open alert dialog
      </Button>

      <Dialog
        className="filter_mobile_.dialogContent"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="filter_mobile_.content">
          <TypeFilterItem />
          <LocationFilterItem />
          <PriceSpaceFilterItem />
        </DialogContent>

        <DialogActions className="filter_mobile_.btnAction">
          <DarkBtn onClick={handleClose} text={"Search"} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
