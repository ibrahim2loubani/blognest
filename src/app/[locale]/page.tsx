'use client'

import { buttonVariants } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { ModeToggle } from '@/components/ui/theme-switcher'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'

const Home: FC = ({}) => {
  const t = useTranslations('home')

  return (
    <div className='flex size-full items-center justify-center gap-10'>
      <ModeToggle />
      <LanguageSwitcher />
      <div>{t('title')}</div>
      <Link
        href={`/blogs`}
        className={cn(buttonVariants({ variant: 'outline' }), 'h-9 px-4 py-2')}
      >
        go to blogs
      </Link>
    </div>
  )
}

export default Home
