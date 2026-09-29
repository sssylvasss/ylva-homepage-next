"use client"
import React from "react";
import { usePathname } from "next/navigation";
import {
  PageContainer,
  MainContent,
} from "../styles/globalStyledComponents";
import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <PageContainer>
      <NavBar />
      <MainContent>{children}</MainContent>
      {/* The start page is just the collage, without a footer */}
      {pathname !== "/" && <Footer />}
    </PageContainer>
  );
};

export default Layout;
