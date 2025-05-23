import React from "react";
import Link from "next/link";
import { Ul } from "./styleHeader";

interface RightNavBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const RightNavBar: React.FC<RightNavBarProps> = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Ul open={open}>
      <Link href="/" passHref>
        <li onClick={handleClick}>Collage</li>
      </Link>
      <Link href="/video" passHref>
        <li onClick={handleClick}>Video</li>
      </Link>
      <Link href="/cv" passHref>
        <li onClick={handleClick}>Bio</li>
      </Link>
      {/* <Link href="/sapasisters" passHref>
        <li onClick={handleClick}>Sapa Sisters</li>
      </Link> */}
    </Ul>
  );
};

export default RightNavBar;
