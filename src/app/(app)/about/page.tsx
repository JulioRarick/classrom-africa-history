import { Pyramid } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-white p-4 text-justify lg:p-10">
      <h1 className="flex items-center justify-center gap-1 text-4xl font-bold tracking-tighter">
        <Pyramid className="h-14 w-14 text-yellow-400" />
        hist.game
      </h1>
      <p className="pb-2 font-bold tracking-tighter text-stone-600">
        Code by Júlio Rarick
      </p>
      <div className="flex flex-col gap-2 text-sm font-light text-stone-800 lg:px-32 lg:text-base">
        <p>
          O projeto &quot;hist.game&quot; é um site criado a partir de conteúdos
          apresentados por estudantes da Universidade de Brasília (UnB) para
          promover o ensino da História Geral da África.
        </p>
        <p>
          Atualmente, o site oferece dois quizzes interativos sobre o continente
          africano e inclui um plano de aula desenvolvido por alunos da
          disciplina Laboratório de Ensino de História da África, sob a
          orientação do professor Dr. Anderson Ribeiro Oliva. O código open
          source foi desenvolvido por Júlio Rarick, estudante de História da
          UnB.
        </p>
        <p>
          Agradecemos a todos que participaram e contribuíram para o sucesso
          deste projeto.
        </p>
      </div>
      <p className="p-4 text-base lg:text-lg">
        Veja o repositório do projeto:{' '}
        <Link
          href="https://github.com/JulioRarick/hist.game"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline hover:underline-offset-2"
        >
          github.com/JulioRarick/hist.game
        </Link>
      </p>
    </div>
  )
}
