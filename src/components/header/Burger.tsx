import React from "react";
import { Div, StyledBurger } from "./styleHeader";

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
  const showMenu = () => {
    setOpen(!open);
  };

  return (
    <StyledBurger
      onClick={showMenu}
      aria-label="Toggle menu"
      role="button"
      aria-expanded={open}
    >
      <Div open={open} />
      <Div open={open} />
      <Div open={open} />
    </StyledBurger>
  );
};

export default Burger;
