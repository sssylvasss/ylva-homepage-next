import "../styles/globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

const theme = {
  breakpoints: {
    mobile: "520px",
    tablet: "820px",
    desktop: "991px",
  },
  colors: {
    white: "#ffff",
    orange: "#fc4103",
    modalOverlay: "rgba(0, 0, 0, 0.5)",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <main className={roboto.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ThemeProvider>
    </>
  );
}
