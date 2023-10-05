import React, { useState, useEffect, Fragment } from "react";
import { TextP, TitleH2, MainWrapper } from "../styles/globalStyledComponents";
import { useContentful } from "../useContentful";

export const Cv = () => {
  const [cv, setCv] = useState([]);
  const { getCv } = useContentful();

  useEffect(() => {
    getCv().then((response: any) => {
      setCv(response);
      console.log("response", response)
    });
  }, []);

  return (
    <MainWrapper>
      <TextP>Contact:</TextP>
      <TextP>+46 704 92 44 75</TextP>

      <a href='mailto:mail@ylvalandofflindberg.com'>
        mail@ylvalandofflindberg.com
      </a>

      {cv?.map((text: any, i) => (
        <Fragment key={i}>
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

export default Cv;
