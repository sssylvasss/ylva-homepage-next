import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
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

export const VideoImg = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const TableDiv = styled.div`
  @media (min-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

export const LaptopDiv = styled.div`
  display: none;
  @media (min-width: ${BREAKPOINTS.tablet}) {
    display: block;
    width: 90%;
  }
  @media (min-width: ${BREAKPOINTS.mobile}) {
    display: block;
    width: 100%;
  }
`;

// Card styles
export const TitleH2 = styled.h2`
  font-size: 16px;
  font-weight: 800;
  margin: 5px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 5px 20px 5px 0;
  }

  @media (min-width: ${BREAKPOINTS.desktop}) {
    color: ${COLORS.white};
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
    color: ${COLORS.white};
  }
`;

export const TextDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 0;
  max-width: 270px;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding-left: 0;
    max-width: 100%;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  @media (min-width: 820px) {
    display: none;
  }
`;

export const CardDivMain = styled.main`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 90%;
  margin-bottom: 15px;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    margin: 10px;
    width: auto;
    align-content: left;
    position: relative;
    &:hover ${TextDiv} {
      display: flex;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: ${COLORS.modalOverlay};
    }
  }
`;

export const CollageImage = styled.img`
  object-fit: cover;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);

  @media (min-width: ${BREAKPOINTS.tablet}) {
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

  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 100%;
    margin: 40px 5px 30px 5px;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 40px 20px 30px 0;
  }
`;

export const Main = styled.div`
  height: 100%;

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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
`;

export const ArrowBack = styled(ArrowBackIosNewOutlinedIcon)`
  @media (min-width: ${BREAKPOINTS.mobile}) {
    opacity: 1;
    color: ${COLORS.orange};
    cursor: pointer;
    font-size: 50px;
  }
  @media (min-width: ${BREAKPOINTS.tablet}) {
    padding: 40px 20px 40px 0;
  }
`;

export const ArrowForward = styled(ArrowForwardIosOutlinedIcon)`
  @media (min-width: ${BREAKPOINTS.mobile}) {
    opacity: 1;
    color: ${COLORS.orange};
    cursor: pointer;
    font-size: 50px;
  }
  @media (min-width: ${BREAKPOINTS.tablet}) {
    padding: 40px 0 40px 20px;
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
  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 90%;
  }
`;

export const InnerVideoWrapper = styled.div`
  margin-bottom: 40px;
`;
