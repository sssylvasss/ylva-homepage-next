import React from "react";
import { Div, StyledBurger } from "./styleHeader";




export const Burger = ({open, setOpen}) => {
  const showMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <StyledBurger onClick={() => showMenu()}>
      <Div open={open} />
      <Div open={open} />
      <Div open={open} />
    </StyledBurger>
  );
};

