import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components'
import Input from '@/components/Input'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <>
      <div>HOME</div>
      <Button />
      <Input />
    </>
  )
}

export default Home;
