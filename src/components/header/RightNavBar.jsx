import React from "react";
import Link from "next/link";

import { Ul } from "./styleHeader";


export const RightNavBar = ({open, setOpen}) => {
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
      {/* <Link href={"/sapasisters"} passHref>
        <li onClick={() => setOpen(false)}>Sapa Sisters</li>
      </Link> */}
    </Ul>
  );
};
