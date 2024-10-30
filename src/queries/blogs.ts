import { api } from '@/lib/axios'

export const getPosts = async (limit: number = 5): Promise<IPost[]> => {
  const response = await api.get(`/posts?_limit=${limit}`)
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  return response.data as IPost[]
}

export const getPostById = async (id: string): Promise<IPost> => {
  const response = await api.get(`/posts/${id}`)
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
  return response.data as IPost
}
