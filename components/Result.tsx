import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Link from "next/link";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { yellow } from '@mui/material/colors';


export default function Result({ answers }: any) {
    console.log(answers)
    function renderResult() {
        return answers.map((answer: any, i: number) => {
            const isCorrectAnswer = answer.selectedAlternative === answer.correctAlternative
            return <div key={answer.id} className={`flex flex-col gap-x-3 p-2`}>
                    <div className='flex items-center gap-x-3'>
                        <span className={`${isCorrectAnswer ? 'bg-green-500': 'bg-red-500'} text-white h-[10px] p-4 flex items-center justify-center w-[10px] rounded-full`}>{i + 1}</span>
                        <span className="text-slate-600 font-medium w-[90%] text-md text-justify ">{answer.referenceAlternativeTitle ?? answer.title}</span>
                    </div>
                    {answer.selectedAlternative === null ? <span className="mt-3 text-orange-600 text-justify">Não respondeu a tempo</span> : 
                    !isCorrectAnswer ? <span className="mt-3 text-gray-600 text-justify">Sua resposta: {answer.alternatives[answer.selectedAlternative]}</span> : ''}

                    <span className="mt-3 text-gray-600">Resposta: {answer.alternatives[answer.correctAlternative]}</span>
            </div>
        })
    }

    return (
        <div className="flex flex-col">
            <h4 className="my-3 font-medium text-slate-600">Seu resultado</h4>
            <div className="w-[90vw] relative h-[200px] bg-green-500 md:w-[50vw] p-2  rounded-lg">
                <h3 className="text-white font-bold">Nome do Quizz</h3>
                <span className="text-white font-medium">O que você sabe sobre os anfíbios?</span>

                <div className="absolute flex items-center justify-center gap-x-3 bottom-0 text-bold left-[50%] w-[80%] translate-x-[-50%] h-[60%] bg-white rounded-t-lg p-3">
                    <div style={{ width: 100, height: 100 }} className="relative">
                        <text className="absolute top-[50%] translate-y-[-50%] left-[32%]">{answers.filter((answer: any) => answer.selectedAlternative === answer.correctAlternative).length}/{answers.length}</text>
                        <CircularProgressbar className="text-bold text-center" value={answers.filter((answer: any) => answer.selectedAlternative === answer.correctAlternative).length * 10} styles={buildStyles({
                            trailColor: 'red',
                            pathColor: `#22C55E`,
                            textColor: 'red',
                            textSize: '14px',

                            pathTransitionDuration: 0.5,

                        })} />

                    </div>
                        
                    <div className='flex items-center'>
                     <EmojiEventsIcon sx={{fontSize:40, color: yellow[500]}} />   
                    <span>+{answers.filter((answer: any) => answer.selectedAlternative === answer.correctAlternative).length * 10} pontos </span>
                    </div>
                </div>

            </div>
            <h4 className="my-3 font-medium text-slate-600">Suas respostas</h4>
            <div className="flex w-[90vw] md:w-[50vw] flex-col gap-y-4 bg-[#EFEEFC]">
                {renderResult()}

            </div>
            <div className="md:mt-5 flex justify-center b">
                <Link className="bg-green-600 mt-3 text-white rounded-md p-3 text-center w-full md:w-[30vw] lg:w-[20vw]" href={'/'}>Voltar para o início</Link>

            </div>
        </div>
    )
}