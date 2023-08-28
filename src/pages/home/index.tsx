import { Button } from '@/components'

function Home() {

  const handleClick = () => {
    console.log('button clicked!');
  };

  return (
    <>
      <div>HOME</div>
      <Button text='ojasdn' onClick={handleClick} />
    </>
  )
}

export default Home;
