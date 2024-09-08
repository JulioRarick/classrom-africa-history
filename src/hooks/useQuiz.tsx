'use client'

import { useContext } from 'react'

import { QuizContext, QuizContextType } from '@/contexts/quiz-context-provider'

export function useQuiz(): QuizContextType {
  const context = useContext(QuizContext)

  if (!context) {
    throw new Error('useQuiz must be used within a QuizContextProvider')
  }

  return context
}
