import React from 'react';
import { ModalWrapper } from './style';
import { SecondaryButton } from '..';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onRequestClose,
    children
}) => {

  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={onRequestClose}>
        {children}
    </ModalWrapper>
  )
};

export default Modal;
