import React, { ReactNode } from "react";

import { ModalDiv, ModalInnerDiv } from "./StyleModal";
import { CloseIcon } from "./StyleModal";

interface ModalProps{
  children: ReactNode,
  setShowModal: Function,
  setActiveCollage: Function,
}

export const Modal: React.FC<ModalProps> = ({children, setShowModal, setActiveCollage }) => {
  const onClose = () => {
    setShowModal(false);
    setActiveCollage(null);
  };

  return (
    <ModalDiv>
      <CloseIcon onClick={() => onClose()}></CloseIcon>
      <ModalInnerDiv>{children ?? <>null</>}</ModalInnerDiv>
    </ModalDiv>
  );
};
