import styled from "styled-components";
import CloseImg from "@mui/icons-material/Close";

export const ModalDiv = styled.div`
  display: none;
  @media (min-width: 820px) {
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(110, 110, 110, 0.8);
    display: flex;
    align-items: center;
    margin: auto 0;
    justify-content: center;
  }
`;

export const ModalInnerDiv = styled.div`
  max-height: 90vh;
  margin: auto 0;
`;

export const CloseIcon = styled(CloseImg)`
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  margin: 30px;
  cursor: pointer;
  font-size: 50px;
  color: #4b4a4a;
  border: 3px solid #636363;
  border-radius: 50%;
`;
