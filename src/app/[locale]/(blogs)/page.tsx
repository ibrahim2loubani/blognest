import { getPosts } from '@/queries/blogs'
import { cookies } from 'next/headers'
import { FC } from 'react'
import translate from 'translate'
import BlogsPage from './BlogsPage'

const Blogs: FC = async ({}) => {
  const getBlogs = await getPosts()
  const locale = (await cookies()).get('NEXT_LOCALE')?.value

  const blogs = await Promise.all(
    getBlogs.map(async (post: IPost) => {
      const title = await translate(post.title, {
        from: 'la',
        to: locale,
      })

      const body = await translate(post.body, {
        from: 'la',
        to: locale,
      })

      return { ...post, title, body }
    }),
  )

  console.log('Translated Blogs:', blogs)

  return (
    // <div className='flex size-full items-center justify-center gap-10'>
    //   <ModeToggle />
    //   <LanguageSwitcher />
    //   <div>{t('title')}</div>
    //   <Link
    //     href={`/blogs`}
    //     className={cn(buttonVariants({ variant: 'outline' }), 'h-9 px-4 py-2')}
    //   >
    //     go to blogs
    //   </Link>
    // </div>
    <div className='py-10'>
      <BlogsPage />
    </div>
  )
}

export default Blogs
