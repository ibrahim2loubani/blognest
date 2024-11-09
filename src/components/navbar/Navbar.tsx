import Link from 'next/link'
import { FC } from 'react'
import { LanguageSwitcher } from '../ui/language-switcher'
import { ModeToggle } from '../ui/theme-switcher'

const Navbar: FC = () => {
  return (
    <header className='fixed top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <nav className='container mx-auto flex h-14 max-w-screen-2xl items-center px-8'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center'>
            <Link href='#' className='text-xl font-bold'>
              BlogNest
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <ModeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
