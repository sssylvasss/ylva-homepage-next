import React from "react";
import { useRouter } from "next/router";
import { PageContainer } from "../styles/globalStyledComponents";
import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <PageContainer>
      {pathname.startsWith("/chicken") || <NavBar />}
      <main>{children}</main>
      {pathname.startsWith("/chicken") || <Footer />}
    </PageContainer>
  );
};

export default Layout;
