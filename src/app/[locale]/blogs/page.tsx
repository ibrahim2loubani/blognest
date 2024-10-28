'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'

const Blogs: FC = ({}) => {
  return (
    <div className='flex size-full items-center justify-center'>
      <Link
        href={`/`}
        className={cn(buttonVariants({ variant: 'default' }), 'h-9 px-4 py-2')}
      >
        go home
      </Link>
    </div>
  )
}

export default Blogs
