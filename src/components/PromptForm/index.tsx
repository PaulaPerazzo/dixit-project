import { FormEvent } from 'react'
import Input from '../Input'
import { GridContainer, Divider } from '@/styles/main'
import Button from '../Button'
import SecondaryButton from '../SecondaryButton'
import TerciaryButton from '../TerciaryButton'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react';
import { Modal } from '..'

type FormData = {
  promptCommand: string;
};

const PromptForm = () => {
    const [text, setText] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const { register, handleSubmit } = useForm<FormData>();

    const handleOpenModal = () => {
        setOpenModal(true);
      }
      
      const handleCloseModal = () => {
        setOpenModal(false);
      }
            

    const handleFormSubmit: SubmitHandler<FormData> = async (formData : FormData) => {
      const formObject = {
        "type": "CLASSIC",
        "text": `${text} with no words present in the image`
      }

        const response = await axios.post('http://localhost:3000/api/images', formObject)
        localStorage.setItem('responseData', JSON.stringify(response.data.url));

        setOpenModal(true);
    }
 
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} >
      <Input placeholder='Which card do you want to create? It can be a single word or a complete sentence.' {...register('promptCommand')} onChange={(e) => setText(e.target.value)}/>
      <Divider></Divider>
      <GridContainer>
        <TerciaryButton text={"Classic"}/>
        <TerciaryButton text={"Medieval"}/>
        <TerciaryButton text={"Science"}/>
        <TerciaryButton text={"Cyberpunk"}/>
        <TerciaryButton text={"Space"}/>
        <TerciaryButton text={"Realistic"}/>
      </GridContainer>

      <Button type={"submit"} text={'Generate'}/>
      < Modal isOpen={openModal} onRequestClose={handleCloseModal} />
    </form>
  )
}

export default PromptForm;