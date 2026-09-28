import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  padding: 0;
  border: 0;
  background: none;
  color: #ffffff;
  cursor: pointer;
  z-index: 1001;

  /* "svg" selector outranks MUI's default icon size */
  & svg {
    font-size: 2rem;
  }

  &:hover {
    opacity: 0.8;
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 4px;
  }
`;
