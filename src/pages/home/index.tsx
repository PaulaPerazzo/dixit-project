import { Button, SecondaryButton } from '@/components'

function Home() {

  const handleClick = () => {
    console.log('button clicked!');
  };

  return (
    <>
      <div>HOME</div>
      <Button text='ojasdn' onClick={handleClick} />
      <SecondaryButton text='yes / no' onClick={handleClick} />
    </>
  )
}

export default Home;
