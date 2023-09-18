import React from "react";
import {
  Main,
  Wrapper,
  Nav,
  Icon,
  BottomTextWrapper,
  Text,
} from "./StyleFooter";

export const Footer = () => {
  return (
    <Main>
      <Wrapper>
        <div>
          <Text>Contact</Text>
          <Text>Ylva Landoff Lindberg</Text>
          <Text>+46 704 92 44 75</Text>
          <Text>mail@ylvalandofflindberg.com</Text>
        </div>
        <Nav>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/sssylvasss'
          >
            <Icon src='../assets/github_black.svg' alt='Github linked icon' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/ylva-landoff-lindberg/'
          >
            <Icon
              src='../assets/linkedin_black.svg'
              alt='Linkdin linked icon'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:mail@ylvalandofflindberg.com'
          >
            <Icon src='../assets/email_black.svg' alt='Mail linked icon' />
          </a>
        </Nav>
      </Wrapper>
      <BottomTextWrapper>
        <Text> Website Developed by Ylva Landoff Lindberg</Text>
      </BottomTextWrapper>
    </Main>
  );
};
