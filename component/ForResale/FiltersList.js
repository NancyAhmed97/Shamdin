import React, { useEffect, useState } from "react";
// Common Component
import DarkBtn from "../../component/common/DarkBtn";
// Local component
import TypeFilterItem from "../../component/ForResale/TypeFilterItem";
import LocationFilterItem from "../../component/ForResale/LocationFilterItem";
import PriceSpaceFilterItem from "../../component/ForResale/PriceSpaceFilterItem";
import { useRouter } from "next/router";
import axios from "axios";
function FiltersList({ x, sentData,responseToParemt }) {
  const { locale } = useRouter();
  const [type, setType] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [Cities, setCities] = useState([]);
  const [towns, setTowns] = useState([]);
  const sentTypeToParent = (val) => {
    setType(val);
  };
  const sentSubCategoryToParent = (val) => {
    setSubCategories(val);
  };
  const neighborhoodToParent = (val) => {
    setNeighborhoods(val);
  };
  const cityToParent = (val) => {
    setCities(val);
  };
  const townToParent = (val) => {
    setTowns(val);
  };
  return (
    <div>
      <TypeFilterItem
        sentTypeToParent={sentTypeToParent}
        sentSubCategoryToParent={sentSubCategoryToParent}
      />
      <LocationFilterItem
        neighborhoodToParent={neighborhoodToParent}
        cityToParent={cityToParent}
        townToParent={townToParent}
      />
      <PriceSpaceFilterItem />
      <button
        className="filter_dark__btn_big"
        onClick={() => {
          sentData("clicked");
          const typeval = [];
          type &&
            type.forEach((types) => {
              typeval.push(types.value);
            });
          const subCategouryval = [];
          subCategories.forEach((subCategoury) => {
            subCategouryval.push(subCategoury.value);
          });
          const cityval = [];
          cityval.push(Cities.value);
          const townVal = [];
          townVal.push(towns.value);

          const neighborhoodVal = [];
          neighborhoods.forEach((neighborhood) => {
            neighborhoodVal.push(neighborhood.label);
          });

          axios({
            method: "get",
            url: `${process.env.apiUrl}realestates?langCode=${locale}${
              cityval ? "&cityId=" + cityval : ""
            }${townVal ? "&municipalityId=" + townVal : ""}${
              typeval ? "&typeId=" + typeval : ""
            }
            ${subCategouryval ? "&categoryId=" + subCategouryval : ""}${
              neighborhoodVal ? "&neighborhood=" + neighborhoodVal : ""
            }${
              localStorage.getItem("minPrice")
                ? "&minPrice=" + localStorage.getItem("minPrice")
                : ""
            }${
              localStorage.getItem("maxPrice")
                ? "&maxPrice=" + localStorage.getItem("maxPrice")
                : ""
            }${
              localStorage.getItem("minSpace")
                ? "&minSpace=" + localStorage.getItem("minSpace")
                : ""
            }${
              localStorage.getItem("maxSpace")
                ? "&maxSpace=" + localStorage.getItem("maxSpace")
                : ""
            }
            `,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }).then((res) => {
            if (res) {
              localStorage.setItem("response", JSON.stringify(res.data.rows));
              responseToParemt(res.data.rows)
            }
          });
        }}
      >
        Search
      </button>
    </div>
  );
}

export default FiltersList;
