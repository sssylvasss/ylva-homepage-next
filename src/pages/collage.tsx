import React, { useState, Fragment } from "react";
import Head from "next/head";
import { ImageCard } from "../components/art/ImageCard";
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
  LaptopDiv,
  TableDiv,
} from "../components/art/StylingArt";
import { Modal } from "../components/modal/Modal";
import type { NextPage, GetStaticProps } from "next";
import { fetchCollage } from "../lib/contentfulServer";

interface ImageSerie {
  serie: string;
  year: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  collages: any[];
}

interface CollageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  collages: any[];
}

const CollagePage: NextPage<CollageProps> = ({ collages }) => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activeCollage, setActiveCollage] = useState<any | undefined>();

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
      if (imageIndex === collages.length - 1) {
        setActiveCollage(collages[0]);
      } else {
        setActiveCollage(collages[imageIndex + 1]);
      }
    } else {
      if (imageIndex === 0) {
        setActiveCollage(collages[collages.length - 1]);
      } else {
        setActiveCollage(collages[imageIndex - 1]);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Art | Ylva </title>
        <meta
          name="description"
          content="Art and collages by Ylva Landoff Lindberg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                  {imageSerie.year && (
                    <>
                      , <span> </span>
                      {imageSerie.year}
                    </>
                  )}
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
          <Modal
            setShowModal={setShowModal}
            setActiveCollage={setActiveCollage}
          >
            <ModalDiv>
              <ArrowBack onClick={() => imageSlide(false)} />
              <ModalImage
                alt="collage"
                src={activeCollage?.collageImage?.file.url}
              />
              <ArrowForward onClick={() => imageSlide(true)} />
            </ModalDiv>
          </Modal>
        )}
      </Main>
    </>
  );
};

export default CollagePage;

export const getStaticProps: GetStaticProps<CollageProps> = async () => {
  const data = await fetchCollage();
  const sorted = data.sort((a, b) => a.collageId - b.collageId);
  return {
    props: {
      collages: sorted,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
