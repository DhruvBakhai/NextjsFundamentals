
import { Inter } from 'next/font/google'
import Navbar from './../component/Navbar'

const inter = Inter({ subsets: ['latin'] })

//navbar

export default function Home() {
  return (
    <div>
      <Navbar />

    </div>
  )
}
