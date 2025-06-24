import React, { useState } from "react";
import { Nav, TitleText, TitleLink } from "./styleHeader";
import RightNavBar from "./RightNavBar";
import Burger from "./Burger";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const isDarkMode = router.pathname === "/code";

  return (
    <Nav $isDark={isDarkMode}>
      <TitleLink href="/">
        <TitleText $isDark={isDarkMode}>YLVA LANDOFF LINDBERG</TitleText>
      </TitleLink>
      <Burger open={open} setOpen={setOpen} $isDark={isDarkMode} />
      <RightNavBar open={open} setOpen={setOpen} />
    </Nav>
  );
};

export default NavBar;
