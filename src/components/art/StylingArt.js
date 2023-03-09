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
  @media (min-width: 820px) {
    object-fit: cover;
    width: 250px;
  }
  @media (min-width: 991px) {
    width: 300px;
  }
  @media (min-width: 1200px) {
    width: 400px;
  }
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
  justify-content: space-between;
  width: 100%;
  @media (min-width: 820px) {
    width: 100vw;
  }
`;

export const ArrowButtonLeft = styled.button`
  background: none;
  border: none;
  width: 5%;
  height: 70%;
  @media (min-width: 820px) {
    width: 10%;
  }
`;
export const ArrowButtonRight = styled.button`
  background: none;
  border: none;
  width: 5%;
  height: 70%;
  @media (min-width: 820px) {
    width: 10%;
  }
`;

export const ModalImage = styled.img`
  max-height: 100%;
  background: none;
  max-width: 80%;
  object-fit: contain;
  @media (min-width: 820px) {
    height: 100vh;
    width: 100vw;
  }
`;
export const ArrowBack = styled(ArrowBackIosNewOutlinedIcon)`
  opacity: 0;
  @media (min-width: 520px) {
    opacity: 1;
    color: #fc4103;
    cursor: pointer;
  }
`;

export const ArrowForward = styled(ArrowForwardIosOutlinedIcon)`
  opacity: 0;
  @media (min-width: 520px) {
    opacity: 1;
    color: #fc4103;
    cursor: pointer;
  }
`;

//Video
export const VideoTextP = styled.p`
  white-space: pre-wrap;
  line-height: 1, 5;
  text-align: left;
`;

export const VideoTitleH2 = styled.h2`
  font-size: 20px;
  font-weight: 800;
  margin: 20px 0 20px 0;
`;

export const VideoTextDiv = styled.div`
  width: 100%;
  @media (min-width: 820px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
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
  @media (min-width: 1200px) {
  }
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
`;

export const TableDiv = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;
export const LaptopDiv = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`;
