import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://picsum.photos/v2',
})

export const getPostsPage = async (pageParam = 1, options = {}) => {
  const response = await api.get(`/list?page=${pageParam}`, options)
  return response.data
}
