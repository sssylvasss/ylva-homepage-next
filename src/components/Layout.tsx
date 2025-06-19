import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PageContainer } from "../styles/globalStyledComponents";
import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";
import { useMediaQuery } from "react-responsive";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const shouldShowFooter = () => {
    if (!isMounted) return false; // Don't show footer during SSR
    if (pathname === "/") {
      return isMobile;
    }
    return !pathname.startsWith("/chicken");
  };

  return (
    <PageContainer>
      {pathname.startsWith("/chicken") || <NavBar />}
      <main>{children}</main>
      {shouldShowFooter() && <Footer />}
    </PageContainer>
  );
};

export default Layout;
