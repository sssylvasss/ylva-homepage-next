"use client";

import { useState, Fragment } from "react";
import type { Collage } from "../../lib/contentfulServer";
import { ImageCard } from "../../components/art/ImageCard";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Main,
  ImageSectionDiv,
  TitleH1,
  ImageSectionInnerDiv,
  ModalImage,
  ArrowForward,
  ArrowBack,
  ModalDiv,
  ModalFigure,
  ModalCaption,
  LaptopDiv,
  TableDiv,
} from "../../components/art/StylingArt";
import { Modal } from "../../components/modal/Modal";

interface ImageSerie {
  serie: string;
  year: string | null;
  collages: Collage[];
}

interface ArtClientProps {
  collages: Collage[];
}

export default function ArtClient({ collages }: ArtClientProps) {
  const [showModal, setShowModal] = useState(false);
  const [activeCollage, setActiveCollage] = useState<Collage | undefined>();

  const newImageArray = collages
    .sort((a, b) => b.collageId - a.collageId)
    .reduce<ImageSerie[]>((acc, curr) => {
      if (acc.some(({ serie }) => serie === curr.serie)) {
        acc.forEach((accElement) => {
          if (accElement.serie === curr.serie) {
            accElement.collages.push(curr);
          }
        });
        return acc;
      } else {
        const obj: ImageSerie = {
          serie: curr.serie || curr.year || "",
          year: curr.serie ? curr.year || null : null,
          collages: [curr],
        };
        return [...acc, obj];
      }
    }, []);

  const openModal = (id: number) => {
    const activeCollageIndex = collages.findIndex((co) => co.collageId === id);
    setActiveCollage(collages[activeCollageIndex]);
    setShowModal(true);
  };

  const imageSlide = (next: boolean) => {
    if (!activeCollage) return;
    const imageIndex = collages.findIndex(
      (co) => co.collageId === activeCollage.collageId
    );
    if (next) {
      setActiveCollage(
        imageIndex === collages.length - 1
          ? collages[0]
          : collages[imageIndex + 1]
      );
    } else {
      setActiveCollage(
        imageIndex === 0
          ? collages[collages.length - 1]
          : collages[imageIndex - 1]
      );
    }
  };

  return (
    <Main>
      <LaptopDiv>
        <ImageList variant="masonry" cols={3} gap={8}>
          {collages.map((collage) => (
            <ImageListItem key={collage.collageId}>
              <ImageCard collage={collage} openModal={openModal} />
            </ImageListItem>
          ))}
        </ImageList>
      </LaptopDiv>
      <TableDiv>
        {newImageArray.map((imageSerie, index) => (
          <Fragment key={index}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TitleH1>
                {imageSerie.serie}
                {imageSerie.year && <>, <span> </span>{imageSerie.year}</>}
              </TitleH1>
            </div>
            <ImageSectionDiv>
              <ImageSectionInnerDiv>
                {imageSerie.collages.map((collage) => (
                  <ImageCard
                    key={collage.collageId}
                    collage={collage}
                    openModal={openModal}
                  />
                ))}
              </ImageSectionInnerDiv>
            </ImageSectionDiv>
          </Fragment>
        ))}
      </TableDiv>

      {showModal && (
        <Modal setShowModal={setShowModal} setActiveCollage={setActiveCollage}>
          <ModalDiv>
            <ArrowBack onClick={() => imageSlide(false)} />
            <ModalFigure>
              <ModalImage
                alt="collage"
                src={activeCollage?.collageImage?.file?.url}
              />
              <ModalCaption>
                {activeCollage?.collageTitle}
                {activeCollage?.size && `, ${activeCollage.size}cm.`}
                {activeCollage?.year && `, ${activeCollage.year}`}
              </ModalCaption>
            </ModalFigure>
            <ArrowForward onClick={() => imageSlide(true)} />
          </ModalDiv>
        </Modal>
      )}
    </Main>
  );
}