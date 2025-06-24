import React from "react";
import { StyledBurger } from "./styles/Burger.styles";

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  $isDark?: boolean;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen, $isDark }) => {
  return (
    <StyledBurger $open={open} $isDark={$isDark} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
