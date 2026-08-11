"use client";
import React from "react";
import type { Collage } from "../../lib/contentfulServer";
import { ModalDiv, ModalInnerDiv, CloseIcon } from "./StyleModal";

interface ModalProps {
  children: React.ReactNode;
  setShowModal: (show: boolean) => void;
  setActiveCollage: (collage: Collage | undefined) => void;
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
