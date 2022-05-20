import React from 'react'
import ListOfArticales from '../component/Articales/ListOfArticales';
import Header from "../component/OwnershipTurkey/Header";
import Projects from "../component/Projects";

export default function articales() {
    
  return (
    <div>     <Header />
    <ListOfArticales />
    <Projects /></div>
  )
}
export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: require('../locales/' + locale + '.json')
		}
	};
}
