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

interface ImageCardProps {
  collage: Collage;
  openModal: (id: number) => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ collage, openModal }) => {
  const { collageTitle, collageImage, size } = collage;

  return (
    <CardDivMain onClick={() => openModal(collage.collageId)}>
      {collageImage?.file?.url && (
        <CardImage
          src={
            collageImage.file.url.startsWith("http")
              ? collageImage.file.url
              : `https:${collageImage.file.url}`
          }
          alt={collageTitle}
          width={900}
          height={600}
          sizes="(max-width: 520px) 100vw, 600px"
        />
      )}
      <CardCaption>
        <TitleH2>{collageTitle}</TitleH2>
        {size && <TextP>{size}cm.</TextP>}
      </CardCaption>
    </CardDivMain>
  );
};
