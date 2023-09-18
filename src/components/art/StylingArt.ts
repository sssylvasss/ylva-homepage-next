import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ReactPlayer from "react-player/youtube";
// Only loads the YouTube player

//Card
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

  @media (min-width: 1200px) {
  }
`;

export const CollageImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

//ImageGallery

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

  @media (min-width: 1200px) {
  }
`;

export const ImageSectionDiv = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	margin: auto 0;
	flex-direction: column;

	@media (min-width: 820px) {
	  overflow-y: hidden;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 0 30px 30px 30px;
    ::-webkit-scrollbar {
      display: none;
    }

	@media (min-width: 1200px) {
		}
`;
export const ImageSectionInnerDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: auto 0;
  flex-direction: column;

  @media (min-width: 820px) {
    flex-direction: row;
    align-items: bottom;
    margin-bottom: 40px;
    width: auto;
    height: 400px;
  }

  @media (min-width: 1200px) {
  }
`;

//modal

export const ModalDiv = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 820px) {
    padding: 0;
  }
`;

export const ModalImage = styled.img`
  background: none;
  object-fit: contain;
  max-width: 85%;
  max-height: 90vh;
  @media (min-width: 820px) {
  }
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

//Video

export const VideoTextDiv = styled.div`
  width: 100%;
  @media (min-width: 820px) {
  }
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
  margin: 30px 0 60px 0;
`;

export const VideoImg = styled.img`
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const PlayerReact = styled(ReactPlayer)`
  left: 0;
  top: 0;
  position: absolute;
`;

export const VideoDiv = styled.div`
  position: relative;
  padding-top: 56.25%;
  background: black;
`;

export const TableDiv = styled.div`
  @media (min-width: 821px) {
    display: none;
  }
`;
export const LaptopDiv = styled.div`
  display: none;
  @media (min-width: 820px) {
    display: block;
  }
`;
