import Header from "@/components/Header";
import { questions } from "@/constants/questions";
import { Question } from "@/protocols/question";
import { CheckCircle, FastForwardCircle, XCircle } from "@phosphor-icons/react";
import { useEffect, useReducer, useState } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Link from "next/link";


interface InGameQuestion extends Question {
    selectedAlternative?: number;
    isAnswered: boolean
}

enum QuizzActionKind {
    setActiveQuestionIndex = 'setActiveQuestionIndex',
    answer = 'answer'
}

interface QuizzState {
    activeQuestionIndex: number,
    answers: number[],
}

interface QuizzAction {
    type: QuizzActionKind;
    payload: any
}

const initialState: QuizzState = {
    activeQuestionIndex: 0,
    answers: [],

}

const quizzReducer = (state: QuizzState, action: QuizzAction) => {
    const { type, payload } = action;
    switch (type) {
        case QuizzActionKind.setActiveQuestionIndex: return { ...state, activeQuestionIndex: state.activeQuestionIndex + payload }
        case QuizzActionKind.answer: return { ...state, answers: [...state.answers, payload] }
    }
}

export default function AnfiQuizz() {
    const [gameQuestions, setGameQuestions] = useState(questions)
    const [state, dispatch] = useReducer(quizzReducer, initialState)
    const [activeQuestion, setActiveQuestion] = useState<InGameQuestion>()
    const [key, setKey] = useState(0)

    function randomizeQuestions() {
        const shuffle = () => Math.random() - 0.5
        const randomizedQuestions = questions.sort(shuffle)
        setGameQuestions(randomizedQuestions)
    }

    useEffect(() => {
        randomizeQuestions()

    }, [gameQuestions])

    useEffect(() => {
        setActiveQuestion({ ...gameQuestions[state.activeQuestionIndex], isAnswered: false })
    }, [gameQuestions, state.activeQuestionIndex])


    function answerQuestion(alternativeIndex: number) {
        if (activeQuestion?.isAnswered === false) {
            const answer = { ...activeQuestion, isAnswered: true, selectedAlternative: alternativeIndex }
            setActiveQuestion(answer)
            dispatch({ type: QuizzActionKind.answer, payload: answer })
        }
    }


    function handleNextQuestion() {
        setKey(value => value + 1)
        dispatch({ type: QuizzActionKind.setActiveQuestionIndex, payload: 1 })
    }

    useEffect(() => {
        if(state.answers.length === questions.length){
            const points: string | null = localStorage.getItem('totalPoints')
        if(points){
            const totalPoints = state.answers.filter(answer => answer.selectedAlternative === answer.correctAlternative).length * 10
            const actualPoints = JSON.parse(points)
            localStorage.setItem('totalPoints', JSON.stringify(totalPoints + JSON.parse(actualPoints)))
        }
        }
    },[state.answers.length, state.answers])
 
    function renderResult() {
        return state.answers.map((answer, i) => (
            <div key={answer.id} className={`flex flex-col gap-x-3 p-2`}>
                <div className="flex items-center gap-x-2">
                    <span className="bg-white h-[10px] p-4 flex items-center justify-center w-[10px] rounded-full">{i + 1}</span>
                    <div className="w-[90%] flex flex-col">
                        <span className={``}>{answer.title}</span>
                        <span className="mt-3 text-gray-600">{answer.alternatives[answer.correctAlternative]}</span>
                    </div>
                    {
                        answer.selectedAlternative === answer.correctAlternative ?
                            <CheckCircle size={24} color="#05e159" weight="fill" /> :
                            <XCircle size={24} color="#ed0202" weight="fill" />}
                </div>
            </div>
        ))
    }

    return (
        <>
            <Header />
            <main className="flex flex-col items-center  p-3">
                <div className="flex flex-col items-center gap-y-4 justify-between">
                    {state.activeQuestionIndex === questions.length ?
                        <div className="flex flex-col">
                            <h4 className="my-3 font-medium text-slate-600">Seu resultado</h4>
                            <div className="w-[90vw] relative h-[200px] bg-green-500 md:w-[50vw] p-2  rounded-lg">
                                <h3 className="text-white font-bold">Nome do Quizz</h3>
                                <span className="text-white font-medium">O que você sabe sobre os anfíbios?</span>

                                <div className="absolute flex items-center justify-center gap-x-3 bottom-0 text-bold left-[50%] w-[80%] translate-x-[-50%] h-[60%] bg-white rounded-t-lg p-3">
                                    <div style={{ width: 100, height: 100 }} className="relative">
                                        <text className="absolute top-[36%] left-[35%]">{state.answers.filter(answer => answer.selectedAlternative === answer.correctAlternative).length}/{state.answers.length}</text>
                                        <CircularProgressbar className="text-bold text-center"  value={state.answers.filter(answer => answer.selectedAlternative === answer.correctAlternative).length*10}  styles={buildStyles({
                                                trailColor: 'red',
                                                pathColor: `#22C55E`,
                                                textColor: 'red',
                                                textSize:   '14px',
                                               
                                                pathTransitionDuration: 0.5,
                                                
                                        })} />
                                       
                                    </div>
                                    <span>+{state.answers.filter(answer => answer.selectedAlternative === answer.correctAlternative).length * 10} pontos </span>
                                </div>

                            </div>
                            <h4 className="my-3 font-medium text-slate-600">Suas respostas</h4>
                            <div className="flex w-[90vw] md:w-[50vw] flex-col gap-y-4 bg-[#EFEEFC]">
                                {renderResult()}
                              
                            </div>
                            <div className="md:mt-5 flex justify-center b"> 
                            <Link className="bg-green-600 mt-3 text-white rounded-md p-3 text-center w-full md:w-[30vw] lg:w-[20vw]" href={'/'}>Voltar para o início</Link>

                            </div>
                        </div> :
                        <>
                            <span className="text-gray-600">Questão {state.activeQuestionIndex + 1}/{gameQuestions.length}</span>
                            <CountdownCircleTimer
                                key={key}
                                isPlaying={!activeQuestion?.isAnswered}
                                duration={15}
                                size={70}
                                strokeWidth={6}
                                colors={['#22C55E', '#F7B801', '#A30000', '#A30000']}
                                colorsTime={[7, 5, 2, 0]}
                            >
                                {({ remainingTime }) => remainingTime}
                            </CountdownCircleTimer>

                            <h3 className="font-bold">{activeQuestion?.title}</h3>
                            <div className='flex flex-col  gap-y-3  w-full md:w-[60vw] lg:w-[30vw] h-[50vh]'>
                                {state.activeQuestionIndex !== questions.length && activeQuestion?.alternatives.map((alternative, alternativeIndex) => (
                                    <div key={alternative} onClick={() => answerQuestion(alternativeIndex)} className={`border 
                     cursor-pointer
                            ${activeQuestion.isAnswered ? alternativeIndex === activeQuestion.correctAlternative ? 'bg-green-500 text-white' : alternativeIndex === activeQuestion.selectedAlternative ? 'bg-red-500 text-white' : 'bg-white text-slate-900' : 'bg-white'} rounded-lg border-gray-300 p-3 `}>
                                        <span >
                                            {alternative}
                                        </span>
                                    </div>
                                ))}
                                 <div className=" flex justify-center">
                                 {activeQuestion?.isAnswered && <button onClick={handleNextQuestion} className={`  bg-slate-600 w-full md:w-[20vw] rounded-md p-2 text-white`}>Próxima</button>}
                                 </div>
                            </div>
                           
                        </>}

                </div>



            </main>
        </>
    )
}