/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  GlobalText,
  PageTitle,
  ContentWrapper,
} from "../styles/globalStyledComponents";
import type { NextPage } from "next";

const SapaSistersPage: NextPage = () => {
  return (
    <ContentWrapper>
      <PageTitle>SAPA SISTERS</PageTitle>
      <GlobalText>
        Sapa Sisters is a female owned trekking company in Sapa, Vietnam. The
        company is owned and operated by Black Hmong women. I have been working
        with them since 2018 and I am currently helping them with their website
        and social media.
      </GlobalText>
      <GlobalText>
        The company was founded in 2009 by Radek Stypczynski and Lang Yan with
        the goal of creating a sustainable business model that would help the
        local community. The company has grown from 4 guides to over 20 guides
        and has helped many women become financially independent.
      </GlobalText>
      <GlobalText>
        The company offers trekking tours in the Sapa region, homestays with
        local families, and cooking classes. The guides are all local Black
        Hmong women who speak English and have extensive knowledge of the area.
      </GlobalText>
    </ContentWrapper>
  );
};

export default SapaSistersPage;
