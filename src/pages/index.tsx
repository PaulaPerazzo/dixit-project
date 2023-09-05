import Image from 'next/image'
import { Inter } from 'next/font/google'
import UserStories from './userStories'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <UserStories />
  )
}
