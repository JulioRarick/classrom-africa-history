export type Questions = {
  question: string
  options: string[]
  correctAnswer: string
}[]

export type Quiz = {
  id: number
  slug: string
  topic: string
  theme: string
  totalQuestions: number
  perQuestionsScore: number
  questions: Questions
}
