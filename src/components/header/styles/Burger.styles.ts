import styled from "styled-components";

export const StyledBurger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  position: absolute;
  right: 20px;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Div = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 0.25rem;
  background: ${({ open }) => (open ? "#ffffff" : "#fc4103")};
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  position: relative;
  transform-origin: 1px;

  &:first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  &:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  &:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
