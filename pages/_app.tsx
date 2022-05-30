import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import Head from "next/head";
import App from "next/app";
import { wrapper } from "../redux";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = React.useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  // console.log("test") // dev

  return { ...appProps };
};
export default wrapper.withRedux(MyApp);
