import React from "react";
import { useRouter } from "next/router";
import { Main } from "../styles/globalStyledComponents";
import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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

export default Layout;
