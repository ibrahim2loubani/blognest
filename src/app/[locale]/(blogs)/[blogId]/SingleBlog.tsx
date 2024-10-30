'use client'

import { FC } from 'react'

interface ISingleBlogProps {
  params: {
    blogId: string
  }
}

const SingleBlog: FC<ISingleBlogProps> = ({ params }) => {
  console.log('🚀 ~ params:', params)
  return <div>SingleBlog</div>
}

export default SingleBlog
