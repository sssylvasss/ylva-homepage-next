import React, { useState, useEffect, Fragment, ReactNode } from "react";
import { useContentful } from "../useContentful";
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


export interface ICollage{
  collageId: number,
  collageTitle: string,
  collages: ICollage[],
  collageImage: {
    description: string,
    file: any,
  };
  size: string | null,
  serie: string | null,
  year: string | null,
  collage: {
  collageImage: {
      description
      : string,
      file: any,
      title: string,
    },

    image: {
      fileds: any,
      metadata: any,
      sys: any,
      serie: string,
      year: string,
    }

  },
}

export const Collage = () => {
  const [collages, setCollages] = useState<ICollage[]>([]);
  const { getCollage } = useContentful();
  const [showModal, setShowModal] = useState(false);
  const [activeCollage, setActiveCollage] = useState<null | ICollage>();

  useEffect(() => {
    getCollage().then((response: []) => {
      setCollages(response?.sort((a: ICollage, b: ICollage) => a.collageId - b.collageId));
    });
  }, [getCollage]);



  // acc= acumilera(ansamla). reduce kan ha upp till 4 parametrar, index är nr 3
  const newImageArray = collages
    ?.sort((a: { collageId: number; }, b: { collageId: number; }) => b.collageId - a.collageId)
    .reduce((acc: { serie; collages?; }[], curr: { serie; year; }) => {
      if (acc.some(({ serie }) => serie === curr.serie)) {
        acc.map((accElement: { serie; collages; }) => {
          if (accElement.serie === curr.serie) {
            accElement.collages.push(curr);
          }
        });
        return acc;
      } else {
        const obj = {
          serie: curr.serie ? curr.serie : curr.year,
          year: curr.serie ? curr.year : null,
          collages: [curr],
        };
        return [...acc, obj];
      }
      // initial value nedan
    }, []);

  const openModal = (id: number) => {
    const activeCollageIndex = collages.findIndex((co: { collageId: any; }) => co.collageId === id);
    setActiveCollage(collages[activeCollageIndex]);
    setShowModal(true);
  };

  const imageSlide = (next: boolean) => {
    const imageIndex = collages.findIndex(
      (co: ICollage) => co.collageId === activeCollage.collageId
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
    <Main>
      <LaptopDiv>
        <ImageList variant='masonry' cols={3} gap={8}>
          {collages?.map((collage:ICollage , index: number) => (
       
            <ImageListItem key={index}>
              <ImageCard key={index} collage={collage} openModal={openModal} />
           
            </ImageListItem>
         
          ))}
        </ImageList>
      </LaptopDiv>
      <TableDiv>
        {newImageArray?.map((imageSerie: ICollage, index: number) => (
          <Fragment key={index}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TitleH1>
                {imageSerie.serie}, <span> </span>
                {imageSerie.year}
              </TitleH1>
            </div>
           
            <ImageSectionDiv>
              <ImageSectionInnerDiv>
                {imageSerie.collages?.map((collage:ICollage, index: number) => (
                  <ImageCard
                    key={index}
                    collage={collage}
                    openModal={openModal}
                  />
                ))}
              </ImageSectionInnerDiv>
            </ImageSectionDiv>
          </Fragment>
        ))}
      </TableDiv>

      {showModal ? (
        <Modal setShowModal={setShowModal} setActiveCollage={setActiveCollage}>
          <ModalDiv>
            <ArrowBack onClick={() => imageSlide(false)} />

            <ModalImage
              alt='collage'
              src={activeCollage?.collageImage?.file.url}
            />

            <ArrowForward onClick={() => imageSlide(true)} />
          </ModalDiv>
        </Modal>
      ) : (
        <></>
      )}
    </Main>
  );
};

export default Collage