import React from "react";
import BigBtn from "../../component/Articales/BigBtn";
import Header from "../../component/Articales/Header";
import ListOfArticales from "../../component/Articales/ListOfArticales";
import Projects from "../../component/Projects";

const Index = () => {
  return (
    <div>
      {" "}        <Header />
         <BigBtn />
        <ListOfArticales />
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