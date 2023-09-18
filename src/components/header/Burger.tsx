import React from "react";
import { StyledBurger } from "./styleHeader";

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
    <StyledBurger open={open} onClick={() => showMenu()}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
