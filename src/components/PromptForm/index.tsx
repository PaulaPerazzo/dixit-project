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
// import { FaSpinner } from 'react-icons/fa';
import { Spinner } from './style'

type FormData = {
  promptCommand: string;
};

const PromptForm = () => {
    const [text, setText] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [selectedButton, setSelectedButton] = useState<null | number>(null);
    const buttons = ["Classic", "Medieval", "Science", "Cyberpunk", "Space", "Realistic"]
    const [isLoading, setIsLoading] = useState(false)

    const ButtonHighlighted = (props: any) => (
      <div
          style={{
              backgroundColor: "red",
              padding: 12,
              color: "black"
          }}
          {...props}
      >
          {props.children}
      </div>
  );

    const ButtonSelect = (props: any) => (
      <div
          style={{
              padding: 12,
              color: "white"
          }}
          {...props}
      >
          {props.children}
      </div>
  );
  
    const { register, handleSubmit } = useForm<FormData>();

    const handleOpenModal = () => {
        setOpenModal(true);
      }
      
      const handleCloseModal = () => {
        setOpenModal(false);
      }
            

    const handleFormSubmit: SubmitHandler<FormData> = async (formData : FormData) => {
      setIsLoading(true)
      const selectedValue = buttons[selectedButton || 0]
      
      const formObject = {
        "type": selectedValue,
        "text": `${text} with no words present in the image`
      }

      const config = {
        tmeout: 10000
      }
      
        const response = await axios.post('/api/images', formObject, config);
        localStorage.setItem("prompt", text);
        localStorage.setItem("type", selectedValue);
        localStorage.setItem('responseData', JSON.stringify(response.data));

        setOpenModal(true);
        setIsLoading(false)
        setSelectedButton(null)
    }
 
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} >
      <Input placeholder='Which card do you want to create? It can be a single word or a complete sentence.' {...register('promptCommand')} onChange={(e) => setText(e.target.value)}/>
      <Divider></Divider>
      <GridContainer>
      {
        buttons.map((label, index) => {
          const Wrapper = selectedButton === index ? ButtonHighlighted : ButtonSelect
          return (
            <>
            <Wrapper onClick={()=>setSelectedButton(index)}>
              {label}
            </Wrapper>
            </>
          )
        })
      }
      </GridContainer>
      {isLoading ? 
        <Spinner /> :  <Button type={"submit"} text={'Generate'}/>
      }
      <Modal isOpen={openModal} onRequestClose={handleCloseModal} />
    </form>
  )
}

export default PromptForm;