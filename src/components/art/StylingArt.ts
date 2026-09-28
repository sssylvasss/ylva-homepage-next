import styled from "styled-components";
import Image from "next/image";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ReactPlayer from "react-player";

// Theme constants
const BREAKPOINTS = {
  mobile: "520px",
  tablet: "820px",
  desktop: "991px",
} as const;

const COLORS = {
  orange: "#fc4103",
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
  font-size: 16px;
  font-weight: 800;
  margin: 0;
`;

export const TextP = styled.p`
  font-size: 14px;
  font-weight: 200;
  margin: 0;
  white-space: nowrap;
`;

export const CardCaption = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  color: ${COLORS.orange};
  margin: 5px 0 10px;
`;

export const CardDivMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 15px;
  cursor: pointer;
`;

// Full width on mobile; same height for every image on larger screens
export const CardImage = styled(Image)`
  display: block;
  width: 100%;
  height: auto;

  @media (min-width: ${BREAKPOINTS.mobile}) {
    width: auto;
    max-width: 90vw;
    height: 240px;
  }

  @media (min-width: ${BREAKPOINTS.desktop}) {
    height: 320px;
  }
`;

// Series page styles
export const TitleH1 = styled.h1`
  font-size: 20px;
  font-weight: 800;
  margin: 40px 20px 30px 0;
  padding: 5px 0 10px 0;
  border-bottom: 2px solid;
  width: 100%;
  color: ${COLORS.orange};

  /* Lines up with the left edge of the images */
  @media (min-width: ${BREAKPOINTS.mobile}) {
    margin: 40px 0 30px 0;
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
export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (orientation: portrait) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    justify-items: center;
    align-items: center;
    row-gap: 8px;
    column-gap: 32px;
  }
`;

export const ModalFigure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;

  @media (orientation: portrait) {
    grid-column: 1 / span 2;
    grid-row: 1;
    justify-self: center;
  }
`;

export const ModalImage = styled.img.attrs({ loading: "lazy" })`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  display: block;
  height: auto;
  margin: 0 auto;

  @media (min-width: ${BREAKPOINTS.desktop}) {
    max-height: 80vh;
  }

  @media (orientation: portrait) {
    grid-column: 1 / span 2;
    grid-row: 1;
  }
`;

export const ModalCaption = styled.div`
  display: none;
  color: ${COLORS.orange};
  text-align: left;
  margin-top: 12px;
  line-height: 1.4;
  width: 100%;

  @media (min-width: ${BREAKPOINTS.desktop}) {
    display: block;
  }
`;

export const ArrowBack = styled(ArrowBackIosNewOutlinedIcon)`
  position: fixed;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: ${COLORS.orange};
  cursor: pointer;
  font-size: 50px;
  z-index: 1001;

  @media (orientation: portrait) {
    position: static;
    top: auto;
    left: auto;
    transform: none;
    grid-row: 2;
    grid-column: 1;
    justify-self: end;
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    left: 24px;
    font-size: 65px;
  }
  @media (min-width: ${BREAKPOINTS.desktop}) {
    font-size: 72px;
  }
`;

export const ArrowForward = styled(ArrowForwardIosOutlinedIcon)`
  position: fixed;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  color: ${COLORS.orange};
  cursor: pointer;
  font-size: 50px;
  z-index: 1001;

  @media (orientation: portrait) {
    position: static;
    top: auto;
    right: auto;
    transform: none;
    grid-row: 2;
    grid-column: 2;
    justify-self: start;
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    right: 24px;
    font-size: 65px;
  }
  @media (min-width: ${BREAKPOINTS.desktop}) {
    font-size: 72px;
  }
`;

// Video styles
export const VideoTextDiv = styled.div`
  width: 100%;
`;

export const MainVideoDiv = styled.div`
  width: 100%;
  display: block;
  flex-direction: column;
  justify-content: center;
  margin-top: 85px; /* 65px header height + 20px extra spacing */
  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 90%;
  }
`;

export const InnerVideoWrapper = styled.div`
  margin-bottom: 40px;
`;
