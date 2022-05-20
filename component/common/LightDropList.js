import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Select from "react-select";

const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];
const LightDropList = ({
  isMulti = false,
  name = "NewList",
  options,
  marginY = "10px 0",
  width = "100%",
  placeholder,
  sentTypeToParemt,
  sentSubCategoryToParemt,
  neighborhoodToParemt,
  townToParemt,
  cityToParemt,
  townOptionsToParemt
}) => {
  const theme = (theme) => ({
    ...theme,
  });
  const { locale } = useRouter();

  return (
    <div
      style={{
        width,
        margin: `${marginY} 0`,
      }}
    >
      {isMulti ? (
        <Select
          isMulti
          name={name}
          options={options && options}
          theme={theme}
          placeholder={placeholder}
          onChange={(e) => {
            if (placeholder === "Choose type") {
              sentTypeToParemt(e);
            } else if (placeholder === "Choose property sub-category") {
              sentSubCategoryToParemt(e);
            } else if (placeholder === "Choose neighborhood") {
              neighborhoodToParemt(e);
            }
          }}
        />
      ) : (
        <Select
          name={name}
          options={options}
          theme={theme}
          placeholder={placeholder}
          onChange={(e) => {
            if (placeholder === "Choose a city") {
              cityToParemt(e)
              axios({
                method: "get",
                url: `${process.env.apiUrl}municipalities?langCode=${locale}&cityId=${e.value}`,

                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              }).then((res) => {
                const array = [];
                for (var i = 0; i < res.data.rows.length; i++) {
                  array[i] = {
                    value: res.data.rows[i].id,
                    label: res.data.rows[i].name,
                  };
                  townOptionsToParemt(array)
                  // localStorage.setItem("townOptions", JSON.stringify(array));
                }
              });
            } else if (placeholder === "Choose a town") {
              townToParemt(e)
            }
          }}
        />
      )}
    </div>
  );
};
export default LightDropList;
