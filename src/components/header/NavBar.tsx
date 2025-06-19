import React, { useState } from "react";
import { Nav, TitleText, TitleLink } from "./styleHeader";
import RightNavBar from "./RightNavBar";
import Burger from "./Burger";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Nav>
      <TitleLink href="/">
        <TitleText>YLVA LANDOFF LINDBERG</TitleText>
      </TitleLink>
      <Burger open={open} setOpen={setOpen} />
      <RightNavBar open={open} setOpen={setOpen} />
    </Nav>
  );
};

export default NavBar;
