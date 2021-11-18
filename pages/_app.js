import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>الواحة</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
