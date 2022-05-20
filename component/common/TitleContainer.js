import React from "react";
// MUI Component
import { Box, Container, Typography } from "@mui/material";

// Styles
import { makeStyles } from "@mui/material/styles";

// const useStyles = makeStyles((theme) => ({
//   title: {
//     color: theme.palette.primary.main,
//     paddingTop: "30px",
//     fontWeight: "bold",
//   },
//   backBlock: {
//     borderRadius: "8px",
//     border: "1px solid #c5c5c5",
//     background: "#fff",
//     marginTop: "20px",
//   },
//   big__container: {
//     position: "relative",
//     paddingBottom: "25px",
//   },
// }));

function Index(props) {
  // const classes = useStyles();

  return (
    <div className="title_container_backBlock">
      <Container maxWidth="lg" className="title_container_big__container">
        <Typography
          className="title_container_title"
          variant="h5"
          align="center"
        >
          <Box sx={{}} style={{ color: "#ec94b4" }}>
            Property For Resale In {props.searched}
          </Box>
        </Typography>
      </Container>
    </div>
  );
}

export default Index;
