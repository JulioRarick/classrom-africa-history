'use client'

import { CircleX, LoaderCircle, Play, Verified } from 'lucide-react'
import Link from 'next/link'

import { AnimatedDiv } from '@/components/animated-div'
import { Button } from '@/components/ui/button'
import { useQuiz } from '@/hooks/useQuiz'
import { cn } from '@/lib/utils'

interface QuizProps {
  titleQuiz: string
}

export function Quiz({ titleQuiz }: QuizProps) {
  const {
    start,
    countdown,
    selectedAnswer,
    correctAnswers,
    wrongAnswers,
    currentQuestion,
    showResult,
    handleStart,
    handleSelectedAnswer,
    handleClickNextQuestion,
    handleRetry,
  } = useQuiz()

  return (
    <AnimatedDiv className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-md bg-white p-4 shadow-lg">
      {!start ? (
        <>
          <h1 className="text-3xl font-bold tracking-tighter text-stone-800 lg:text-4xl">
            {titleQuiz}
          </h1>
          <p className="text-2xl font-extrabold tracking-tighter text-stone-700 lg:text-3xl">
            Vamos começar?
          </p>
          <p className="text-center text-base font-light tracking-tighter lg:text-lg">
            Você tem 50 segundos para cada questão.
          </p>
          <Button
            variant="default"
            onClick={handleStart}
            className="py-4 text-xl font-bold hover:shadow-sm hover:brightness-110"
          >
            START
            <Play className="h-6 w-6" />
          </Button>
        </>
      ) : currentQuestion ? (
        <>
          <div
            className={cn(
              'flex h-full w-full flex-col items-center justify-center p-4',
              showResult && 'hidden',
            )}
          >
            <h1 className="pb-4 text-justify text-base font-bold lg:text-center lg:text-2xl">
              {currentQuestion.question}
            </h1>
            <div className="flex flex-col gap-4">
              {currentQuestion.options.map((option: string) => (
                <button
                  key={option}
                  onClick={() => handleSelectedAnswer(option)}
                  className={`flex items-center px-5 py-2 text-start text-sm font-light hover:bg-purple-100 lg:text-lg ${
                    selectedAnswer === option ? 'bg-purple-200' : 'bg-stone-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mt-4 animate-pulse p-4 font-bold text-rose-500">
              {countdown}s
            </p>
            {selectedAnswer !== null && (
              <Button
                onClick={handleClickNextQuestion}
                className="self-end justify-self-end"
              >
                Próxima pergunta
              </Button>
            )}
          </div>
          {showResult && (
            <AnimatedDiv className="flex flex-col gap-3">
              <p className="self-center text-3xl font-extrabold tracking-tighter text-yellow-600">
                Resultado
              </p>
              <p className="flex items-center gap-1 text-lg font-light lg:text-xl">
                <Verified className="h-6 w-6 text-emerald-700" /> Acertos:{' '}
                {correctAnswers}
              </p>
              <p className="flex items-center gap-1 text-lg font-light lg:text-xl">
                <CircleX className="h-6 w-6 text-rose-700" /> Erros:{' '}
                {wrongAnswers}
              </p>
              <p className="py-4 text-base font-bold tracking-tighter lg:text-xl">
                Você conseguiu{' '}
                <span className="px-1 text-2xl text-purple-600 lg:px-2 lg:text-3xl">
                  {' '}
                  {correctAnswers * 15}
                </span>{' '}
                pontos!
              </p>
              <Button onClick={handleRetry}>Tentar novamente</Button>
              <Link
                href="./answers"
                className="self-center justify-self-center"
              >
                <p className="text-purple-600 hover:underline">
                  Ver gabarito completo
                </p>
              </Link>
              <Link href="/" className="self-center justify-self-center pt-8">
                <p className="text-purple-600 hover:underline">
                  Voltar para Home
                </p>
              </Link>
            </AnimatedDiv>
          )}
        </>
      ) : (
        <p>
          <LoaderCircle className="h-10 w-10 animate-spin text-purple-600" />
        </p>
      )}
    </AnimatedDiv>
  )
}
