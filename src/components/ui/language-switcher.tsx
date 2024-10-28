'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next-nprogress-bar'
import { usePathname } from 'next/navigation'

export function LanguageSwitcher() {
  const router = useRouter()
  const path = usePathname()

  const setLocale = (locale: string) => {
    const currentLocale = document.cookie.match(/NEXT_LOCALE=(\w+)/)?.[1]
    if (currentLocale === locale) return
    document.cookie = `NEXT_LOCALE=${locale}; path=/`
    router.push(path, undefined)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <span className='sr-only'>Toggle language</span>
          lan
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setLocale('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale('fr')}>
          French
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
