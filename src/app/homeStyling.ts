import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// Links to the collages page.
// Phones: full screen width at the collage's own proportions, below the header.
// Laptops: fills the whole screen below the header, cropping the edges if needed.
export const ImageWrapper = styled(Link)<{ $aspectRatio: number }>`
  display: block;
  position: relative;
  width: 100vw;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  margin-top: 65px; /* header height */

  @media (min-width: 821px) {
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    height: calc(100vh - 65px);
    aspect-ratio: auto;
    margin-top: 0;
  }
`;

export const FeaturedImage = styled(Image)`
  object-fit: cover;
`;
