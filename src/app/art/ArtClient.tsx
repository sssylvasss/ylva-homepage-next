"use client";

import { useState, useMemo } from "react";
import type { Collage } from "../../lib/contentfulServer";
import { ImageCard } from "../../components/art/ImageCard";
import {
  Main,
  SeriesWrapper,
  SeriesSection,
  TitleH1,
  ImageSectionInnerDiv,
  ModalImage,
  ArrowForward,
  ArrowBack,
  ModalDiv,
  ModalFigure,
  ModalCaption,
} from "../../components/art/StylingArt";
import { Modal } from "../../components/modal/Modal";

interface ImageSerie {
  key: string;
  serie: string;
  year: string | null;
  collages: Collage[];
}

interface ArtClientProps {
  collages: Collage[];
}

// Groups collages by serie (newest first). Collages without a serie are grouped by year.
const groupBySerie = (collages: Collage[]): ImageSerie[] => {
  const sorted = [...collages].sort((a, b) => b.collageId - a.collageId);
  const groups = new Map<string, ImageSerie>();

  sorted.forEach((collage) => {
    const key = collage.serie || collage.year || "";
    const group = groups.get(key);
    if (group) {
      group.collages.push(collage);
    } else {
      groups.set(key, {
        key,
        serie: key,
        year: collage.serie ? collage.year || null : null,
        collages: [collage],
      });
    }
  });

  return Array.from(groups.values());
};

export default function ArtClient({ collages }: ArtClientProps) {
  const [showModal, setShowModal] = useState(false);
  const [activeCollage, setActiveCollage] = useState<Collage | undefined>();

  const imageSeries = useMemo(() => groupBySerie(collages), [collages]);

  // Modal slides through the collages in the same order they are displayed.
  const orderedCollages = useMemo(
    () => imageSeries.flatMap((imageSerie) => imageSerie.collages),
    [imageSeries]
  );

  const openModal = (id: number) => {
    setActiveCollage(orderedCollages.find((co) => co.collageId === id));
    setShowModal(true);
  };

  const imageSlide = (next: boolean) => {
    if (!activeCollage) return;
    const imageIndex = orderedCollages.findIndex(
      (co) => co.collageId === activeCollage.collageId
    );
    const total = orderedCollages.length;
    const newIndex = next
      ? (imageIndex + 1) % total
      : (imageIndex - 1 + total) % total;
    setActiveCollage(orderedCollages[newIndex]);
  };

  return (
    <Main>
      <SeriesWrapper>
        {imageSeries.map((imageSerie) => (
          <SeriesSection key={imageSerie.key}>
            <TitleH1>
              {imageSerie.serie}
              {imageSerie.year && `, ${imageSerie.year}`}
            </TitleH1>
            <ImageSectionInnerDiv>
              {imageSerie.collages.map((collage) => (
                <ImageCard
                  key={collage.collageId}
                  collage={collage}
                  openModal={openModal}
                />
              ))}
            </ImageSectionInnerDiv>
          </SeriesSection>
        ))}
      </SeriesWrapper>

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
              </ModalCaption>
            </ModalFigure>
            <ArrowForward onClick={() => imageSlide(true)} />
          </ModalDiv>
        </Modal>
      )}
    </Main>
  );
}
