import Image from 'next/image'
import Link from 'next/link'

import unbLogo from '../../public/images/ung-logo.png'

export function Footer() {
  return (
    <footer className="flex h-auto w-full flex-col items-center justify-center self-end bg-yellow-400/70 px-4 py-6 dark:bg-yellow-300 lg:flex-row">
      <article className="flex w-full max-w-screen-xl flex-col items-center justify-around lg:flex-row">
        <section className="h-full w-full">
          <nav>
            <ul className="flex flex-col items-start justify-start lg:flex-row lg:items-center lg:justify-center lg:gap-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-stone-700 hover:text-black hover:underline hover:underline-offset-2"
                >
                  Sobre o projeto
                </Link>
              </li>
              <li>
                <Link
                  href="/department"
                  target="_blank"
                  className="text-sm text-stone-700 hover:text-black hover:underline hover:underline-offset-2"
                >
                  Departamento de História - UnB
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="flex h-full w-full items-center justify-center gap-7 px-8 pt-6 lg:justify-end lg:pt-0">
          <Link
            href="https://www.juliorarick.tech"
            target="_blank"
            className="text-sm text-stone-700 hover:text-black lg:p-0"
          >
            &copy; Code by Júlio Rarick
          </Link>
          <figure className="h-auto w-12 p-0">
            <Image
              className="shadow-md"
              src={unbLogo}
              alt="Bandeira Universidade de Brasília - UNB"
              width={100}
              height={100}
              quality={60}
            />
          </figure>
        </section>
      </article>
    </footer>
  )
}
