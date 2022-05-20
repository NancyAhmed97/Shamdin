import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import AdInfoRow from "./AdInfoRow";
const AdInfo = () => {
  return (
    <div className="adinfo_backBlock">
      <Container maxWidth="lg" className="adinfo_big__container">
        <Typography align="left" className="adinfo_title" variant="h4">
          Ad details
        </Typography>

        <AdInfoRow label="Ad No." value="1643458358" />
        <AdInfoRow label="Price" value="4,350,000 TL" />
        <AdInfoRow label="Ad Date" value="29, Jan 2022" />
        <AdInfoRow label="Property Type" value="Villa" />
        <AdInfoRow label="Net Rental Income" value="15000 TL" />
        <AdInfoRow label="Total Area" value="320 m²" />
        <AdInfoRow label="Net Area" value="300 m²" />
        <AdInfoRow label="Land Area" value="320 m²" />
        <AdInfoRow label="Number Of Bathrooms" value="2" />
        <AdInfoRow label="Floor Number" value="Type: Villa" />
        <AdInfoRow label="Age Of The Building" value="Between 11-15" />
        <AdInfoRow label="State Of The Property" value="available" />
        <AdInfoRow label="Exchangeable" value="no" />
        <AdInfoRow label="Suitable For Bank Loan" value="yes" />
        <AdInfoRow label="Balcony" value="yes" />
        <AdInfoRow
          label="Title Deed Status"
          value="Condominium Title Deed"
          hasDivider={false}
        />
      </Container>
    </div>
  );
};
export default AdInfo;
