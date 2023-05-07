import Header from "@/components/Header";
import Result from "@/components/Result";
import { questions } from "@/constants/questions";
import { Question } from "@/protocols/question";
import { useEffect, useReducer, useState } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { orange } from '@mui/material/colors';


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
        console.log(remainingTimeControl)
        if(remainingTimeControl === 0){
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

            <main className="flex flex-col items-center  p-3 ">
                <div className="flex flex-col md:w-[50vw] items-center gap-y-4 justify-between">
                    {state.activeQuestionIndex === questions.length ?
                        <Result answers={state.answers} /> :
                        <>
                            <span className="text-gray-600">Questão {state.activeQuestionIndex + 1}/{gameQuestions.length}</span>
                            {!activeQuestion?.reference ?
                                remainingTimeControl === 0? 
                                <div>
                                    <HourglassBottomIcon sx={{fontSize:70, color: orange[500]}} />
                                    <span>O tempo acabou :(</span>
                                </div>:  
                                <CountdownCircleTimer
                                key={key}
                                isPlaying={!activeQuestion?.isAnswered}
                                duration={25}
                                size={70}
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

                            <img src={activeQuestion?.imageUrl} className="w-[300px] rounded-lg" />
                            <h3 className="font-medium">{activeQuestion?.title}</h3>
                            <div className='flex flex-col  gap-y-3  w-full md:w-[60vw] lg:w-[30vw] h-[50vh]'>
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
                                    {activeQuestion?.isAnswered && <button onClick={handleNextQuestion} className={`  bg-slate-600 mb-10 w-full md:w-[20vw] rounded-md p-2 text-white`}>Próxima</button>}
                                </div>
                            </div>

                        </>}
                </div>
            </main>
        </>
    )
}