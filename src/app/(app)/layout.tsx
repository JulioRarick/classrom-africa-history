import '../../styles/globals.css'

import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
})
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'hist.game',
  description: 'Code by Julio Rarick',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={cn(inter.variable, merriweather.variable)}>
      <body className="flex h-screen min-h-screen select-none flex-col bg-white font-sans text-stone-950 antialiased">
        <>
          <Header />
          <div className="flex h-full w-full flex-col bg-white font-sans lg:container">
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4">
              <p className="text-center text-xl font-light tracking-tighter lg:text-2xl">
                Bem vindo ao hist.game!
              </p>
              <div className="h-full w-full rounded-md bg-yellow-300/80 p-6 shadow-md">
                {children}
              </div>
              <h1 className="text-xl font-semibold tracking-tighter">
                open source project
              </h1>
            </div>
          </div>
          <Footer />
        </>
      </body>
    </html>
  )
}