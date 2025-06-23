import React from "react";
import Link from "next/link";
import { Ul } from "./styleHeader";

interface RightNavBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const RightNavBar: React.FC<RightNavBarProps> = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <li>
        <Link href="/" onClick={() => setOpen(false)}>
          COLLAGE
        </Link>
      </li>
      <li>
        <Link href="/video" onClick={() => setOpen(false)}>
          VIDEO
        </Link>
      </li>
      <li>
        <Link href="/code" onClick={() => setOpen(false)}>
          CODE
        </Link>
      </li>
      <li>
        <Link href="/cv" onClick={() => setOpen(false)}>
          CV
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setOpen(false)}>
          CONTACT
        </Link>
      </li>
      {/* <Link href="/sapasisters" passHref>
        <li onClick={handleClick}>Sapa Sisters</li>
      </Link> */}
    </Ul>
  );
};

export default RightNavBar;
