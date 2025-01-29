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

export const ImageCard = ({ collage, openModal }, index) => {
  return (
    <>
      <CardDivMain key={index} onClick={() => openModal(collage?.collageId)}>
        <CollageImage
          alt={collage.collageTitle}
          src={collage.collageImage?.file?.url}
        />
        <TableDiv>
          <TextDiv1>
            <TitleH2>{collage.collageTitle},</TitleH2>
            {collage.size ? <TextP>{collage.size}cm.</TextP> : null}
          </TextDiv1>
        </TableDiv>
        <LaptopDiv>
          <TextDiv>
            <TitleH2>{collage.collageTitle}</TitleH2>
            {collage.size ? <TextP>{collage.size}cm.</TextP> : null}
            {collage.serie ? (
              <TextP>{collage.serie}</TextP>
            ) : null}
          </TextDiv>
        </LaptopDiv>
      </CardDivMain>
    </>
  );
};

export default ImageCard;