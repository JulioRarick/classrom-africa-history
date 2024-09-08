'use client'

import { FileQuestion } from 'lucide-react'
import Link from 'next/link'

interface CardGameProps {
  themeGame: string
  titleGame: string
  slugGame: string
}
export function CardGameQuiz({
  themeGame,
  titleGame,
  slugGame,
}: CardGameProps) {
  return (
    <div className="h-full w-full px-4 pb-2">
      <article className="overflow-hidden rounded-md bg-current bg-design-africa p-8 shadow-md">
        <section className="flex h-full w-full flex-col gap-1 rounded-md bg-white p-2 text-stone-900 shadow-inner">
          <h2 className="flex items-center justify-center gap-0.5 text-lg font-semibold tracking-tighter text-purple-800">
            <FileQuestion className="h-4 w-4" /> hist.quiz
          </h2>
          <span className="rounded-full bg-lime-300 py-1 text-center text-xs font-medium tracking-tighter">
            {themeGame}
          </span>
          <p className="py-1 text-center text-lg font-semibold tracking-tighter">
            {titleGame}
          </p>
          <Link
            href={`/games/quiz/${slugGame}`}
            className="m-1 self-center rounded-md bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-700 hover:shadow-md"
          >
            JOGAR
          </Link>
        </section>
      </article>
    </div>
  )
}
