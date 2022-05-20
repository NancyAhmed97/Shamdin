import React from "react";
import Dropdown from "../../component/common/LightDropList";
import RangeSlider from "../../component/common/Slider";
import DarkBtn from "../../component/common/DarkBtn";
const colourOptions = [
  { value: "ocean", label: "Ocean", isFixed: true },
  { value: "blue", label: "Blue", isDisabled: true },
  { value: "purple", label: "Purple" },
];

function FiltersList() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "0 auto",
          alignItems: "center",

          justifyContent: "center",
        }}
      >
        <Dropdown
          isMulti={true}
          name={"NewList"}
          options={colourOptions}
          marginY={"10px 10px"}
          placeholder={"Choose a city"}
          width="200px"
        />
        <Dropdown
          isMulti={true}
          name={"NewList"}
          options={colourOptions}
          marginY={"10px 10px"}
          placeholder={"Choose a town"}
          width="200px"
        />
        <Dropdown
          isMulti={true}
          name={"NewList"}
          options={colourOptions}
          marginY={"10px 10px"}
          placeholder={"Choose a type"}
          width="200px"
        />
        <Dropdown
          isMulti={true}
          name={"NewList"}
          options={colourOptions}
          marginY={"10px 10px"}
          placeholder={"Choose additional"}
          width="200px"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RangeSlider
          title={"Space"}
          step={1}
          min={0}
          max={100}
          unit={""}
          // handler={}
        />
        <RangeSlider
          title={"Price"}
          step={1}
          min={0}
          max={100}
          unit={""}
          // handler={}
        />
        <DarkBtn text={"Search"} />
      </div>
    </div>
  );
}

export default FiltersList;
