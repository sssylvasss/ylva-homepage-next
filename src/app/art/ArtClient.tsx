"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import type { Collage } from "../../lib/contentfulServer";
import { ImageCard, collageAlt } from "../../components/art/ImageCard";
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
  // Index into orderedCollages of the collage shown in the modal; null when closed.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const backRef = useRef<HTMLButtonElement>(null);
  const forwardRef = useRef<HTMLButtonElement>(null);

  const imageSeries = useMemo(() => groupBySerie(collages), [collages]);

  // Modal slides through the collages in the same order they are displayed.
  const orderedCollages = useMemo(
    () => imageSeries.flatMap((imageSerie) => imageSerie.collages),
    [imageSeries]
  );

  const activeCollage =
    activeIndex === null ? undefined : orderedCollages[activeIndex];
  const isOpen = activeCollage !== undefined;

  const openModal = (id: number) => {
    setActiveIndex(orderedCollages.findIndex((co) => co.collageId === id));
  };

  const closeModal = useCallback(() => setActiveIndex(null), []);

  // step: 1 for next, -1 for previous; wraps around at both ends.
  const imageSlide = useCallback(
    (step: 1 | -1) => {
      const total = orderedCollages.length;
      setActiveIndex((i) => (i === null ? i : (i + step + total) % total));
    },
    [orderedCollages.length]
  );

  // Left/right arrow keys change image while the modal is open. If an arrow button
  // has focus, focus moves to the one matching the key so the outline follows.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const next = e.key === "ArrowRight";
      imageSlide(next ? 1 : -1);
      const focused = document.activeElement;
      if (focused === backRef.current || focused === forwardRef.current) {
        (next ? forwardRef : backRef).current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, imageSlide]);

  // Swipe left/right on touch screens changes image.
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) > 50) imageSlide(deltaX < 0 ? 1 : -1);
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

      {activeCollage && (
        <Modal onClose={closeModal} label={collageAlt(activeCollage)}>
          <ArrowBack
            ref={backRef}
            type="button"
            aria-label="Previous image"
            onClick={() => imageSlide(-1)}
          >
            <PlayArrowRoundedIcon />
          </ArrowBack>
          <ModalFigure onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <ModalImage
              alt={collageAlt(activeCollage)}
              src={activeCollage.collageImage?.file?.url}
            />
            <ModalCaption>
              {[
                activeCollage.collageTitle,
                activeCollage.size && `${activeCollage.size}cm.`,
              ]
                .filter(Boolean)
                .join(", ")}
            </ModalCaption>
          </ModalFigure>
          <ArrowForward
            ref={forwardRef}
            type="button"
            aria-label="Next image"
            onClick={() => imageSlide(1)}
          >
            <PlayArrowRoundedIcon />
          </ArrowForward>
        </Modal>
      )}
    </Main>
  );
}
