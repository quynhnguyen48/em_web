import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavigationBar/NavBar";
import Router from "next/router";
import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

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
      <Toaster
        position="bottom-center"
      />
    </>
  );
}

export default MyApp;
