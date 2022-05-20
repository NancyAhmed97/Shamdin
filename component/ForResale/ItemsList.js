import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PropCard from "./PropCard";
import SquareBtn from "../../component/common/SquareBtn";
import { makeStyles } from "@mui/material/styles";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";
const ItemsList = ({ btn, toggleState, response }) => {
  const [foundNO, setFoundNO] = useState(0);
  const { locale } = useRouter();
  const [page, setPage] = useState(1);
  const [DefultArra, setDefultArra] = useState("");
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.apiUrl}realestates?langCode=${locale}`,

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      setDefultArra(res.data.rows);
    });
  }, []);
  return (
    <div className="item_list_backBlock">
      <Container
        style={{
          position: "relative",
          paddingBottom: "25px",
        }}
      >
        {!!btn && btn}

        <Box
          sx={{
            display: "flex",
            paddingTop: "30px",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0px 10px 10px 0",
            flexWrap: "wrap",
          }}
          style={{
            display: "flex",
            paddingTop: "30px",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0px 10px 10px 0",
            flexWrap: "wrap",
          }}
        ></Box>

        <Box container className="item_list_containerMagin">
          {toggleState === "clicked"
            ? response.map((el, index) => {
                el;
                return (
                  <PropCard
                    key={index}
                    date="Mar 2022"
                    title={el.title}
                    location={el.city + " , " + el.municipality}
                    space={el.area + "m²"}
                    rooms={el.room}
                    price={el.salePrice + "$"}
                    id={el.id}
                  />
                );
              })
            : DefultArra &&
              DefultArra.map((defaultarray, index) => {
                return (
                  <PropCard
                    key={index}
                    date="Mar 2022"
                    title={defaultarray.title}
                    location={defaultarray.city + " , " + defaultarray.municipality}
                    space={defaultarray.area + "m²"}
                    rooms={defaultarray.room}
                    price={defaultarray.salePrice + "$"}
                    id={defaultarray.id}
                  />
                );
              })}
          {/* {JSON.parse(localStorage.getItem("response")).length > 0 ? (
            JSON.parse(localStorage.getItem("response")).map((el, index) => {
              return (
                <PropCard
                  key={index}
                  date="Mar 2022"
                  title="Istanbul Beylikduzu Residence for resale 2 + 1"
                  location="Istanbul, Basaksehir"
                  space="105 m²"
                  rooms="2 + 1"
                  price="540,000 $"
                  id={el.id}
                />
              );
            })
          ) : (
            <>
              <Alert className="w-100" severity="error">
                No results
              </Alert>{" "}
            </>
          )} */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
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
              onChange={handleChange}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
};
export default ItemsList;
