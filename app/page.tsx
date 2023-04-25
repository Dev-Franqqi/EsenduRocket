import { Inter } from "next/font/google"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
        
        <h1 className="text-white text-center mt-7 text-xl">Search for articles</h1>

    </main>
  )
}
