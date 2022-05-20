import React from "react";
import BigBtn from "../../component/OwnershipTurkey/BigBtn";
import Header from "../../component/OwnershipTurkey/Header";
import ListOfNews from "../../component/OwnershipTurkey/ListOfNews";
import FeaturedProjects from "../../component/OwnershipTurkey/FeaturedProjects";
import LinkDivider from "../../component/common/LinkDivider";
import MainMobile from "../../component/Header/Mobile/MainMobile";
import Footer from "../../component/Footer";
import { Container } from "@mui/material";
import Projects from "../../component/Projects";

const Index = () => {
  return (
    <div>
      {" "}        <Header />
        <BigBtn />
        <ListOfNews />
        <Projects />

    </div>
  );
};
export default Index;
export async function getServerSideProps({ locale }) {
	return {
		props: {
			messages: require('../../locales/' + locale + '.json')
		}
	};
}