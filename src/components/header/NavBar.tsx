"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Nav, TitleText, TitleLink, DesktopLinks } from "./styleHeader";
import RightNavBar, { NAV_LINKS } from "./RightNavBar";
import Burger from "./Burger";
import { usePathname } from "next/navigation";


const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <Nav>
      <TitleLink href="/">
        <TitleText>YLVA LANDOFF LINDBERG</TitleText>
      </TitleLink>
      {/* Laptop menu; phones use the burger below */}
      <DesktopLinks>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </DesktopLinks>
      <Burger open={open} setOpen={setOpen} />
      <RightNavBar open={open} setOpen={setOpen} />
    </Nav>
  );
};

export default NavBar;
