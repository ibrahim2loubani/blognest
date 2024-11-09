'use client'

import { FC } from 'react'

interface ISingleBlogProps {
  id: string
}

const SingleBlog: FC<ISingleBlogProps> = ({ id }) => {
  console.log('🚀 ~ id:', id)

  return <div className='py-10'>SingleBlog</div>
}

export default SingleBlog
