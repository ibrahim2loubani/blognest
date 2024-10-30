import { FC } from 'react'
import SingleBlog from './SingleBlog'

interface IBlogPageProps {
  params: {
    blogId: string
  }
}

const BlogPage: FC<IBlogPageProps> = async ({ params }) => {
  return <SingleBlog params={params} />
}

export default BlogPage
