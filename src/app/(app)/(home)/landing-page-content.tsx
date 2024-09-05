import { DockIcon, Gamepad, Link, Notebook } from 'lucide-react'

export function LandingPageContent() {
  return (
    <section className="container mt-4 flex h-full flex-1 flex-col">
      <article className="h-full w-full">
        <h1 className="p-10 text-4xl font-extrabold tracking-tighter lg:text-5xl">
          História das Grandes Culturas Africanas
        </h1>
        <section className="flex h-full w-full items-center justify-evenly py-6">
          <Link
            className="flex flex-col items-center justify-center transition-all ease-in-out hover:scale-105"
            href="/classrooms"
          >
            <Notebook className="h-8 w-8 text-yellow-400" /> <p>Aulas</p>
          </Link>
          <Link
            className="flex flex-col items-center justify-center transition-all ease-in-out hover:scale-105"
            href="/games"
          >
            <Gamepad className="h-8 w-8 text-yellow-400" /> <p>Jogos</p>
          </Link>
          <Link
            className="flex flex-col items-center justify-center transition-all ease-in-out hover:scale-105"
            href="/project"
          >
            <DockIcon className="h-8 w-8 text-yellow-400" /> <p>Projeto</p>
          </Link>
        </section>
        <p className="text-center text-sm text-stone-400">
          Este site é um projeto de ensino de história das grandes culturas
          africanas. Aqui você encontrará aulas, jogos e um projeto final para
          testar seus conhecimentos.
        </p>
      </article>
      <article className="flex h-full w-full flex-col gap-3 py-8">
        <h2 className="text-6xl font-bold tracking-tighter text-yellow-500">
          Bem-vindo!
        </h2>
        <p>
          Teste o jogo de perguntas e respostas e veja o plano de aula
          disponível.
        </p>
        <section>
          <Link href="/games">
            <p className="flex items-center justify-center gap-2 text-lg font-bold tracking-tighter text-yellow-500">
              <Gamepad className="h-8 w-8 text-yellow-500" />
              <span>Jogar</span>
            </p>
          </Link>
          <Link href="/classrooms">
            <p className="flex items-center justify-center gap-2 text-lg font-bold tracking-tighter text-yellow-500">
              <Notebook className="h-8 w-8 text-yellow-500" />
              <span>Plano de Aula</span>
            </p>
          </Link>
        </section>
      </article>
    </section>
  )
}
