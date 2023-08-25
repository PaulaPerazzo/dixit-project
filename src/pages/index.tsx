import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from './home'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <Home />
  )
}
