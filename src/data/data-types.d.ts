type Option = {
  key: string
  value: string
}

export type Question = {
  question: string
  options: Option[]
  answer: string
}

export type TrueFalseQuestion = {
  question: string
  options: {
    true: string
    false: string
  }
  answer: 'true' | 'false'
}
