/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

import Story from "../component/Story";
import Projects from "../component/Projects";
import Testimonials from "../component/Testimonial";
import Channel from "../component/Channel";
import Blog from "../component/Blog";
import Gallery from "../component/Gallery";
import Services from "../component/Services";
import Hero from "../component/Carosoul";

export default function Home() {
  return (
<>
    <Hero />
		<Story />
    <Projects />
    <Testimonials />
    <Channel />
    <Blog />
    <Gallery />
    <Services />
</>
  )
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: require('../locales/' + locale + '.json')
		}
	};
}