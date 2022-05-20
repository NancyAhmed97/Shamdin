import { Box, Grid } from "@mui/material";
import React from "react";
function Plans() {
  return (
    <Grid
      item
      xs={12}
      md={6}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        style={{
          backgroundColor: "#eee",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "90%" }}
          src="https://www.imtilak.net/imgprojects/400/193/216/9e746d238ef4d7fcf435a68ae9a9f11c14-8V.jpg"
        />
      </Box>
    </Grid>
  );
}

export default Plans;
