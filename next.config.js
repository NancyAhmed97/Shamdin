module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["dryoureka.com", "127.0.0.1"],
  },
  i18n: {
    // providing the locales supported by your application
    locales: ["ar", "en", "tr"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "ar",
    //localeDetection: false,
  },
  
  env: {
    apiUrl: "https://dryoureka.com/api/",
    appUrl: "https://dryoureka.com/",
    basicURl:"https://shamdin.herokuapp.com/"
  },
 
};
