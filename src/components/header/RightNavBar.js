import Link from "next/link";
import React from "react";
import { Ul } from "./styleHeader";

export const RightNavBar = (props) => {
  return (
    <Ul open={props.open}>
      <Link href={"/"} passHref>
        <li onClick={() => props.setOpen(false)}>Collage</li>
      </Link>
      <Link href={"/video"} passHref>
        <li onClick={() => props.setOpen(false)}>Video</li>
      </Link>
      <Link href={"/cv"} passHref>
        <li onClick={() => props.setOpen(false)}>Bio</li>
      </Link>
      <Link href={"/sapasisters"} passHref>
        <li onClick={() => props.setOpen(false)}>Sapa Sisters</li>
      </Link>
    </Ul>
  );
};
