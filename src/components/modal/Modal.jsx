import React from "react";

import { ModalDiv, ModalInnerDiv } from "./StyleModal";
import { CloseIcon } from "./StyleModal";

export const Modal = ({children, setShowModal, setActiveCollage }) => {
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
