import Link from "next/link";
import styled from "styled-components";
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

  /* Laptop: the menu sits right after the title */
  @media (min-width: 821px) {
    justify-content: flex-start;
    gap: 40px;
  }
  top: 0;
  left: 0;
  background-color: ${({ $isDark, $isTransparent }) =>
    $isTransparent ? "transparent" : $isDark ? "#1a1a1a" : "white"};
  z-index: 1000;
  transition: background-color 0.3s ease;
  /* Header and menu use the light-only Roboto for a thinner bold (see layout.tsx) */
  font-family: var(--font-roboto-light), sans-serif;
`;
export const TitleLink = styled(Link)`
  text-decoration: none;
  color: var(--color-black);

  &:hover {
    opacity: 0.8;
  }
`;
export const TitleText = styled.h1<DarkModeProps>`
  font-size: 16px;
  font-weight: 800;
  margin: 0;
  padding: 15px 0;
  white-space: nowrap;
  color: ${({ $isDark }) => ($isDark ? "var(--color-white)" : "inherit")};
  transition: all 0.3s ease;
`;

// Laptop menu, hidden on phones
export const DesktopLinks = styled.ul<DarkModeProps>`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 24px;

  @media (min-width: 821px) {
    display: flex;
  }

  a {
    font-size: 14px;
    color: ${({ $isDark }) =>
      $isDark ? "var(--color-white)" : "var(--color-black)"};
    text-underline-offset: 4px;

    &:hover,
    &[aria-current="page"] {
      text-decoration: underline;
      opacity: 1;
    }
  }
`;

// Phone menu that slides in from the burger, hidden on laptops
export const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;

  @media (min-width: 821px) {
    display: none;
  }
  flex-flow: column nowrap;
  background-color: var(--color-black);
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  width: 170px;
  padding-top: 5rem;
  /* Hidden when closed so Tab skips the links.
     Visibility switches after the slide-out so the animation still shows. */
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: ${({ open }) =>
    open
      ? "transform 0.3s ease-in-out"
      : "transform 0.3s ease-in-out, visibility 0s linear 0.3s"};
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