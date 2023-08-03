import axios from 'axios'
import env from '../../../config/env'

const URL = env().backUrl

const api = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

api.interceptors.response.use(
  async (response) => response,
  async (error) => {
    console.log('erroAxios', error);
  }
)

export { api, URL }
