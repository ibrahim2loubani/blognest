import { api } from '@/lib/axios'
import translate from 'translate'

export const getPosts = async (
  limit: number = 5,
  page: number = 1,
): Promise<IBlogResponse[]> => {
  const response = await api.get(`/posts?_limit=${limit}&_page=${page}`)
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  const locale = 'en'
  const translatedPosts = await Promise.all(
    response.data.map(async (post: IBlogResponse) => {
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
  return translatedPosts as IBlogResponse[]
}

export const getPostById = async (id: string): Promise<IBlogResponse> => {
  const response = await api.get(`/posts/${id}`)
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  return response.data as IBlogResponse
}
