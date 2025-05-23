import React, { useState, useEffect, Fragment } from "react";
import { TextP, TitleH2, MainWrapper } from "../styles/globalStyledComponents";
import { useContentful } from "../useContentful";
import type { CV as CVType } from "../types/contentful";
import type { NextPage } from "next";

const CVPage: NextPage = () => {
  const [cv, setCv] = useState<CVType[]>([]);
  const { getCv } = useContentful();

  useEffect(() => {
    getCv().then((response) => {
      setCv(response);
    });
  }, [getCv]);

  return (
    <MainWrapper>
      <TextP>Contact:</TextP>
      <TextP>+46 704 92 44 75</TextP>
      <TextP>Stockholm, Sweden</TextP>

      <a href="mailto:mail@ylvalandofflindberg.com">
        mail@ylvalandofflindberg.com
      </a>

      {cv.map((text, index) => (
        <Fragment key={index}>
          <TitleH2>{text.publicCollections}</TitleH2>
          <TextP>{text.publicCollectionsText}</TextP>
          <TitleH2>{text.soloExhibitions}</TitleH2>
          <TextP>{text.soloExhibitionsText}</TextP>
          <TitleH2>{text.groupExhibitions}</TitleH2>
          <TextP>{text.groupExhibitionsText}</TextP>
          <TitleH2>{text.screeningsAndFilmFestivals}</TitleH2>
          <TextP>{text.screeningsAndFilmFestivalsText}</TextP>
          <TitleH2>{text.grants}</TitleH2>
          <TextP>{text.grantsText}</TextP>
          <TitleH2>{text.publications}</TitleH2>
          <TextP>{text.publicationsText}</TextP>
          <TitleH2>{text.educations}</TitleH2>
          <TextP>{text.educationsText}</TextP>
        </Fragment>
      ))}
    </MainWrapper>
  );
};

export default CVPage;
