import React, { ReactNode } from "react";

import { NavBar } from "./header/NavBar";
import { Footer } from "./footer/Footer";
import { Main } from "../styles/globalStyledComponents"

interface LayoutProps{
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> =({ children }) =>{
  return (
    <Main>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Main>
  );
}

