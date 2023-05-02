import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { questions } from '@/constants/questions'
import Header from '@/components/Header'
import Link from 'next/link'
import { Leaf, Question } from '@phosphor-icons/react'


const inter = Inter({ subsets: ['latin'] })





export default function Home() {

  useEffect(() => {
    if(!localStorage.getItem('totalPoints')){
      console.log("ok")
        localStorage.setItem('totalPoints', JSON.stringify(0))
    }
  },[])
 
  return (
    <>
     <Header />
    <main
      className={`flex min-h-[calc(100vh - 60px)] flex-col p-3  ${inter.className}`}
    > 
      <h3 className='font-bold text-slate-600 text-lg my-5'>Todos os Quizzes</h3>
      <div className='flex flex-col w-full sm:w-[50vw] md:w-[300px]'>
      <Link href={'/quizz/anfibios'} className="quizz-card  h-[200px] bg-cover rounded-lg bg-no-repeat text-white font-bold flex items-end p-3">
          <p className='flex justify-center w-full'>O quanto você sabe sobre os anfíbios?</p>
        </Link>
      <div className='flex gap-x-4 items-center'>
      <div className='flex gap-x-1 items-center mt-3'>
          <Question size={24} weight="fill" color="#03b547" /> {questions.length} questões
        </div>
        <div className='flex gap-x-1 items-center mt-3'>
          <Leaf size={24} weight="fill" color="#03b547" /> +110 pontos
        </div>
      </div>
      </div>
    </main>
    </> 
  )
}
