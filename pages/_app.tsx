import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavigationBar/NavBar";
import Router from "next/router";
import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false)

  React.useEffect(() => {
    let toastId: string;
    const start = () => {
      toast.loading('Loading...');
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
