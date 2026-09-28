"use client";

import { useState, useMemo } from "react";
import type { Collage } from "../../lib/contentfulServer";
import { ImageCard } from "../../components/art/ImageCard";
import {
  Main,
  SeriesWrapper,
  SeriesSection,
  TitleH1,
  SeriesText,
  SeriesYear,
  ImageSectionInnerDiv,
  ModalImage,
  ArrowForward,
  ArrowBack,
  ModalFigure,
  ModalCaption,
} from "../../components/art/StylingArt";
import { Modal } from "../../components/modal/Modal";

interface ImageSerie {
  serie: string;
  year: string | null;
  text?: string;
  collages: Collage[];
}

interface ArtClientProps {
  collages: Collage[];
}

// Text shown under a serie title. Keys are serie names in lowercase.
const SERIE_TEXTS: Record<string, string> = {
  "den flitige bävern och papperssvanen":
    "Permanent public art installation for the youth psychiatric ward at Umeå University Hospital. Commissioned by Region Västerbotten through public procurement. The project ran from 2017 to 2022, and the work was installed in spring 2022.",
  "en sjöglimt":
    "Permanent outdoor installation at Dynamiten, an LSS residence in Botkyrka. Commissioned by Botkyrka kultur- och fritidsnämnd through public procurement, 2014.",
};

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
        serie: key,
        year: collage.serie ? collage.year || null : null,
        text: SERIE_TEXTS[key.trim().toLowerCase()],
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
          <SeriesSection key={imageSerie.serie}>
            <TitleH1>
              {imageSerie.serie}
              {imageSerie.year && <SeriesYear>, {imageSerie.year}</SeriesYear>}
            </TitleH1>
            {imageSerie.text && <SeriesText>{imageSerie.text}</SeriesText>}
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
          <ArrowBack onClick={() => imageSlide(false)} />
          <ModalFigure>
            <ModalImage
              alt={activeCollage?.collageTitle}
              src={activeCollage?.collageImage?.file?.url}
            />
            <ModalCaption>
              {activeCollage?.collageTitle}
              {activeCollage?.size && `, ${activeCollage.size}cm.`}
            </ModalCaption>
          </ModalFigure>
          <ArrowForward onClick={() => imageSlide(true)} />
        </Modal>
      )}
    </Main>
  );
}
