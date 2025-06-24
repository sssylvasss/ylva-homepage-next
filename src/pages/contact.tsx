import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import { PageContainer } from "../styles/globalStyledComponents";

const ContactWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 2rem 2rem 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 0 2rem 0;
  color: #000;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #fc4103;
  }
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
`;

const ContactInfo = styled.div`
  background: rgba(252, 65, 3, 0.03);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactText = styled.p`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  transition: all 0.2s ease;

  &:hover {
    background: #fc4103;
    color: white;
    border-color: #fc4103;
    transform: translateY(-2px);

    img {
      filter: brightness(0) invert(1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  max-width: 600px;
  margin: 1rem 0 2rem 0;
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
          <Title>Let&apos;s Connect</Title>
          <Description>
            I&apos;m always interested in new opportunities and collaborations.
            Feel free to reach out through any of the channels below.
          </Description>

          <ContactSection>
            <ContactInfo>
              <ContactText style={{ fontWeight: 600, marginBottom: "1rem" }}>
                Ylva Landoff Lindberg
              </ContactText>
              <ContactText>
                Frontend Developer & Creative Technologist
              </ContactText>
              <ContactText style={{ marginTop: "1rem" }}>
                +46 704 92 44 75
              </ContactText>
              <ContactText>mail@ylvalandofflindberg.com</ContactText>
            </ContactInfo>

            <div>
              <LinksContainer>
                <SocialLink
                  href="https://github.com/sssylvasss"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWrapper>
                    <Image
                      src="/assets/github_black.svg"
                      alt="GitHub"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </IconWrapper>
                  GitHub
                </SocialLink>

                <SocialLink
                  href="https://www.linkedin.com/in/ylva-landoff-lindberg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWrapper>
                    <Image
                      src="/assets/linkedin_black.svg"
                      alt="LinkedIn"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </IconWrapper>
                  LinkedIn
                </SocialLink>

                <SocialLink href="mailto:mail@ylvalandofflindberg.com">
                  <IconWrapper>
                    <Image
                      src="/assets/email_black.svg"
                      alt="Email"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </IconWrapper>
                  Email
                </SocialLink>
              </LinksContainer>
            </div>
          </ContactSection>
        </ContactWrapper>
      </PageContainer>
    </>
  );
};

export default Contact;
