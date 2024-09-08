import { Gamepad2 } from 'lucide-react'

import { quizCandacesData } from '@/data/data-questionnaire-candaces'
import { quizKushData } from '@/data/data-questionnaire-kush'

import { CardGameQuiz } from './card-game-quiz'

export default async function Games() {
  const quizzes = [quizKushData, quizCandacesData]

  return (
    <main className="grid grid-rows-[min-content_max-content]">
      <h1 className="pb-4 text-center text-4xl font-extrabold tracking-tighter text-stone-800">
        Games
      </h1>
      <section className="flex flex-col items-center justify-center gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2">
        {quizzes.map((quiz) => (
          <CardGameQuiz
            key={quiz.id}
            themeGame={quiz.theme}
            titleGame={quiz.topic}
            slugGame={quiz.slug}
          />
        ))}
        <div className="col-span-2 hidden h-full w-full px-6 py-2 lg:block">
          <article className="flex h-full w-full items-center justify-center rounded-lg bg-white shadow-md">
            <h2 className="flex gap-2 text-xl font-semibold tracking-tighter text-purple-700">
              <Gamepad2 className="h-7 w-7 animate-pulse" /> em
              desenvolvimento...
            </h2>
          </article>
        </div>
      </section>
    </main>
  )
}
