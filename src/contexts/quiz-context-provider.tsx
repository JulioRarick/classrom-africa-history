import { createContext, ReactNode, useEffect, useState } from 'react'

import { Quiz } from '@/data/@types/data-quiz'

interface Question {
  question: string
  options: string[]
  correctAnswer: string
}

export interface QuizContextType {
  start: boolean
  countdown: number
  activeQuestion: number
  selectedAnswer: string | null
  correctAnswers: number
  wrongAnswers: number
  showResult: boolean
  currentQuestion: Question
  questions: Question[]
  handleStart: () => void
  handleSelectedAnswer: (option: string) => void
  handleClickNextQuestion: () => void
  handleRetry: () => void
}

export const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({
  children,
  data,
}: {
  children: ReactNode
  data: Quiz
}) {
  const [start, setStart] = useState(false)
  const [countdown, setCountdown] = useState(50)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const questions: Question[] = data.questions

  const currentQuestion = questions[activeQuestion]

  function handleStart() {
    setStart(true)
    setCountdown(50)
  }

  function handleSelectedAnswer(option: string) {
    setSelectedAnswer(option)
    if (option === currentQuestion.correctAnswer) {
      setCorrectAnswers(correctAnswers + 1)
    } else {
      setWrongAnswers(wrongAnswers + 1)
    }
  }

  function handleClickNextQuestion() {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1)
      setSelectedAnswer(null)
      setCountdown(50)
    } else {
      setShowResult(true)
    }
  }

  function handleRetry() {
    setActiveQuestion(0)
    setCorrectAnswers(0)
    setWrongAnswers(0)
    setCountdown(50)
    setShowResult(false)
    setStart(false)
  }
  useEffect(() => {
    const countdownTimer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1)
      } else {
        if (activeQuestion < questions.length - 1) {
          setActiveQuestion(activeQuestion + 1)
          setCountdown(50)
        } else {
          setShowResult(true)
        }
      }
    }, 1000)

    return () => clearTimeout(countdownTimer)
  }, [countdown, activeQuestion, questions])

  return (
    <QuizContext.Provider
      value={{
        start,
        countdown,
        activeQuestion,
        selectedAnswer,
        correctAnswers,
        wrongAnswers,
        showResult,
        currentQuestion,
        questions,
        handleStart,
        handleSelectedAnswer,
        handleClickNextQuestion,
        handleRetry,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
