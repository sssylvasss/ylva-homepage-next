import React from "react";
import Link from "next/link";

import { Ul } from "./styleHeader";

interface RightNavBarProps{
  open: boolean,
  setOpen: Function,
}

export const RightNavBar: React.FC<RightNavBarProps> = ({open, setOpen}) => {
  return (
    <Ul open={open}>
      <Link href={"/"} passHref>
        <li onClick={() => setOpen(false)}>Collage</li>
      </Link>
      <Link href={"/video"} passHref>
        <li onClick={() => setOpen(false)}>Video</li>
      </Link>
      <Link href={"/cv"} passHref>
        <li onClick={() => setOpen(false)}>Bio</li>
      </Link>
      <Link href={"/sapasisters"} passHref>
        <li onClick={() => setOpen(false)}>Sapa Sisters</li>
      </Link>
    </Ul>
  );
};
