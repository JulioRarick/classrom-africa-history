'use client'

import { QuizProvider } from '@/contexts/quiz-context-provider'
import { quizKushData } from '@/data/data-questionnaire-kush'

import { Quiz } from '../quiz'

export default function Kush() {
  return (
    <QuizProvider data={quizKushData}>
      <Quiz titleQuiz="Reino de Cuxe" />
    </QuizProvider>
  )
}
