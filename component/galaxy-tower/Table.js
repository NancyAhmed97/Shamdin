// import React from "react";
// import { withStyles, makeStyles } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// const TablePage = () => {
//   const StyledTableCell = withStyles((theme) => ({
//     head: {
//       backgroundColor: "#86263d",
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   }))(TableCell);

//   const StyledTableRow = withStyles((theme) => ({
//     root: {
//       backgroundColor: "#37404d",
//       color: "white",
//       "&:nth-of-type(odd)": {
//         backgroundColor: "#37404d",
//         color: "white !important",
//       },
//     },
//   }))(TableRow);

//   function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }

//   const rows = [
//     createData("Frozen yoghurt", "83 M²", 6.0, 24),
//     createData("Ice cream sandwich", 237, 9.0, 37),
//   ];

//   return (
//     <TableContainer component={Paper}>
//       <Table
//         className="table"
//         style={{ maxWidth: "700px" }}
//         aria-label="customized table"
//       >
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>{t('price')}</StyledTableCell>
//             <StyledTableCell align="right">{t('area')} </StyledTableCell>
//             <StyledTableCell align="right">
//               {t('bathroom')}{" "}
//             </StyledTableCell>
//             <StyledTableCell align="right">{t('room')}</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell
//                 component="th"
//                 scope="row"
//                 style={{ color: "white" }}
//               >
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right" style={{ color: "white" }}>
//                 {row.calories}
//               </StyledTableCell>
//               <StyledTableCell align="right" style={{ color: "white" }}>
//                 {row.fat}
//               </StyledTableCell>
//               <StyledTableCell align="right" style={{ color: "white" }}>
//                 {row.carbs}
//               </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };
// export default TablePage;

import React from "react";
import { withStyles, makeStyles } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslations } from "next-intl";
export default function TablePage({room,bathroom,regularPrice,area}) {
  const t=useTranslations('general')
    function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(room&&room,`${area&&area } M²`, bathroom&&bathroom, regularPrice&&regularPrice),
  ];
  return (
    <TableContainer component={Paper}>
             <Table
         className="table"
         style={{ maxWidth: "700px" }}
         aria-label="customized table"
       >
         <TableHead>
          <TableRow>
          <TableCell align="right">{t('room')}</TableCell>
          <TableCell align="right">{t('area')} </TableCell>
          <TableCell align="right">
              {t('bathroom')}
            </TableCell>
            <TableCell>{t('price')}</TableCell>
       
          </TableRow>  
          </TableHead>
          <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                style={{ color: "white" }}
              >
                {row.name}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.calories}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.fat}
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                {row.carbs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
                 </Table>
    </TableContainer>
    
)
}
