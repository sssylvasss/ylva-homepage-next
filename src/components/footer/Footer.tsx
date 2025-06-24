import React from "react";
import { useRouter } from "next/router";
import {
  Main,
  Wrapper,
  Nav,
  Icon,
  BottomTextWrapper,
  Text,
} from "./StyleFooter";

const Footer: React.FC = () => {
  const router = useRouter();
  const isDarkMode = router.pathname === "/code";

  return (
    <Main $isDark={isDarkMode}>
      <Wrapper>
        <div>
          <Text $isDark={isDarkMode}>Contact</Text>
          <Text $isDark={isDarkMode}>Ylva Landoff Lindberg</Text>
          <Text $isDark={isDarkMode}>+46 704 92 44 75</Text>
          <Text $isDark={isDarkMode}>mail@ylvalandofflindberg.com</Text>
        </div>
        <Nav>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sssylvasss"
          >
            <Icon
              src={
                isDarkMode
                  ? "/assets/github_white.svg"
                  : "/assets/github_black.svg"
              }
              alt="Github linked icon"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ylva-landoff-lindberg/"
          >
            <Icon
              src={
                isDarkMode
                  ? "/assets/linkedin_white.svg"
                  : "/assets/linkedin_black.svg"
              }
              alt="LinkedIn linked icon"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:mail@ylvalandofflindberg.com"
          >
            <Icon
              src={
                isDarkMode
                  ? "/assets/email_white.svg"
                  : "/assets/email_black.svg"
              }
              alt="Mail linked icon"
            />
          </a>
        </Nav>
      </Wrapper>
      <BottomTextWrapper $isDark={isDarkMode}>
        <Text $isDark={isDarkMode}>
          Website Developed by Ylva Landoff Lindberg
        </Text>
      </BottomTextWrapper>
    </Main>
  );
};

export default Footer;
