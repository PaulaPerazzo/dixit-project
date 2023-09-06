import { FormEvent } from 'react'
import Input from '../Input'
import { GridContainer, Divider } from '@/styles/main'
import Button from '../Button'
import SecondaryButton from '../SecondaryButton'
import TerciaryButton from '../TerciaryButton'
import { useForm } from 'react-hook-form'
 

const PromptForm = () => {

    const { register, handleSubmit } = useForm();

    const handleFormSubmit = (formData : any) => {
        console.log(formData)
    }

//   async function onSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()
   
//     const formData = new FormData(event.currentTarget)
//     console.log(formData)
    // const response = await fetch('/api/submit', {
    //   method: 'POST',
    //   body: formData,
    // })
 
    
    // const data = await response.json()

//   }
 
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input placeholder='Which card do you want to create? It can be a single word or a complete sentence.' {...register('promptCommand')}/>
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