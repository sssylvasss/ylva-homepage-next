import "../styles/globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
