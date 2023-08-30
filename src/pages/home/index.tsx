import Input from '@/components/Input'
import { Button, SecondaryButton, Modal } from '@/components'
import React, { useState } from 'react';

function Home() {

  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    console.log('button clicked!');
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <>
      <div>HOME</div>
      <Button text='main button' onClick={handleClick} />
      <SecondaryButton text='yes / no' onClick={handleClick} />
      <Input placeholder='placeholder example' />


      <Modal isOpen={!openModal} onRequestClose={handleCloseModal} >
        You want to create an image-based story?
        <SecondaryButton text='Yes'/>
        <SecondaryButton text='No'/>
      </Modal>

    </>
  )
}

export default Home;
