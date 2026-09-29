"use client";

import styled from "styled-components";
import {
  ContentWrapper,
  thinBold,
} from "../../styles/globalStyledComponents";

// <main> shrinks to its content inside the centered PageContainer, so the short
// contact text would be centered. Full width keeps it left-aligned like the CV page.
const ContactWrapper = styled(ContentWrapper)`
  width: calc(90vw - 40px);
`;

const ContactText = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-black);
`;

const ContactName = styled(ContactText)`
  ${thinBold}
  margin-bottom: 0.5rem;
`;

const Details = styled.div`
  margin-top: 1.5rem;
`;

const LinksList = styled.ul`
  list-style: none;
  margin: 1.5rem 0 0 0;
  padding: 0;
  display: flex;
  gap: 1.5rem;
`;

const UnderlinedLink = styled.a`
  font-size: 16px;
  color: var(--color-black);
  text-decoration: underline;
  text-underline-offset: 4px;
`;

export default function Contact() {
  return (
    <ContactWrapper>
      <ContactName>Ylva Landoff Lindberg</ContactName>
      <ContactText>
        Artist, Entrepreneur, Frontend Developer & Creative Technologist
      </ContactText>

      <Details>
        <ContactText>+46 704 92 44 75</ContactText>
        <ContactText>
          <UnderlinedLink href="mailto:mail@ylvalandofflindberg.com">
            mail@ylvalandofflindberg.com
          </UnderlinedLink>
        </ContactText>
      </Details>

      <LinksList>
        <li>
          <UnderlinedLink
            href="https://github.com/sssylvasss"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </UnderlinedLink>
        </li>
        <li>
          <UnderlinedLink
            href="https://www.linkedin.com/in/ylva-landoff-lindberg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </UnderlinedLink>
        </li>
      </LinksList>
    </ContactWrapper>
  );
}
