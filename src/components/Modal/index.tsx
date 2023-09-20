import React, { useState } from 'react';
import { ModalWrapper, ContainerButton } from './style';
import { SecondaryButton } from '..';
import { useRouter } from 'next/router';
import axios from 'axios';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onRequestClose,
}) => {

  const router = useRouter();

  const handleClick = async () => {
    let type = localStorage.getItem('type');
    let text = localStorage.getItem('prompt');

    if (type === null) {
      type = "Classic";
    }
    
    if (text === null) {
      text = "A dog in a airplane";
    }

    const formObject = {
      "type": type,
      "text": `${text} with no words present in the image`
    }


    console.log('goes to story generation');
    const response = await axios.post("/api/histories", formObject)
    localStorage.setItem('history', JSON.stringify(response));
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
