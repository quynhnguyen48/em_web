import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavigationBar/NavBar";
import Router from "next/router";
import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const locale = router.query.locale as string || 'en';

  const [showChild, setShowChild] = useState(false)

  React.useEffect(() => {
    let toastId: string;
    const start = () => {
      toast.loading(locale == "en" ? 'Loading...' : "Đang tải...");
    };
    const end = () => {
      toast.dismiss(toastId);
    };
    
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    setShowChild(true);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
    };
  }, []);

  if (!showChild) {
    return null
  }

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7JR7J71T35"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7JR7J71T35');
        `}
      </Script>
      <Toaster
        position="bottom-center"
      />
    </>
  );
}

export default MyApp;
