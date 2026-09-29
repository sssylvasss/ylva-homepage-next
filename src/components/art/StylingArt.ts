import styled, { css } from "styled-components";
import Image from "next/image";
import ReactPlayer from "react-player";
import { thinBold } from "../../styles/globalStyledComponents";

// Theme constants
const BREAKPOINTS = {
  mobile: "520px",
  tablet: "820px",
  desktop: "991px",
} as const;

export const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: 100%;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const TitleH2 = styled.h2`
  ${thinBold}
  font-size: 14px;
  margin: 0;
`;

export const TextP = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 0;
`;

export const CardCaption = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  color: var(--color-black);
  margin: 5px 0 10px;
`;

export const CardDivMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--color-black);
    outline-offset: 4px;
  }
`;

// Edge to edge on mobile (reaching past the page margins, since the card is
// centered on the screen); same height for every image on larger screens
export const CardImage = styled(Image)`
  display: block;
  width: 100vw;
  height: auto;
  margin: 0 calc(50% - 50vw);

  @media (min-width: ${BREAKPOINTS.mobile}) {
    width: auto;
    max-width: 90vw;
    margin: 0;
    height: 240px;
  }

  @media (min-width: ${BREAKPOINTS.desktop}) {
    height: 320px;
  }
`;

// Series page styles
export const TitleH1 = styled.h1`
  ${thinBold}
  font-size: 18px;
  margin: 40px 20px 30px 0;
  padding: 5px 0 10px 0;
  border-bottom: 1px solid;
  width: 100%;
  color: var(--color-black);

  /* Lines up with the left edge of the images */
  @media (min-width: ${BREAKPOINTS.mobile}) {
    margin: 40px 0 30px 0;
  }
`;

export const SeriesYear = styled.span`
  font-size: 12px;
  font-weight: 300;
`;

export const SeriesText = styled.p`
  align-self: flex-start;
  max-width: 700px;
  margin: -10px 0 30px 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-black);

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: -10px 20px 30px 0;
  }
`;

export const Main = styled.div`
  height: 100%;
  margin-top: 85px; /* 65px header height + 20px extra spacing */

  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 100%;
  }
`;

export const ImageSectionInnerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (min-width: ${BREAKPOINTS.mobile}) {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;

    & > ${CardDivMain} {
      /* Card shrinks to the image width so captions wrap under the image */
      width: min-content;
      margin: 0;
    }
  }

  @media (min-width: ${BREAKPOINTS.desktop}) {
    gap: 24px;
  }
`;

export const SeriesWrapper = styled.div`
  width: 100%;

  @media (min-width: ${BREAKPOINTS.mobile}) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const SeriesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

// Modal styles
export const ModalFigure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;

  @media (min-width: ${BREAKPOINTS.desktop}) {
    max-width: none;
  }

  /* Fixed width so long captions wrap instead of reaching the screen edge.
     The bottom margin lifts image and caption above the arrows fixed at the bottom. */
  @media (orientation: portrait) {
    width: calc(100vw - 32px);
    max-width: none;
    margin-bottom: 100px;
  }
`;

// Leaves room for the caption below the image
export const ModalImage = styled.img.attrs({ loading: "lazy" })`
  max-width: 100%;
  max-height: calc(100vh - 100px);
  object-fit: contain;
  display: block;
  height: auto;
  margin: 0 auto;

  /* Keep clear of the arrows at the sides */
  @media (min-width: ${BREAKPOINTS.desktop}) {
    max-width: calc(100vw - 240px);
  }

  /* Same width for every image; tall images fit inside the box */
  @media (orientation: portrait) {
    width: 100%;
    max-height: calc(100dvh - 280px);
  }
`;

export const ModalCaption = styled.div`
  color: var(--color-white);
  text-align: left;
  margin-top: 12px;
  line-height: 1.4;
  width: 100%;

  @media (orientation: portrait) {
    box-sizing: border-box;
    padding: 0 16px;
    text-align: center;
    font-size: 14px;
  }
`;

// Arrow buttons with a filled triangle icon (mirrored for "back"). They sit at the sides;
// in portrait they are fixed near the bottom so they stay in place when the image size changes.
const arrowStyles = css`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  padding: 0;
  border: 0;
  background: none;
  color: var(--color-white);
  cursor: pointer;
  z-index: 1001;

  /* "svg" selector outranks MUI's default icon size */
  & svg {
    font-size: 64px;

    @media (min-width: ${BREAKPOINTS.tablet}) {
      font-size: 80px;
    }
    @media (min-width: ${BREAKPOINTS.desktop}) {
      font-size: 88px;
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-white);
    outline-offset: 4px;
  }

  @media (orientation: portrait) {
    top: auto;
    bottom: calc(60px + env(safe-area-inset-bottom, 0px));
    transform: none;
  }
`;

export const ArrowBack = styled.button`
  ${arrowStyles}
  left: 16px;

  & svg {
    transform: scaleX(-1);
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    left: 24px;
  }

  @media (orientation: portrait) {
    left: calc(50% - 88px);
  }
`;

export const ArrowForward = styled.button`
  ${arrowStyles}
  right: 16px;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    right: 24px;
  }

  @media (orientation: portrait) {
    right: calc(50% - 88px);
  }
`;

// Video styles
export const VideoTextDiv = styled.div`
  width: 100%;
`;

export const MainVideoDiv = styled.div`
  width: 100%;
  margin-top: 85px; /* 65px header height + 20px extra spacing */
  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 90%;
  }
`;

export const InnerVideoWrapper = styled.div`
  margin-bottom: 40px;
`;
