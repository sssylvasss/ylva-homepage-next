"use client"
import React, { useState } from "react";
import { Nav, TitleText, TitleLink } from "./styleHeader";
import RightNavBar from "./RightNavBar";
import Burger from "./Burger";
import { usePathname } from "next/navigation";


const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isDarkMode = pathname === "/code";
  const isLandingPage = pathname === "/" || pathname === "/home";

  return (
    <Nav $isDark={isDarkMode} $isTransparent={isLandingPage}>
      <TitleLink href="/">
        <TitleText $isDark={isDarkMode}>YLVA LANDOFF LINDBERG</TitleText>
      </TitleLink>
      <Burger open={open} setOpen={setOpen} $isDark={isDarkMode} />
      <RightNavBar open={open} setOpen={setOpen} />
    </Nav>
  );
};

export default NavBar;
