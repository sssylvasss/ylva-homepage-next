import styled from "styled-components";
import { thinBold } from "../../styles/globalStyledComponents";

// <main> shrinks to its content inside the centered PageContainer, so the width is set here
export const CodeContainer = styled.div`
  width: 90vw;
  max-width: 2000px;
  padding: 85px 0 40px 0; /* 65px header height + 20px extra space */
`;

// One project per row on phones, two on tablets, three on laptops
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 24px;
  }

  @media (min-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Project = styled.article`
  display: flex;
  flex-direction: column;
  color: var(--color-black);
`;

// Screenshot with a hairline border so white screenshots don't melt into the page
export const ProjectImage = styled.a`
  display: block;
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);

  img {
    object-fit: cover;
    object-position: top;
  }
`;

export const ProjectTitle = styled.h2`
  ${thinBold}
  font-size: 14px;
  margin: 12px 0 6px 0;
`;

export const ProjectDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;

export const Technologies = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  margin: 8px 0 0 0;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 10px;

  a {
    font-size: 14px;
    color: var(--color-black);
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
