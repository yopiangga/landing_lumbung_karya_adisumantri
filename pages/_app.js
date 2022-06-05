import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "services/firebase";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
