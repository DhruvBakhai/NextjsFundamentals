
import { Inter } from 'next/font/google'
import Contact from './Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <h1>Hello</h1> */}
      <Contact />
    </>
  )
}
