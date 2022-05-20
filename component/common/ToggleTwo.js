import React from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function TwoTabs({ tabOne = "one", tabTwo = "two" }) {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper square>
      <Tabs value={value} onChange={handleChange}>
        <Tab label={tabOne} />
        <Tab label={tabTwo} />
      </Tabs>
    </Paper>
  );
}
