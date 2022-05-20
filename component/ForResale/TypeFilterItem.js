import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import LightDropList from "../../component/common/LightDropList";
import { makeStyles, alpha } from "@mui/material/styles";
import { useRouter } from "next/router";
import axios from "axios";
const TypeFilterItem = ({
  sentTypeToParent,
  sentSubCategoryToParent,
}) => {
  const { locale } = useRouter();
  const [types, setTypes] = useState("");
  const [typesArray, setTypesArray] = useState([]);
  const [subCategouryArray, setSubCategouryArray] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.apiUrl}realestates-types?langCode=${locale}`,

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      const array = [];
      for (var i = 0; i < res.data.rows.length; i++) {
        array[i] = {
          value: res.data.rows[i].id,
          label: res.data.rows[i].title,
        };
        setTypesArray(array);
      }
    });

    axios({
      method: "get",
      url: `${process.env.apiUrl}categories?langCode=${locale}`,

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      const array = [];
      for (var i = 0; i < res.data.rows.length; i++) {
        array[i] = {
          value: res.data.rows[i].id,
          label: res.data.rows[i].title,
        };
        setSubCategouryArray(array);
      }
    });
  }, []);
  const sentTypeToParemt = (val) => {
    sentTypeToParent(val);
  };
  const sentSubCategoryToParemt = (val) => {
    sentSubCategoryToParent(val);
  };

  return (
    <div className="type_filter_testimonial">
      <Container maxWidth="lg" className="type_filter_big__container">
        <Typography
          className="type_filter_title"
          align="center"
          variant="h6"
          display="block"
        >
          Property Type
        </Typography>

        <LightDropList
          isMulti={true}
          marginY={"15px"}
          name={"Type"}
          options={typesArray}
          placeholder={"Choose type"}
          sentTypeToParemt={sentTypeToParemt}
        />
        <LightDropList
          isMulti={true}
          marginY={"15px"}
          name={"Type"}
          options={subCategouryArray}
          placeholder={"Choose property sub-category"}
          sentSubCategoryToParemt={sentSubCategoryToParemt}
        />
      </Container>
    </div>
  );
};
export default TypeFilterItem;
