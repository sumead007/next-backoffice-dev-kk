import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import Head from "next/head";
import App from "next/app";
import { wrapper } from "../redux";

function MyApp({ Component, pageProps }: AppProps) {
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

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  // console.log("test") // dev

  return { ...appProps };
};
export default wrapper.withRedux(MyApp);
