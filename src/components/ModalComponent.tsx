import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalHeader,
  ModalHeaderProps,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import React from "react";

type ModalComponentProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  modalProps?: Omit<ModalProps, "children" | "isOpen" | "onClose">;
  modalHeaderProps?: ModalHeaderProps;
  modalContentProps?: ModalContentProps;
  footer?: React.ReactNode;
};

export const ModalComponent = ({
  isOpen,
  onClose,
  title,
  children,
  modalProps,
  modalHeaderProps,
  footer,
  modalContentProps,
}: ModalComponentProps) => {
  return (
    <Modal {...modalProps} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent {...modalContentProps}>
        {title && <ModalHeader {...modalHeaderProps}>{title}</ModalHeader>}
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
};
