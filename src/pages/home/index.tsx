import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <>
      <div>HOME</div>
      <Button />
    </>
  )
}

export default Home;
