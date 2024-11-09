import { FC } from 'react'
import translate from 'translate'
import SingleBlog from './SingleBlog'

interface IBlogPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any
}

const BlogPage: FC<IBlogPageProps> = async ({ params }) => {
  const { blogId } = await params

  const text = await translate(
    'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    {
      from: 'la',
      to: 'en',
    },
  )
  console.log('🚀 ~ constBlogPage:FC<IBlogPageProps>= ~ text:', text)
  return <SingleBlog id={blogId} />
}

export default BlogPage
