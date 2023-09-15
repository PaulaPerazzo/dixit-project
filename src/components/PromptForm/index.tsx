import { FormEvent } from 'react'
import Input from '../Input'
import { GridContainer, Divider } from '@/styles/main'
import Button from '../Button'
import SecondaryButton from '../SecondaryButton'
import TerciaryButton from '../TerciaryButton'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react';

type FormData = {
  promptCommand: string;
};

const PromptForm = () => {
    const [text, setText] = useState("");

    const { register, handleSubmit } = useForm<FormData>();

    const handleFormSubmit: SubmitHandler<FormData> = async (formData : FormData) => {
      const formObject = {
        "type": "CLASSIC",
        "text": `${text} with no words present in the image`
      }
        const response = await axios.post('http://localhost:3000/api/images', formObject)
        localStorage.setItem('responseData', JSON.stringify(response.data));
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
    </form>
  )
}

export default PromptForm;