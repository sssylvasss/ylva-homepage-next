import React from "react";
import { StyledBurger } from "./styleHeader";

export const Burger = (props) => {
  const showMenu = () => {
    if (props.open) {
      props.setOpen(false);
    } else {
      props.setOpen(true);
    }
  };

  return (
    <StyledBurger open={props.open} onClick={() => showMenu()}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
