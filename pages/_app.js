import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Monitor PASO 2021</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
