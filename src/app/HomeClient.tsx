"use client";

import { getImageProps } from "next/image";
import type { Collage } from "../lib/contentfulServer";
import { collageAlt } from "../components/art/ImageCard";
import { ImageWrapper, FeaturedImage } from "./homeStyling";

interface HomeClientProps {
  landscape?: Collage;
  portrait?: Collage;
}

// Image props for a collage, or undefined when it has no image
const collageImageProps = (collage?: Collage) => {
  const file = collage?.collageImage?.file;
  if (!collage || !file?.url) return undefined;
  return getImageProps({
    src: file.url.startsWith("http") ? file.url : `https:${file.url}`,
    alt: collageAlt(collage),
    width: file.details?.image?.width ?? 1200,
    height: file.details?.image?.height ?? 1200,
    sizes: "100vw",
    loading: "eager",
    fetchPriority: "high",
  }).props;
};

export default function HomeClient({ landscape, portrait }: HomeClientProps) {
  const landscapeProps = collageImageProps(landscape);
  const portraitProps = collageImageProps(portrait);
  // Falls back to whichever collage exists
  const imgProps = landscapeProps ?? portraitProps;

  if (!imgProps) return null;

  return (
    <ImageWrapper href="/art" aria-label="See all collages">
      {/* The browser downloads only the collage that matches the screen */}
      <picture>
        {landscapeProps && portraitProps && (
          <source media="(orientation: portrait)" srcSet={portraitProps.srcSet} />
        )}
        <FeaturedImage {...imgProps} />
      </picture>
    </ImageWrapper>
  );
}
