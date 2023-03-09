import React from "react";
import { ModalDiv, ModalInnerDiv } from "./StyleModal";
import { CloseIcon } from "./StyleModal";

export const Modal = (props) => {
  const onClose = () => {
    props.setShowModal(false);
    props.setActiveCollage(null);
  };

  return (
    <ModalDiv>
      <CloseIcon onClick={() => onClose()}></CloseIcon>
      <ModalInnerDiv>{props.children ?? <>null</>}</ModalInnerDiv>
    </ModalDiv>
  );
};
