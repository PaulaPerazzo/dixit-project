import Input from '@/components/Input'
import { Button, SecondaryButton } from '@/components'

function Home() {

  const handleClick = () => {
    console.log('button clicked!');
  };

  return (
    <>
      <div>HOME</div>
      <Button text='main button' onClick={handleClick} />
      <SecondaryButton text='yes / no' onClick={handleClick} />
      <Input placeholder='placeholder example' />
    </>
  )
}

export default Home;
