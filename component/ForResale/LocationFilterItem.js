import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import LightDropList from "../../component/common/LightDropList";
import { makeStyles, alpha } from "@mui/material/styles";
import { useRouter } from "next/router";
import axios from "axios";
const LocationFilterItem = ({
  neighborhoodToParent,
  cityToParent,
  townToParent,
}) => {
  const [citiesArray, setCitiesArray] = useState([]);
  const [townOptions, setTownOptions] = useState([]);
  const [municipalitiesArray, setMunicipalitiesArray] = useState();
  const { locale } = useRouter();
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.apiUrl}cities?langCode=${locale}`,

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      const array = [];
      for (var i = 0; i < res.data.rows.length; i++) {
        array[i] = { value: res.data.rows[i].id, label: res.data.rows[i].name };
        setCitiesArray(array);
      }
    });
  }, []);
  const neighborhoodToParemt = (val) => {
    neighborhoodToParent(val);
  };
  const cityToParemt = (val) => {
    cityToParent(val);
  };
  const townToParemt = (val) => {
    townToParent(val);
  };
  const townOptionsToParemt = (val) => {
   setTownOptions(val);
  };
  const neighborhood = [
    { value: "isFixed", label: "isFixed", isFixed: true },
    { value: "isDisabled", label: "isDisabled", isDisabled: true },
    { value: "one", label: "one" },
    { value: "two", label: "two", isFixed: true },
    { value: "three", label: "three" },
    { value: "four", label: "four" },
    { value: "five", label: "five" },
  ];
  return (
    <div className="location_testimonial">
      <Container maxWidth="lg" className="location_big__container">
        <Typography
          className="location_title"
          align="center"
          variant="h6"
          display="block"
        >
          Location
        </Typography>

        <LightDropList
          marginY={"15px"}
          name={"Type"}
          options={citiesArray}
          placeholder={"Choose a city"}
          cityToParemt={cityToParemt}
          townOptionsToParemt={townOptionsToParemt}
        />
        <LightDropList
          marginY={"15px"}
          name={"Type"}
          options={townOptions?townOptions:[{ label: "choose city first", isDisabled }]}
          placeholder={"Choose a town"}
          townToParemt={townToParemt}
        />
        <LightDropList
          isMulti={true}
          marginY={"15px"}
          name={"Type"}
          options={neighborhood}
          placeholder={"Choose neighborhood"}
          neighborhoodToParemt={neighborhoodToParemt}
        />
      </Container>
    </div>
  );
};
export default LocationFilterItem;
