import React from "react";
import { makeStyles } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { Container } from "@mui/material";
const BreadcrumbsPage = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div className="Bread_backBlock">
      <Container maxWidth="lg" className="Bread_big__container">
        <Breadcrumbs className="Bread_content" aria-label="breadcrumb">
          <Link
            color="inherit"
            href="/"
            onClick={handleClick}
            className="Bread_link"
          >
            <HomeIcon className="Bread_icon" />
            Home Page
          </Link>

          <Link
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
            className="Bread_link"
          >
            Villa For Sale
          </Link>

          <Link
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
            className="Bread_link"
          >
            Villa For Sale Mugla
          </Link>

          <Typography color="textPrimary" className="Bread_link">
            Villa For Sale Bodrum
          </Typography>
        </Breadcrumbs>
      </Container>
    </div>
  );
};
export default BreadcrumbsPage;
