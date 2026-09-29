"use client";

import type { Collage } from "../lib/contentfulServer";
import { collageAlt } from "../components/art/ImageCard";
import { ImageWrapper, FeaturedImage } from "./homeStyling";

interface HomeClientProps {
  collage?: Collage;
}

export default function HomeClient({ collage }: HomeClientProps) {
  const file = collage?.collageImage?.file;
  const imageSize = file?.details?.image;

  if (!collage || !file?.url) return null;

  return (
    <ImageWrapper
      href="/art"
      aria-label="See all collages"
      $aspectRatio={imageSize ? imageSize.width / imageSize.height : 1}
    >
      <FeaturedImage
        src={file.url.startsWith("http") ? file.url : `https:${file.url}`}
        alt={collageAlt(collage)}
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
      />
    </ImageWrapper>
  );
}
