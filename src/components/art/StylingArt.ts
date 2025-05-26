import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

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
  @media (min-width: 820px) {
    display: none;
  }
`;

export const LaptopDiv = styled.div`
  display: none;
  @media (min-width: 820px) {
    display: block;
    width: 90%;
  }
`;

// Card styles
export const TitleH2 = styled.h2`
  font-size: 16px;
  font-weight: 800;
  margin: 5px;

  @media (min-width: 991px) {
    color: #ffff;
  }
`;

export const TextP = styled.p`
  font-size: 14px;
  font-weight: 200;
  margin: 0 5px 5px 5px;
  padding: 0 10px 10px 0;
  @media (min-width: 991px) {
    color: #ffff;
  }
`;

export const TextDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  @media (min-width: 820px) {
    max-width: 270px;
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

  @media (min-width: 820px) {
    margin: 10px;
    width: auto;
    align-content: left;
    position: relative;
    &:hover ${TextDiv} {
      display: flex;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: rgba(000, 0, 0, 0.5);
    }
  }
`;

export const CollageImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

// ImageGallery styles
export const TitleH1 = styled.h1`
  font-size: 20px;
  font-weight: 800;
  margin: 40px 5px 30px 5px;
  padding: 5px 0 10px 0;
  border-bottom: 2px solid;
  width: 90%;
  @media (min-width: 820px) {
    width: 100%;
  }
`;

export const Main = styled.div`
  height: 100%;

  @media (min-width: 820px) {
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
  @media (min-width: 520px) {
    opacity: 1;
    color: #fc4103;
    cursor: pointer;
    font-size: 50px;
  }
  @media (min-width: 820px) {
    padding: 40px 20px 40px 0;
  }
`;

export const ArrowForward = styled(ArrowForwardIosOutlinedIcon)`
  @media (min-width: 520px) {
    opacity: 1;
    color: #fc4103;
    cursor: pointer;
    font-size: 50px;
  }
  @media (min-width: 820px) {
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
  @media (min-width: 820px) {
    width: 90%;
  }
`;

export const InnerVideoWrapper = styled.div`
  margin-bottom: 40px;
`;
