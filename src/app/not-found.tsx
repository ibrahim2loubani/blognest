'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function NotFound(): JSX.Element {
  const router = useRouter()
  const locale = document.cookie.match(/NEXT_LOCALE=(\w+)/)?.[1]

  return (
    <html lang={locale}>
      <body>
        <section className='flex h-screen flex-col items-center justify-center gap-10'>
          <Image
            src={'/assets/images/404.svg'}
            width={641}
            height={516}
            alt='not-found'
            priority
          />
          <Button
            size={'lg'}
            className='px-4 py-2'
            onClick={() => router.push('/')}
          >
            Go Back Home
          </Button>
        </section>
      </body>
    </html>
  )
}
