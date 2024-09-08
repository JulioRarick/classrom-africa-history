'use client'

import { QuizProvider } from '@/contexts/quiz-context-provider'
import { quizCandacesData } from '@/data/data-questionnaire-candaces'

import { Quiz } from '../quiz'

export default function Candaces() {
  return (
    <QuizProvider data={quizCandacesData}>
      <Quiz titleQuiz="Candaces" />
    </QuizProvider>
  )
}
