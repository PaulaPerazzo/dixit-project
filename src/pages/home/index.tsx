import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components'

const inter = Inter({ subsets: ['latin'] })

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
