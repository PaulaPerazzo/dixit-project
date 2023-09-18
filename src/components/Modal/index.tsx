import React, { useState } from 'react';
import { ModalWrapper, ContainerButton } from './style';
import { SecondaryButton } from '..';
import { useRouter } from 'next/router';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onRequestClose,
}) => {

  const router = useRouter();

  const handleClick = () => {
    console.log('goes to story generation');
    router.push('/storiePage');
  }

  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={onRequestClose}>
        You want to create an image-based story?
        <ContainerButton>
          <SecondaryButton text='Yes' onClick={handleClick}/>
          <SecondaryButton text='No' onClick={onRequestClose}/>
        </ContainerButton>
    </ModalWrapper>
  )
};

export default Modal;

// aqui abaixo vai ter como funciona o modal:
// dentro do arquivo que você quiser usar o modal, vai preciar colcoar esse código aqui:

// const [openModal, setOpenModal] = useState(false);

//   const handleOpenModal = () => {
//     setOpenModal(true);
//   }

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   }

// e implementar assim:

{/* <Modal isOpen={openModal} onRequestClose={handleCloseModal} /> */}
