import React from "react";
import { StyledBurger, Div } from "./styleHeader";

interface BurgerProps{
  open: boolean,
  setOpen: Function,
}

export const Burger: React.FC<BurgerProps> = ({open, setOpen}) => {
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
