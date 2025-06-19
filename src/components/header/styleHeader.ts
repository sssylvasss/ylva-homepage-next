import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 5;
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.8;
  }
`;

export const TitleText = styled.h1`
  font-size: 16px;
  font-weight: 800;
  margin: 0;
  padding: 15px 0;
  white-space: nowrap;
`;

export const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.colors.orange};
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  width: 170px;
  padding-top: 5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 4;

  li {
    padding: 18px 10px;
    color: white;
    font-weight: bold;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
