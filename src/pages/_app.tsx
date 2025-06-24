import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Roboto } from "next/font/google";
import Head from "next/head";
import Layout from "../components/Layout";
import { AnimationProvider } from "../context/AnimationContext";
import { theme } from "../styles/theme";

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
      <AnimationProvider>
        <ThemeProvider theme={theme}>
          <main className={roboto.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </ThemeProvider>
      </AnimationProvider>
    </>
  );
}
