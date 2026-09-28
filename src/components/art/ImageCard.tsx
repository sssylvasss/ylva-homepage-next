"use client";
import React from "react";
import type { Collage } from "../../lib/contentfulServer";
import {
  CardDivMain,
  CardImage,
  CardCaption,
  TitleH2,
  TextP,
} from "./StylingArt";

// Alt text for a collage image; falls back to the serie for untitled collages.
export const collageAlt = ({ collageTitle, serie }: Collage) =>
  collageTitle || serie || "Collage by Ylva Landoff Lindberg";

interface ImageCardProps {
  collage: Collage;
  openModal: (id: number) => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ collage, openModal }) => {
  const { collageTitle, collageImage, size } = collage;

  return (
    <CardDivMain
      role="button"
      tabIndex={0}
      aria-label={`Open ${collageAlt(collage)}`}
      onClick={() => openModal(collage.collageId)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(collage.collageId);
        }
      }}
    >
      {collageImage?.file?.url && (
        <CardImage
          src={
            collageImage.file.url.startsWith("http")
              ? collageImage.file.url
              : `https:${collageImage.file.url}`
          }
          alt={collageAlt(collage)}
          width={900}
          height={600}
          sizes="(max-width: 520px) 100vw, 600px"
        />
      )}
      <CardCaption>
        {collageTitle && <TitleH2>{collageTitle}</TitleH2>}
        {size && <TextP>{size}cm.</TextP>}
      </CardCaption>
    </CardDivMain>
  );
};
