import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <nav className='container mx-auto flex h-14 max-w-screen-2xl items-center px-8'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center'>
            <a href='#' className='text-xl font-bold'>
              Logo
            </a>
          </div>
          <div className='flex items-center'>
            <a href='#' className='text-sm font-medium'>
              Home
            </a>
            <a href='#' className='ml-4 text-sm font-medium'>
              About
            </a>
            <a href='#' className='ml-4 text-sm font-medium'>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
