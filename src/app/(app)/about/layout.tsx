import '../../../styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'hist.game | Sobre',
  description: 'Code by Julio Rarick',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={cn(inter.variable)}>
      <body className="flex h-screen min-h-screen select-none flex-col bg-white font-sans text-stone-950 antialiased">
        <>
          <Header />
          <div className="flex h-full w-full flex-col bg-white font-sans lg:container">
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4">
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
