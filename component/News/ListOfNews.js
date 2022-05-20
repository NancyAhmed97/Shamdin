import React, { useEffect, useState } from "react";
import { Box, Container, Divider, Typography, Grid } from "@mui/material";
import NewsCard from "./NewsCard";
import { makeStyles } from "@mui/material/styles";
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/router'; // import { getData } from "../../pages/api/data";
import getData from "../../helpers/getData";
import { useTranslations } from "next-intl";
const ListOfNews = (props) => {
  const [page, setPage] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const handleChange = (event, value) => {
    setPage(value);
  };
  const router=useRouter()
  const {locale}=router;
  const [news, seNews] = useState([])
  const t=useTranslations('general')
  useEffect(() => {
    let active = true;

    function getNews() {
      //setLoading(true);

      var filtersArr = {
        langCode: locale,
      };
      
      getData(process.env.apiUrl + 'news', filtersArr)
        .then((res) => {

          if (!active) {
            return;
          }
          if (res.data.rows.length > 0) {
seNews(res.data.rows);          }
          //setLoading(false);
        })
        .catch(function (error) {
          //setLoading(false);          
        })

    };

    getNews();
    return () => {
      active = false;
    };

  }, [locale])
  console.log(categoryName);
  return (
    <div className="list_backBlock">
      <Container maxWidth="lg" className="list_big__container">
        <Box>
          <p className="list_title" variant="h4" align={locale=="ar"?"right":"left"}>
{t('newsTitle')}
          </p>
          <p className="list_desc" variant="h4" align={locale=="ar"?"right":"left"}>
{t('newsDesc')}
          </p>
          <Divider />
        </Box>

        <Grid container className="list_containerMagin">
          <Grid container item xs={12} spacing={2}>
            {news&&news.map((el,index) => (
                <NewsCard key={index}
              news={t('news')}
              title={el&&el.title}
              description={el&&el.description}
              updateDate={el&&el.updated_at}
              />
            ))}
          </Grid>
        </Grid>

        <Box
          sx={{
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
            style={{ textAlign: "center" }}
          />
        </Box>
      </Container>
    </div>
  );
};
export default ListOfNews;
