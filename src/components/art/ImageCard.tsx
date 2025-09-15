import React from "react";
import Image from "next/image";
import {
  CardDivMain,
  CollageImage,
  TitleH2,
  TextP,
  TextDiv,
  TextDiv1,
  TableDiv,
  LaptopDiv,
} from "./StylingArt";

interface CollageImage {
  file: {
    url: string;
  };
}

interface Collage {
  collageId: number;
  collageTitle: string;
  collageImage?: CollageImage;
  size?: string;
  serie?: string;
}

interface ImageCardProps {
  collage: Collage;
  openModal: (id: number) => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ collage, openModal }) => {
  const { collageTitle, collageImage, size, serie } = collage;

  return (
    <CardDivMain onClick={() => openModal(collage.collageId)}>
      {collageImage?.file?.url && (
        <Image
          src={
            collageImage.file.url.startsWith("http")
              ? collageImage.file.url
              : `https:${collageImage.file.url}`
          }
          alt={collageTitle}
          width={900}
          height={600}
          style={{ width: "100%", height: "auto" }}
          sizes="(max-width: 520px) 100vw, (max-width: 991px) 90vw, 600px"
          loading="lazy"
        />
      )}
      <TableDiv>
        <TextDiv1>
          <TitleH2>{collageTitle}</TitleH2>
          {size && <TextP>{size}cm.</TextP>}
        </TextDiv1>
      </TableDiv>
      <LaptopDiv>
        <TextDiv>
          <TitleH2>{collageTitle}</TitleH2>
          {size && <TextP>{size}cm.</TextP>}
          {serie && <TextP>{serie}</TextP>}
        </TextDiv>
      </LaptopDiv>
    </CardDivMain>
  );
};

export default ImageCard;
