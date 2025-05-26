import React from "react";
import { Div, StyledBurger } from "./styles/Burger.styles";

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
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
