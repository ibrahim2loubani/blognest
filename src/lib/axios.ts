import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WEB_URL,
  withCredentials: true,
})
