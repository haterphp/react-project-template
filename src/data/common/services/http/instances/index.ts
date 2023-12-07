/* eslint-disable max-len */
import { HttpService } from '../service'

const HttpAppService = new HttpService({
  baseURL: import.meta.env.VITE_BASE_API_DOMAIN,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { HttpAppService }
