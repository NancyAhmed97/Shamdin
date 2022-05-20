
import React, { useState } from "react";
import TitleContainer from "../component/common/TitleContainer";
import ItemList from "../component/ForResale/ItemsList";
import FiltersList from "../component/ForResale/FiltersList";
import FiltersMobilePopup from "../component/ForResale/FiltersMobilePopup";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, useTheme } from "@mui/material";

const Index = () => {
  const theme = useTheme();
  const [toggleState, setToggleState] = useState("");
  const [response, setResponse] = useState([]);

  const sentData = (val) => {
    setToggleState(val);
  };

  const responseToParemt = (val) => {
    setResponse(val);
  };

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (

      <Container>
        {isDesktop ? (
          <>
            <Grid
              container
              rowSpacing={5}
              item
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              spacing={2}
            >
              <Grid item xs={4}>
                <FiltersList
                  sentData={sentData}
                  responseToParemt={responseToParemt}
                />
              </Grid>

              <Grid item xs={8}>
                <TitleContainer searched="Turkey" />
                <ItemList toggleState={toggleState} response={response} />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <TitleContainer searched="Turkey" />

              <ItemList btn={<FiltersMobilePopup />} />
            </Grid>
          </>
        )}
      </Container>
      
  );
};
export default Index;

export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: require('../locales/' + locale + '.json')
		}
	};
}