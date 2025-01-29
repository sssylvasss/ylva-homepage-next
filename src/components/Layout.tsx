import React, { ReactNode } from "react";
import { useRouter } from "next/router";

import { NavBar } from "./header/NavBar";
import { Footer } from "./footer/Footer";
import { Main } from "../styles/globalStyledComponents";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Main>
      {pathname.startsWith("/chicken") || <NavBar />}
      <main>{children}</main>
      {pathname.startsWith("/chicken") || <Footer />}
    </Main>
  );
};
