import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: white;

  @media (max-width: 768px) {
    justify-content: flex-start;
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
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
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
  }

  li {
    padding: 18px 10px;

    @media (max-width: 768px) {
      color: black;
    }
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;
