import { Gamepad2 } from 'lucide-react'

import { CardGameQuiz } from './card-game-quiz'

export default function Games() {
  return (
    <main className="grid grid-rows-[min-content_max-content]">
      <h1 className="pb-4 text-center text-4xl font-extrabold tracking-tighter text-stone-800">
        Games
      </h1>
      <section className="lg:grid lg:grid-cols-2 lg:grid-rows-2">
        <CardGameQuiz
          themeGame="História Geral da África"
          titleGame="Reino de Kush"
          slugGame="quiz-kush"
        />
        <CardGameQuiz
          themeGame="História Geral da África"
          titleGame="Candaces"
          slugGame="quiz-candaces"
        />
        <div className="col-span-2 hidden h-full w-full px-6 py-4 lg:block">
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
