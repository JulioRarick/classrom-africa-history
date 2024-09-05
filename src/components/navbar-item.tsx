import Link from 'next/link'

import { cn } from '@/lib/utils'

interface NavbarItemProps {
  title: string
  url: string
  className?: string
}

export function NavbarItem({ title, url, className }: NavbarItemProps) {
  return (
    <li
      className={cn(
        className,
        'border-b-2 border-transparent transition-all ease-in-out hover:border-b-yellow-500',
      )}
    >
      <Link href={url}>{title}</Link>
    </li>
  )
}
