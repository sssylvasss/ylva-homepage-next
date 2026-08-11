"use client"
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PageContainer } from "../styles/globalStyledComponents";
import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";
import { useMediaQuery } from "react-responsive";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
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
    return pathname !== "/contact";
  };

  return (
    <PageContainer>
      <NavBar />
      <main>{children}</main>
      {shouldShowFooter() && <Footer />}
    </PageContainer>
  );
};

export default Layout;
