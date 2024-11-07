import { cn } from '@/lib/utils'

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
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl cursor-pointer group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        className,
      )}
    >
      {header}
      <div className='transition duration-200 group-hover/bento:translate-x-2'>
        {icon}
        <div className='my-2 font-sans font-bold text-neutral-600 dark:text-neutral-200'>
          {title}
        </div>
        <div className='font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300'>
          {description}
        </div>
      </div>
    </div>
  )
}

export function BentoGridItemSkeleton() {
  const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`

  return (
    <div className='row-span-1 flex cursor-pointer flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 dark:border-white/[0.2] dark:bg-black'>
      <div
        className={cn('relative min-h-40 rounded-xl bg-neutral-900', shimmer)}
      />

      <div className='h-4 w-full rounded-lg bg-neutral-900' />
      <div className='h-6 w-1/3 rounded-lg bg-neutral-900' />
      <div className='h-4 w-full rounded-lg bg-neutral-900' />
      <div className='h-4 w-4/6 rounded-lg bg-neutral-900' />
    </div>
  )
}
