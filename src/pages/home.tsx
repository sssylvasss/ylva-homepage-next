import React from "react";
import Head from "next/head";
import CollagePage from "./collage";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Ylva</title>
        <meta
          name="description"
          content="Welcome to Ylva Landoff Lindberg's portfolio - Art, Code, and Creative Works"
        />
      </Head>
      <CollagePage />
    </>
  );
};

export default HomePage;
