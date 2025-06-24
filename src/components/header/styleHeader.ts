import styled from "styled-components";
import Link from "next/link";

interface DarkModeProps {
  $isDark?: boolean;
  $isTransparent?: boolean;
}

export const Nav = styled.nav<DarkModeProps>`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ $isDark, $isTransparent }) =>
    $isTransparent ? "transparent" : $isDark ? "#1a1a1a" : "white"};
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.orange};

  &:hover {
    opacity: 0.8;
    text-shadow: 0 0 8px rgba(255, 165, 0, 0.6);
  }
`;

export const TitleText = styled.h1<DarkModeProps>`
  font-size: 16px;
  font-weight: 800;
  margin: 0;
  padding: 15px 0;
  white-space: nowrap;
  color: inherit;
  transition: all 0.3s ease;
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
  z-index: 1000;

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
