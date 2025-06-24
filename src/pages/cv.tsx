import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import {
  GlobalText,
  SectionTitle,
  ContentWrapper,
} from "../styles/globalStyledComponents";
import { useContentful } from "../useContentful";
import type { NextPage } from "next";

const CVPage: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cv, setCv] = useState<any[]>([]);
  const { getCv } = useContentful();

  useEffect(() => {
    getCv().then((response) => {
      setCv(response);
    });
  }, [getCv]);

  return (
    <>
      <Head>
        <title>CV | sssylvasss</title>
        <meta
          name="description"
          content="Professional background and experience of Ylva Landoff Lindberg"
        />
      </Head>
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
    </>
  );
};

export default CVPage;
