import styled from "styled-components";

type StyledProps = {
  open: boolean;
};

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background: white;
  z-index: 1;
`;

export const TitleText = styled.h1`
  font-size: 20px;
  text-align: left;
  margin: 0;
  padding: 0;
  font-weight: normal;
`;

export const Div = styled.div<StyledProps>`
  width: 2rem;
  height: 0.25rem;
  background-color: black;
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  cursor: pointer;

  &:nth-child(1) {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  &:nth-child(2) {
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  @media (min-width: 991px) {
    display: none;
  }
`;

export const Ul = styled.ul<StyledProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;
  padding: 0;

  li {
    padding: 18px 10px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 17px;
  }

  @media (max-width: 991px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    li {
      color: black;
    }
  }
`;
