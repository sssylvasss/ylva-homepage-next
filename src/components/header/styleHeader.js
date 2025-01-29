import styled from "styled-components";
import Link from "next/link";
//NavBar

export const TitleText = styled.h1`

  font-weight: 600;
`;

export const Nav = styled.nav`
  margin: auto 0;
  width: 100%;
  height: 100px;
  border-botton: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 30px;
    font-weight: 600;
  }
`;

//RightNavBar

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;
  margin-right: 0;
  
  li {
    padding: 18px 10px;
    &:hover {
      color: #fac78c;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fc4103;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100px;
    padding: 5rem 1rem 0 1rem;

    transition: transform 0.3s ease-in-out;
    margin: 0;
    li {
      width: 100%;

      color: #fff;
      &:hover {
        color: #fac78c;
      }
    }
  }
`;

export const NavLink = styled(Link)`
  color: #fc4103;
  text-decoration: none;
`;

//Burger

export const StyledBurger = styled.button`
    width: 2rem;
    height: 2rem;
    position: fixed;
    right: 10%;
    display: flex;
    z-index: 20;
    display:flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    @media (min-width: 769px){
      display: none;
    }

`;

export const Div = styled.div`
width: 2rem;
height: 0.25rem;
background-color: ${({ open }) => (open ? "#fff" : "#fc4103")};
border-radius: 10px;
transform-origin: 0;
transition: all 0.3s linear;

&:nth-child(1) {
    transform: ${({ open }) => (open ? "rotate(42deg)" : "rotate(0)")}
}
&:nth-child(2) {
    transform: ${({ open }) =>
      open ? "translateX(100%)" : "translateX(0)"}
}
&:nth-child(2){
    opacity: ${({ open }) => (open ? 0 : 1)}
}
&:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-42deg)" : "rotate(0)")}
}
`;