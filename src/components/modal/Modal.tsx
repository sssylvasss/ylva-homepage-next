import React from "react";
import { ModalDiv, ModalInnerDiv, CloseIcon } from "./StyleModal";

interface ModalProps {
  children: React.ReactNode;
  setShowModal: (show: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setActiveCollage: (collage: any | undefined) => void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  setShowModal,
  setActiveCollage,
}) => {
  const onClose = () => {
    setShowModal(false);
    setActiveCollage(undefined);
  };

  return (
    <ModalDiv>
      <CloseIcon onClick={onClose} aria-label="Close modal" />
      <ModalInnerDiv>{children ?? null}</ModalInnerDiv>
    </ModalDiv>
  );
};

export default Modal;
