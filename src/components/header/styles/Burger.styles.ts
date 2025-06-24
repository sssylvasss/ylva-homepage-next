import styled from "styled-components";

interface StyledBurgerProps {
  $open: boolean;
  $isDark?: boolean;
}

export const StyledBurger = styled.button<StyledBurgerProps>`
  position: fixed;
  right: 20px;
  top: 15px;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ $open, $isDark, theme }) =>
      $open ? "#ffffff" : $isDark ? "#ffffff" : theme.colors.orange};
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ $open }) => ($open ? "0" : "1")};
      transform: ${({ $open }) =>
        $open ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${({ $open }) => ($open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
