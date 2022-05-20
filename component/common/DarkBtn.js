import React, { useState } from "react";
import { makeStyles } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useRouter } from 'next/router'
const DarkBtn = ({
  text = "text",
  valueSpace,
  valuePrice,
  cityId,
  typeName,
  municipalityName,
  additionals,
  alerttoparent
}) => {
  const router = useRouter()
  const handleSearch = () => {

    if (
      valueSpace &&
      typeName &&
      municipalityName &&
      additionals&&
      cityId
    ) {
      
    //   router.push({
    //     pathname: `/for-resale-turkey${typeName ? "/" + typeName : ""}${
    //       cityName ? "/" + cityName : "/istanbul"
    //     }${municipalityName ? "/" + municipalityName : ""}${
    //       additionals ? "/" + additionals : ""
    //     }${valueSpace ? "/" + valueSpace[0] : ""}${
    //       valueSpace ? "/" + valueSpace[1] : ""
    //     }${valuePrice ? "/" + valuePrice[0] : ""}${
    //       valuePrice ? "/" + valuePrice[1] : ""
    //     }
    // `,
    //   });
    router.push({pathname:`/for-resale-turkey${cityId?"/"+cityId:""}${municipalityName ? "/" + municipalityName : ""}${
             additionals ? "/" + additionals:""
           }${typeName ? "/" + typeName : ""}${valueSpace.length>0 ? "/" + valueSpace[0] : ""}${
                   valueSpace.length>0 ? "/" + valueSpace[1] : ""
                 }${valuePrice.length>0 ? "/" + valuePrice[0] : ""}${
                   valuePrice.length>0 ? "/" + valuePrice[1] : ""
                 }`})
    }else{
alerttoparent(true)
    }
  };
  return (
    <Button
      onClick={handleSearch}
      variant="contained"
      size="large"
      className="dark__btn_big"
    >
      {text}
    </Button>
  );
};
export default DarkBtn;
