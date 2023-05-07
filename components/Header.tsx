import { House, Leaf } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Header(){
    const router = useRouter()
    const [totalPoints, setTotalPoints] = useState()
    
    useEffect(() => {
        const item: string | null = localStorage.getItem('totalPoints')
        if(item){
            setTotalPoints(JSON.parse(item))
        }
    },[])

    return (
        <div className="bg-green-500 flex flex-col items-center justify-around text-white font-bold 
        header-shadow">
            <h1 className="flex items-center text-2xl mt-3"><Leaf weight="fill" color="white" />BioQuizz</h1>
      
            <div className="flex items-center justify-around w-full mt-6">
                {router.asPath === '/quizz/anfibios' && <Link href={"/"} className="flex items-center gap-x-1">
                    <House size={24} color="#fafafa" weight="fill" />
                    Início
                </Link>}
            
                {router.asPath === '/' && <div>
                    Total de pontos: <span className="text-white-500 font-bold">{totalPoints ?? 0}</span>
                </div>}
            </div>  
        </div>
    )
}