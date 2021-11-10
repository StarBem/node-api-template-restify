import axios from 'axios'
import config from '@/config'

const request = axios.create({
  baseURL: config.servicesUrl,
  headers: {
    authentication: config.authentication,
  },
})

export default request
