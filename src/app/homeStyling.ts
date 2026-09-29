import Link from "next/link";
import styled from "styled-components";

// Links to the collages page. Fills the screen below the header, cropping the edges if needed.
export const ImageWrapper = styled(Link)`
  display: block;
  position: relative;
  flex: 1;
  width: 100vw;
  min-height: 300px;
  margin-top: 65px; /* header height */
`;

export const FeaturedImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
