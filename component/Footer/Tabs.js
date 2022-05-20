import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography, useMediaQuery } from "@mui/material";
// import { getData } from "../../pages/api/data";
import { useRouter } from "next/router";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import getData from "../../helpers/getData";
const VerticalTabs = () => {
  const [value, setValue] = React.useState(0);
  const [categories, setCategories] = React.useState([]);
  const [blogs, setBlogs] = React.useState([]);

  const [categoryId, setCategoryId] = React.useState("");
  const { locale } = useRouter();
  const isDesktop = useMediaQuery("(min-width:940px)");

  
  useEffect(() => {
    let active = true;


    function getBlogs() {
      //setLoading(true);

      let filtersArr = {
        langCode: locale,
        sortBy: 'id',
        sortType: 'desc'
      };
      
      getData(process.env.apiUrl + 'blogs', {
        langCode: locale,
        sortBy: 'id',
        sortType: 'desc',
        categoryId
      })
        .then(response => {

          if (!active) {
            return;
          }

          setBlogs(response.data.rows);
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };

    getBlogs();


    function getCategories() {
      //setLoading(true);

      let filtersArr = {
        langCode: locale,
        sortBy: 'id',
        sortType: 'desc'
      };
      
      getData(process.env.apiUrl + 'categories', {
        langCode: locale,
        sortBy: 'id',
        sortType: 'desc',
        //categoryId
      })
        .then(response => {

          if (!active) {
            return;
          }

          setCategories(response.data.rows);
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };

    getCategories();

    return () => {
      active = false;
    };
    
  }, [locale, categoryId]);

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  function createMarkup(data) {
    return { __html: data };
  }
  return (
    <div className="tabs_parent">
      <Container>
       {isDesktop? 
       <Row className="tabs_root">
          <Col xs={2} className="p-0">
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className="tabs"
            >
              {categories &&
                categories.map((category, index) => {
                  return (
                    <Tab
                    key={category.id}
                      className={category.title}
                      label={
                        <h5 className='tab_title' mt={2}> {category.title} </h5>
                      }
                      {...a11yProps({ index })}
                      id={category.id}
                      onClick={(event,newValue) => {                   
                        setValue(newValue);
                        setCategoryId(category.id);               
                    }} 
                    />
                  );
                })}
            </Tabs>
          </Col>
          <Col xs={10}>
            {blogs &&
              blogs.map((blog, index) => {
                return (
                  <p
                    value={value}
                    key={index}
                    index={value ? value : 0}
                    style={{ width: "100%" }}
                    dangerouslySetInnerHTML={createMarkup(
                      blog && blog.description
                    )}
                  ></p>
                );
              })}
          </Col>
        </Row>:
        <>
        <ul className="nav nav-tabs" id="myTab" role="tablist"  
            
>
        {categories &&
                categories.map((category, index) => {
                  return (  <li 
                    className="nav-item"
                  onClick={(event,newValue) => {                   
                      setValue(newValue);
                      setCategoryId(category.id);               
                  }} >
                  <a className="nav-link active text-white" id={index+"-tab"} data-toggle="tab" href={`#${index}`} role="tab" aria-controls={index} aria-selected="true">
                    {category.title}
                    </a>
                </li>)
              })
              }
</ul>

<div className="tab-content" id="myTabContent">
{blogs &&
              blogs.map((blog, index) => {
                return (
               
                  <div className="tab-pane fade show active mt-3" id={index} role="tabpanel" aria-labelledby={index+"-tab"}    >sdjhfjdsfhjsdfhjsd</div>

                );
              })}

</div>
    
        
        </>
        }
      </Container>
    </div>
  );
};
export default VerticalTabs;
