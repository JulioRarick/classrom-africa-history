import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-6">
      <h2 className="text-3xl font-extrabold tracking-tighter text-foreground lg:text-6xl">
        Partiu jogar?
      </h2>
      <Link
        href="/games"
        className="rounded-md bg-white px-5 py-3 shadow-md hover:shadow-xl"
      >
        <p className="text-xl font-semibold text-foreground lg:text-2xl">
          Clique aqui
        </p>
      </Link>
    </section>
  )
}
