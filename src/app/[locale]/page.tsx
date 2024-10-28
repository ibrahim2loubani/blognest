'use client'

import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { ModeToggle } from '@/components/ui/theme-switcher'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

const Home: FC = ({}) => {
  const t = useTranslations('home')
  return (
    <div className='flex size-full items-center justify-center gap-10'>
      <ModeToggle />
      <LanguageSwitcher />
      <div>{t('title')}</div>
    </div>
  )
}

export default Home
