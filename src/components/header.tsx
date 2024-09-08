import { Pyramid } from 'lucide-react'
import Link from 'next/link'

import { NavbarItem } from './navbar-item'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="left-0 top-0 flex h-16 w-full items-center justify-center bg-background p-4 text-foreground">
      <article className="flex h-full w-full max-w-screen-lg items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center gap-1.5 text-xl font-bold tracking-tighter transition-all ease-in-out hover:scale-105 hover:brightness-110"
        >
          <Pyramid className="h-8 w-8 text-primary" />
          <span>hist.game</span>
        </Link>
        <nav>
          <ul className="flex items-center justify-center gap-4 text-sm">
            <NavbarItem url="/about" title="Sobre" />
            <li>
              <Button variant="default" asChild>
                <Link href="/games">Jogos</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </article>
    </header>
  )
}
