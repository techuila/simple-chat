import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config?: AxiosRequestConfig) => axios.get(url, config),
    post: (url: string, data?: any, config?: AxiosRequestConfig) => axios.post(url, data, config),
    put: (url: string, data?: any, config?: AxiosRequestConfig) => axios.put(url, data, config),
    delete: (url: string, config?: AxiosRequestConfig) => axios.delete(url, config),
  }
}

export const Http = api(instance)
