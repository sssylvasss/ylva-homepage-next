import "../styles/globals.css";
import {Layout} from "../components/Layout";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
