import React from "react";
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
      <CollageImage alt={collageTitle} src={collageImage?.file?.url} />
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
