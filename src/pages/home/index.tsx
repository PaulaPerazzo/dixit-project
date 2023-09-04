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
      <Button text='main button' onClick={handleOpenModal} />
      <SecondaryButton text='yes / no' onClick={handleClick} />
      <Input placeholder='placeholder example' />

      <Modal isOpen={openModal} onRequestClose={handleCloseModal} />

    </>
  )
}

export default Home;
