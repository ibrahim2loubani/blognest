'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Avatar, AvatarImage } from './avatar'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  authorName,
  title,
  body,
  thumbnail,
  authorImage,
  href,
  ref,
}: {
  className?: string
  authorName?: string
  title: string
  body: string
  thumbnail?: string
  authorImage?: string
  href: string
  ref?: ((element: unknown) => void) | null
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Link
      className={cn(
        'row-span-1 rounded-xl cursor-pointer group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-neutral-200 justify-between flex flex-col space-y-4',
        className,
      )}
      ref={ref}
      href={href}
    >
      <div className='relative size-full'>
        {mounted && (
          <Image
            src={thumbnail as string}
            alt='Hero'
            className='absolute left-0 top-0 rounded-lg'
            fill
          />
        )}
      </div>

      <div className='transition duration-200 group-hover/bento:translate-x-2'>
        <div className='flex items-center gap-2'>
          <Avatar className='size-5'>
            <AvatarImage src={authorImage} alt='author' />
            {/* <AvatarFallback>{getInitials(authorName as string)}</AvatarFallback> */}
          </Avatar>
          <span>{authorName}</span>
        </div>
        <div className='my-2 line-clamp-1 font-sans font-bold capitalize text-neutral-600 dark:text-neutral-200'>
          {title}
        </div>
        <div className='line-clamp-2 font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300'>
          {body}
        </div>
      </div>
    </Link>
  )
}

export function BentoGridItemSkeleton() {
  const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`

  return (
    <div className='row-span-1 flex cursor-pointer flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 dark:border-white/[0.2] dark:bg-black'>
      <div
        className={cn('relative min-h-40 rounded-xl bg-neutral-900', shimmer)}
      />

      <div className='h-5 w-1/3 rounded-lg bg-neutral-900' />
      <div className='h-6 w-4/6 rounded-lg bg-neutral-900' />
      <div className='h-8 w-full rounded-lg bg-neutral-900' />
    </div>
  )
}
