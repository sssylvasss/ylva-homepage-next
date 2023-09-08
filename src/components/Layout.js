import React from "react";
import { any } from "prop-types";
import { NavBar } from "./header/NavBar";
import { Footer } from "./footer/Footer";
import { Main } from "@/styles/globalStyledComponents";

export default function Layout({ children }) {
  return (
    <Main>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Main>
  );
}

Layout.propTypes = {
  children: any,
};
