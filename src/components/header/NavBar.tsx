import React, { useState } from "react";
import { Burger } from "./Burger";
import { RightNavBar } from "./RightNavBar";
import { Nav, TitleText } from "./styleHeader";


export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <TitleText>YLVA LANDOFF LINDBERG</TitleText>
      <Burger open={open} setOpen={setOpen} />
      <RightNavBar open={open} setOpen={setOpen} />
    </Nav>
  );
};
