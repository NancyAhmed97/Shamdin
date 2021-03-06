import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
/* import { Provider } from "react-redux";
import store from "../Redux/Store"; */ 
import { useEffect } from 'react';
import { NextIntlProvider } from 'next-intl';

import Footer from "../component/Footer";
import { Container } from "react-bootstrap";
import Header from "../component/Header/index";
import { useRouter } from "next/router";
import Script from 'next/script';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
    import("bootstrap/dist/js/bootstrap");
}, [locale]);
  return (
    
    <NextIntlProvider messages={pageProps.messages}>
    <Head>
      <title>Shamdin</title>
      <meta name="description" content="Generated by Ameer Media" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <Header />
      <Container>
        {/* <Hero /> */}
        <Component {...pageProps} />
      </Container>
      <Footer />
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></Script>
<Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></Script>

    </div>
  </NextIntlProvider>

  );
}

export default MyApp

export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: require('../locales/' + locale + '.json')
		}
	};
}