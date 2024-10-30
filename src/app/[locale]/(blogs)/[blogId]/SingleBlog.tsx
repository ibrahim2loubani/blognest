'use client'

import { FC } from 'react'

interface ISingleBlogProps {
  id: string
}

const SingleBlog: FC<ISingleBlogProps> = ({ id }) => {
  console.log('🚀 ~ id:', id)

  return <div>SingleBlog</div>
}

export default SingleBlog
