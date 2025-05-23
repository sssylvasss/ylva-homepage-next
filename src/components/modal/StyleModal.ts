import styled from "styled-components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalInnerDiv = styled.div`
  max-height: 90vh;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CloseIcon = styled(CloseOutlinedIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  cursor: pointer;
  font-size: 2rem !important;
  z-index: 1001;

  &:hover {
    opacity: 0.8;
  }
`;
