import React from "react";
import PlaylistCard from "./PlaylistCard";
import { makeStyles, alpha } from "@mui/material/styles";
import { Col, Row, Container } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";

const Playlists = ({ channels }) => {
  (channels);
  const router = useRouter();
  const { params = [] } = router.query;
  (channels);
   if (params && params.length === 1) {
     return (
       <div className="playlist_backBlock my-3">
         <Container className="playlist_containerMagin">
           <Row>
             {channels &&
               channels[0].map((channel, index) => {
                 return (
                   <Col md={6} key={index} className="mt-3">
                     <PlaylistCard channel={channel} />
                   </Col>
                 );
               })}
           </Row>
         </Container>
       </div>
     );
   } else {

     return (
       <div className="playlist_backBlock my-3">
         <Container className="playlist_containerMagin">
           <Row>
             {channels &&
               channels.slice(1).map((channel, index) => {
                 return (
                   <Col md={6} key={index} className="mt-3">
                     <PlaylistCard channel={channel} />
                   </Col>
                 );
               })}
           </Row>
         </Container>
       </div>
     );
   }


};
export default Playlists;
