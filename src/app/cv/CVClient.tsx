"use client";

import React, { Fragment } from "react";
import type { Cv } from "../../lib/contentfulServer";
import {
  GlobalText,
  SectionTitle,
  ContentWrapper,
} from "../../styles/globalStyledComponents";

interface CVClientProps {
  cv: Cv[];
}

export default function CVClient({ cv }: CVClientProps) {
  return (
    <ContentWrapper>
      <GlobalText>Contact:</GlobalText>
      <GlobalText>+46 704 92 44 75</GlobalText>
      <GlobalText>Stockholm, Sweden</GlobalText>

      <a href="mailto:mail@ylvalandofflindberg.com">
        mail@ylvalandofflindberg.com
      </a>

      {cv.map((text, index) => (
        <Fragment key={index}>
          <SectionTitle>{text.publicCollections}</SectionTitle>
          <GlobalText>{text.publicCollectionsText}</GlobalText>
          <SectionTitle>{text.soloExhibitions}</SectionTitle>
          <GlobalText>{text.soloExhibitionsText}</GlobalText>
          <SectionTitle>{text.groupExhibitions}</SectionTitle>
          <GlobalText>{text.groupExhibitionsText}</GlobalText>
          <SectionTitle>{text.screeningsAndFilmFestivals}</SectionTitle>
          <GlobalText>{text.screeningsAndFilmFestivalsText}</GlobalText>
          <SectionTitle>{text.grants}</SectionTitle>
          <GlobalText>{text.grantsText}</GlobalText>
          <SectionTitle>{text.publications}</SectionTitle>
          <GlobalText>{text.publicationsText}</GlobalText>
          <SectionTitle>{text.educations}</SectionTitle>
          <GlobalText>{text.educationsText}</GlobalText>
        </Fragment>
      ))}
    </ContentWrapper>
  );
}
