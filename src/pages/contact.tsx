import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { PageContainer } from "../styles/globalStyledComponents";

const ContactWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  margin: 0 0 40px 0;
  color: #000;
`;

const ContactInfo = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactText = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1;
  color: #fc4103;
`;

const LinksContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledLink = styled.a`
  font-size: 1rem;
  line-height: 1;
  text-decoration: none;
  color: #fc4103;

  &:hover {
    color: #000;
  }
`;

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact - Ylva Landoff Lindberg</title>
        <meta
          name="description"
          content="Contact information for Ylva Landoff Lindberg"
        />
      </Head>

      <PageContainer>
        <ContactWrapper>
          <Title>Contact</Title>

          <ContactInfo>
            <ContactText>Ylva Landoff Lindberg</ContactText>
            <ContactText>+46 704 92 44 75</ContactText>
            <ContactText>mail@ylvalandofflindberg.com</ContactText>
          </ContactInfo>

          <LinksContainer>
            <StyledLink
              href="https://github.com/sssylvasss"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </StyledLink>

            <StyledLink
              href="https://www.linkedin.com/in/ylva-landoff-lindberg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </StyledLink>

            <StyledLink href="mailto:mail@ylvalandofflindberg.com">
              Email
            </StyledLink>
          </LinksContainer>
        </ContactWrapper>
      </PageContainer>
    </>
  );
};

export default Contact;
