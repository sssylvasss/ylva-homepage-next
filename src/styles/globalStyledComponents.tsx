import styled, { css } from "styled-components";

// Titles use the header's light-only Roboto for a thinner bold (see layout.tsx)
export const thinBold = css`
  font-family: var(--font-roboto-light), sans-serif;
  font-weight: 700;
`;

// At least full screen height so the footer sits at the bottom on short pages
export const PageContainer = styled.div`
  width: 90%;
  max-width: 2000px;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

// Takes the space between header and footer; pages can stretch into it with flex: 1
export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  margin: 20px;
  padding-top: 85px; /* 65px header height + 20px extra space */
`;

export const GlobalText = styled.p`
  white-space: pre-wrap;
  line-height: 1;
  text-align: left;
`;

export const SectionTitle = styled.h2`
  ${thinBold}
  font-size: 20px;
  text-align: left;
  margin: 50px 0 20px 0;
`;

