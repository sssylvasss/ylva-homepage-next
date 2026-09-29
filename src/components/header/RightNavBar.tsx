"use client";
import React from "react";
import Link from "next/link";
import { Ul } from "./styleHeader";

// Pages in the menu, shared by the phone menu and the laptop menu
export const NAV_LINKS = [
  { href: "/art", label: "COLLAGES" },
  { href: "/video", label: "VIDEO" },
  { href: "/code", label: "CODE" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "CONTACT" },
];

interface RightNavBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const RightNavBar: React.FC<RightNavBarProps> = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        </li>
      ))}
    </Ul>
  );
};

export default RightNavBar;
