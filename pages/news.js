import React from 'react'
import ListOfNews from '../component/News/ListOfNews';
import Header from "../component/OwnershipTurkey/Header";
import Projects from "../component/Projects";


export default function news() {
  return (
    <div>
         <Header />
         <ListOfNews />
         <Projects />
    </div>
  )
}
export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: require('../locales/' + locale + '.json')
		}
	};
}
