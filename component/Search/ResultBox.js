import { Box, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";
import PropCard from "../../component/ForResale/PropCard";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";
// import { Search } from "../../Redux/SearchArray";
import axios from "axios";
const ResultBox = () => {
  const [value, setValue] = React.useState(0);
  const [page, setPage] = useState(1);
  const [modelName, setModelName] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();
  const { params = [] } = router.query;
  // const dispatch = useDispatch();
  const { locale } = useRouter();
  useEffect(() => {
    axios({
      method: "get",
      url: `${
        process.env.apiUrl
      }search?langCode=${locale}&title=${params}&modelName=${
        modelName ? modelName : "All"
      }`,
    }).then((res) => {
      res.data.rows;
      setResults(res.data.rows);
      // dispatch(Search([res.data.rows]));
    });
  }, [modelName, params]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setModelName("All");
    } else if (newValue === 1) {
      setModelName("realestates");
    } else if (newValue === 2) {
      setModelName("blogs");
    } else if (newValue === 3) {
      setModelName("News");
    } else if (newValue === 4) {
      setModelName("reviews");
    }
  };
  const handleChangePage = (event, newValue) => {
    setPage(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const a11yProps = (index, label) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <div className="ResultBox">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          onClick={(e) => {}}
        >
          <Tab label="All" {...a11yProps(0, "All")} />
          <Tab label="realestates" {...a11yProps(1, "realestates")} />
          <Tab label="blogs" {...a11yProps(2, "blogs")} />
          <Tab label="news" {...a11yProps(3, "news")} />
          <Tab label="reviews" {...a11yProps(4, "reviews")} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={value}>
          {results &&
            results.map((result, index) => {
              return (
    <>
                <PropCard
                  key={index}
                  title={result.elment_trans[0].title}
                  desc={result.elment_trans[0].description}
                  id={result.id}
                  projectDate={result.created_at}
                />
    </>
              );
            })}

          {/* <Box
      
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pagination
              count={10}
              color="primary"
              page={page}
              onChange={handleChangePage}
            />
          </Box> */}
      </TabPanel>
    </div>
  );
};
export default ResultBox;
