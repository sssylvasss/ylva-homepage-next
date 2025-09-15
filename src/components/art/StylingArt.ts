import styled from "styled-components";
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
  white: "#ffff",
  orange: "#fc4103",
  modalOverlay: "rgba(0, 0, 0, 0.5)",
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

export const VideoDiv = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
`;

export const PlayerReact = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const VideoImg = styled.img.attrs({ loading: "lazy" })`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const TableDiv = styled.div`
  display: block;

  @media (min-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

export const LaptopDiv = styled.div`
  display: none;

  @media (min-width: ${BREAKPOINTS.mobile}) {
    display: block;
    width: 90%;
  }
`;

export const TitleH2 = styled.h2`
  font-size: 16px;
  font-weight: 800;
  margin: 5px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 5px 20px 5px 0;
  }

  @media (min-width: ${BREAKPOINTS.desktop}) {
    color: ${COLORS.orange};
  }
`;

export const TextP = styled.p`
  font-size: 14px;
  font-weight: 200;
  margin: 0 5px 5px 5px;
  padding: 0 10px 10px 0;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 0 20px 5px 0;
  }

  @media (min-width: ${BREAKPOINTS.desktop}) {
    color: ${COLORS.orange};
  }
`;

export const TextDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 0;
  max-width: 270px;
  color: ${COLORS.orange};

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding-left: 0;
    max-width: 100%;
  }
`;

export const TextDiv = styled.div`
  display: none;
  flex-direction: column;
  text-align: left;

  @media (min-width: ${BREAKPOINTS.desktop}) {
    display: block;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    margin-top: 0;
    transform: translateY(-8px);
    transition: max-height 0.3s ease, opacity 0.3s ease, margin-top 0.3s ease,
      transform 0.3s ease;
  }
`;

export const CardDivMain = styled.main`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 90%;
  margin-bottom: 15px;
  position: relative;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    margin: 10px;
    width: auto;
    align-content: left;
  }

  @media (min-width: ${BREAKPOINTS.desktop}) {
    &:hover ${TextDiv} {
      max-height: 200px;
      opacity: 1;
      margin-top: 8px;
      transform: translateY(0);
    }
  }
`;

export const CollageImage = styled.img.attrs({ loading: "lazy" })`
  object-fit: cover;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);

  @media (min-width: ${BREAKPOINTS.mobile}) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

// ImageGallery styles
export const TitleH1 = styled.h1`
  font-size: 20px;
  font-weight: 800;
  margin: 40px 20px 30px 20px;
  padding: 5px 0 10px 0;
  border-bottom: 2px solid;
  width: calc(100% - 40px);
  color: ${COLORS.orange};

  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 100%;
    margin: 40px 5px 30px 5px;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 40px 20px 30px 0;
    width: 100%;
  }
`;

export const Main = styled.div`
  height: 100%;
  margin-top: 85px; /* 65px header height + 20px extra spacing */

  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 100%;
  }
`;

export const ImageSectionDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;

export const ImageSectionInnerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
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
