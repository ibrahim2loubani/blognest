'use client'

import {
  BentoGrid,
  BentoGridItem,
  BentoGridItemSkeleton,
} from '@/components/ui/bento-grid'
import { getPosts } from '@/queries/blogs'
import { useIntersection } from '@mantine/hooks'
import { useInfiniteQuery } from '@tanstack/react-query'
import _ from 'lodash'
import { FC, useEffect, useMemo, useRef } from 'react'

interface IBlogsPageProps {
  blogs: IBlogResponse[]
  locale: string
}

const BlogsPage: FC<IBlogsPageProps> = ({ blogs: blogsData }) => {
  const params = {
    page: 1,
    limit: 5,
  }

  const intersectionRef = useRef<HTMLDivElement | null>(null)
  const { ref, entry } = useIntersection({
    root: intersectionRef.current,
    threshold: 1,
  })

  const details = useMemo(
    () => [
      {
        authorName: 'John Doe',
        authorImage: '/assets/images/avatar.jpg',
        thumbnail: '/assets/images/unsplash.avif',
      },
      {
        authorName: 'John Doe',
        authorImage: '/assets/images/avatar1.svg',
        thumbnail: '/assets/images/unsplash.avif',
      },
      {
        authorName: 'John Doe',
        authorImage: '/assets/images/avatar2.svg',
        thumbnail: '/assets/images/unsplash.avif',
      },
      {
        authorName: 'John Doe',
        authorImage: '/assets/images/avatar3.svg',
        thumbnail: '/assets/images/unsplash.avif',
      },
    ],
    [],
  )

  const blogs = blogsData.map((blog) => ({
    ...blog,
    ..._.sample(details),
  }))

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['blogs', params],
    queryFn: async ({ pageParam = 1 }) => {
      const adjustedParams = {
        ...params,
        page: pageParam,
      }
      return await getPosts(adjustedParams.limit, adjustedParams.page)
    },
    getNextPageParam: (_, pages) => {
      return pages.length + 1
    },
    initialPageParam: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    initialData: { pages: [blogs], pageParams: [1] },
  })

  const enrichedBlogs = useMemo(
    () =>
      data?.pages.flat().map((blog) => ({
        ...blog,
        ..._.sample(details),
      })) ?? [],
    [data, details],
  )

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry])

  return (
    <>
      <BentoGrid className='mx-auto py-4'>
        {enrichedBlogs.map((blog, i) => {
          const isLastItem = i === enrichedBlogs.length - 1

          return (
            <BentoGridItem
              key={i}
              ref={isLastItem ? ref : null}
              href={`/${blog.id}`}
              authorName={blog.authorName ?? ''}
              title={blog.title}
              body={blog.body}
              thumbnail={blog.thumbnail}
              authorImage={blog.authorImage}
              className={
                i !== 0 && i % 3 === 0 && i < 15
                  ? 'md:col-span-2'
                  : i !== 0 && i % 5 === 0 && i < 15
                  ? 'md:col-span-3'
                  : ''
              }
            />
          )
        })}
      </BentoGrid>
      {isFetchingNextPage && (
        <BentoGrid className='mx-auto'>
          {Array.from({ length: 5 }).map((_, i) => (
            <BentoGridItemSkeleton key={i} />
          ))}
        </BentoGrid>
      )}
    </>
  )
}

export default BlogsPage
