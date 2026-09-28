"use client";
import React, { useEffect, useRef } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { ModalDiv, ModalInnerDiv, CloseButton } from "./StyleModal";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  label: string;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose, label }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll and move focus into the modal; restore both on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, []);

  // Escape closes; Tab cycles through the modal's buttons only.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !modalRef.current) return;

      const buttons = modalRef.current.querySelectorAll<HTMLElement>("button");
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <ModalDiv
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      // Clicking the dark background closes the modal
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <CloseButton ref={closeRef} type="button" onClick={onClose} aria-label="Close">
        <CloseOutlinedIcon />
      </CloseButton>
      <ModalInnerDiv>{children}</ModalInnerDiv>
    </ModalDiv>
  );
};
