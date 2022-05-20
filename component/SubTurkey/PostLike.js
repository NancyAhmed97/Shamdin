import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import LikeReact from "../../component/common/LikeReact";
import ShareBtns from "../../component/common/ShareBtns";
import { makeStyles } from "@mui/material/styles";
import { useRouter } from "next/router";
import axios from "axios";
import { useTranslations } from 'next-intl';

function PostLike() {
  const router = useRouter();
  const { params = [] } = router.query;
  const [cityInfo, setCityInfo] = useState([]);
  const t = useTranslations('general');

  useEffect(() => {
    axios({
      method: "get",
      url: `${
        process.env.apiUrl
      }cities?langCode=${router.locale}`,
    }).then((res) => {
     const result= res.data.rows.filter(({id})=>id===parseInt(params[0]))
     setCityInfo(result);
    });
  }, [])
  
  return (
    <div className="post_liked_backBlock">
      <div className="post_liked_big__container">
        {cityInfo&&cityInfo.map((cityInfoDetails,index)=>{
          return(
            <>
                    <Typography variant="h5" component="h2" className="post_liked_title" key={index}>
{/*         Properties For Sale {cityInfoDetails.name} in 2022
 */}        
 هنحتاج api/cpages هنا
 </Typography>

        <Typography
     variant="h6"
     component="h3"
     className="post_liked_postContent"
    >
 هنحتاج api/cpages هنا
</Typography>
            </>
          )
        })}


        <LikeReact react={t('like')} margin={'15px 0px'} />
        <ShareBtns react={t('share')} margin={"15px 0px"} />
      </div>
    </div>
  );
}

export default PostLike;
