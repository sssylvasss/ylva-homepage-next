"use client";

import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const ContactWrapper = styled.div`
  box-sizing: border-box; /* padding inside the width, so it doesn't overflow to the right */
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 2rem 2rem 2rem;
`;

// Same size as the section titles on the CV and video pages
const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 30px 0;
  padding: 5px 0 10px 0;
  border-bottom: 2px solid;
  color: var(--color-orange);
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-orange);
  max-width: 700px;
  margin: 0 0 30px 0;
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 3rem;
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
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-orange);
`;

const ContactName = styled(ContactText)`
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ContactPhone = styled(ContactText)`
  margin-top: 1rem;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  font-size: 16px;
  color: var(--color-orange);
  transition: all 0.2s ease;

  /* "svg" selector outranks MUI's default icon size */
  & svg {
    font-size: 20px;
  }

  &:hover {
    background: var(--color-orange);
    color: white;
    border-color: var(--color-orange);
    transform: translateY(-2px);
  }
`;

export default function Contact() {
  return (
    <ContactWrapper>
      <Title>Let&apos;s Connect</Title>
      <Description>
        I&apos;m always interested in new opportunities and collaborations. Feel
        free to reach out through any of the channels below.
      </Description>

      <ContactSection>
        <ContactInfo>
          <ContactName>Ylva Landoff Lindberg</ContactName>
          <ContactText>
            Artist, Entrepreneur, Frontend Developer & Creative Technologist
          </ContactText>
          <ContactPhone>+46 704 92 44 75</ContactPhone>
          <ContactText>mail@ylvalandofflindberg.com</ContactText>
        </ContactInfo>

        <div>
          <LinksContainer>
            <SocialLink
              href="https://github.com/sssylvasss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon aria-hidden />
              GitHub
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/in/ylva-landoff-lindberg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon aria-hidden />
              LinkedIn
            </SocialLink>

            <SocialLink href="mailto:mail@ylvalandofflindberg.com">
              <EmailOutlinedIcon aria-hidden />
              Email
            </SocialLink>
          </LinksContainer>
        </div>
      </ContactSection>
    </ContactWrapper>
  );
}
