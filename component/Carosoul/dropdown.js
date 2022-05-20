// import React from "react";
// // import { withStyles, makeStyles } from "@mui/material/styles";
// import MenuItem from "@mui/material/MenuItem";
// import { Box, Select } from "@mui/material";
// // import { getData } from "../../pages/api/data";
// import { useRouter } from "next/router";
// // const useStyles = makeStyles((theme) => ({
// //   border: {
// //     color: "black",
// //   },
// //   icon: {
// //     color: "white",
// //     backgroundColor: theme.palette.primary.main,
// //   },
// // }));

// export default function CustomizedMenus({ data, label }) {
//   const [city, setCity] = React.useState(label);
//   const [open, setOpen] = React.useState(false);
//   const { locale } = useRouter();
//   const handleChange = (event) => {
//     setCity(event.target.value);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <div style={{ margin: "20px 0px" }}>
//       <Box
//         justifyContent="space-between"
//         flexDirection="row"
//         alignItems="center"
//         display="flex"
//         className="dropdown_border"
//       >
//         <Select
//           labelId="demo-customized-select-label"
//           className="dropdown_card"
//           open={open}
//           onClose={handleClose}
//           onOpen={handleOpen}
//           value={city}
//           name="1"
//           inputProps={{
//             classes: {
//               root: { color: "black" },
//               icon: {
//                 color: "white",
//                 backgroundColor: "#ec94b4",
//               },
//             },
//           }}
//           onChange={handleChange}
//         >
//           <MenuItem value={label}>{label}</MenuItem>
//           {data &&
//             data.map((dataItem, index) => {
//               return (
//                 <MenuItem
//                   value={dataItem.props && dataItem.props.children}
//                   key={index}
//                   id={dataItem.props && dataItem.props.children.id}
//                 >
//                   {dataItem}
//                 </MenuItem>
//               );
//             })}
//         </Select>
//       </Box>
//     </div>
//   );
// }
import React from 'react'
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function dropdown({ data, label }) {
  return (
    <div style={{position:"relative"}}>
            <div className='bg_dropdown'><ArrowDropDownIcon /></div>

      <select class="form-select my-2 py-1" aria-label="Default select example">
    <option selected>{label}</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select></div>
  )
}

