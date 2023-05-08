import Header from "@/components/Header";
import Result from "@/components/Result";
import { questions } from "@/constants/questions";
import { Question } from "@/protocols/question";
import { useEffect, useReducer, useState } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { orange } from '@mui/material/colors';
import Image from "next/image";



interface InGameQuestion extends Question {
    selectedAlternative?: number | null;
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
    const [remainingTimeControl, setRemainingTime] = useState<number>(25)
    const [isResult, setIsResult] = useState(false)
    const [key, setKey] = useState(0)

    function randomizeQuestions() {
        const first16 = gameQuestions.splice(0, 17);
        const shuffle = () => Math.random() - 0.5
        const randomFirst16 = first16.sort(shuffle)
        gameQuestions.unshift(...randomFirst16)
    }

    useEffect(() => {
        randomizeQuestions()
    }, [gameQuestions])

    useEffect(() => {
        setActiveQuestion({ ...gameQuestions[state.activeQuestionIndex], isAnswered: false })
    }, [gameQuestions, state.activeQuestionIndex])


    function answerQuestion(alternativeIndex: number) {
        if (activeQuestion?.isAnswered === false) {
            if (activeQuestion.reference) {
                setActiveQuestion({ ...activeQuestion.reference, isAnswered: false })
            } else {
                const answer = { ...activeQuestion, isAnswered: true, selectedAlternative: alternativeIndex }
                setActiveQuestion(answer)
                dispatch({ type: QuizzActionKind.answer, payload: answer })

            }

        }
    }

    useEffect(() => {

        if (remainingTimeControl === 0) {
            if (activeQuestion) {
                const answer = { ...activeQuestion, isAnswered: true, selectedAlternative: null }
                setActiveQuestion(answer)

                dispatch({ type: QuizzActionKind.answer, payload: answer })

            }
        }

    }, [remainingTimeControl])

    function handleNextQuestion() {
        setKey(value => value + 1)
        setRemainingTime(25)
        dispatch({ type: QuizzActionKind.setActiveQuestionIndex, payload: 1 })
    }

    useEffect(() => {
        if (state.answers.length === questions.length) {
            const points: string | null = localStorage.getItem('totalPoints')
            if (points) {
                const totalPoints = state.answers.filter(answer => answer.selectedAlternative === answer.correctAlternative).length * 10
                const actualPoints = JSON.parse(points)
                localStorage.setItem('totalPoints', JSON.stringify(totalPoints + JSON.parse(actualPoints)))
            }
        }
    }, [state.answers.length, state.answers])



    return (
        <>
            <Header />
            <main className="flex flex-col items-center p-3">
                <div className="flex flex-col md:w-[50vw] items-center gap-y-4 justify-between">
                    {state.activeQuestionIndex === questions.length ?
                        isResult ? <Result answers={state.answers} /> :
                            <div className="flex flex-col items-center gap-y-3">
                                <span className="text-center"><span className="text-lg">Parabéns!</span> <br /> Você chegou ao final do quizz</span>
                                <Image width={200} height={180} src={"/end.jpeg"} className="w-full md:w-[60%] rounded-lg object-contain" alt="end-quizz" />
                                <button onClick={() => setIsResult(true)} className={`  bg-slate-600  w-[60%] md:w-[20vw] rounded-md p-2 text-white`}>
                                    Ver resultado
                                </button>
                            </div>

                        :
                        <>
                            <span className="text-gray-600">Questão {state.activeQuestionIndex + 1}/{gameQuestions.length}</span>
                            {!activeQuestion?.reference ?
                                remainingTimeControl === 0 ?
                                    <div>
                                        <HourglassBottomIcon sx={{ fontSize: 40, color: orange[500] }} />
                                        <span>O tempo acabou :(</span>
                                    </div> :
                                    <CountdownCircleTimer
                                        key={key}
                                        isPlaying={!activeQuestion?.isAnswered}
                                        duration={25}
                                        size={50}
                                        strokeWidth={6}
                                        colors={['#22C55E', '#F7B801', '#A30000', '#A30000']}
                                        colorsTime={[25, 15, 6, 0]}
                                    >
                                        {({ remainingTime }) => {
                                            setRemainingTime(remainingTime)
                                            return remainingTime
                                        }}
                                    </CountdownCircleTimer> : ''
                            }

                            {remainingTimeControl === 0 ?
                                <div className=" flex justify-center">
                                    {activeQuestion?.isAnswered && <button onClick={handleNextQuestion} className={`  bg-slate-600  w-full md:w-[20vw] rounded-md p-2 text-white`}>Próxima</button>}
                                </div> : <>
                                <h3 className="text-md text-slate-900 text-justify">{activeQuestion?.title}</h3>
                                    <Image width={160} height={180} alt="anphibious_image" src={activeQuestion?.imageUrl ?? '#'} className="w-full object-contain md:w-[50%] h-[200px] " />
                                  
                                    <div className='flex flex-col mb-8 gap-y-3 w-full md:w-[60vw] lg:w-[30vw] '>
                                        {state.activeQuestionIndex !== questions.length && activeQuestion?.alternatives.map((alternative, alternativeIndex) => (
                                            <div key={alternative} onClick={() => answerQuestion(alternativeIndex)} className={`border 
                                                 cursor-pointer
                                                 ${activeQuestion.isAnswered ? alternativeIndex === activeQuestion.correctAlternative ? 'bg-green-500 text-white' : alternativeIndex === activeQuestion.selectedAlternative ? 'bg-red-500 text-white' : 'bg-white opacity-30 text-slate-900' : 'bg-white'} rounded-lg border-gray-300 p-3 `}>
                                                <span >
                                                    {alternative}
                                                </span>
                                            </div>
                                        ))}
                                        <div className=" flex justify-center">
                                            {activeQuestion?.isAnswered && <button onClick={handleNextQuestion} className={`  bg-slate-600  w-full md:w-[20vw] rounded-md p-2 text-white`}>Próxima</button>}
                                        </div>
                                    </div>
                                </>}
                        </>}
                </div>
            </main>

        </>
    )
}