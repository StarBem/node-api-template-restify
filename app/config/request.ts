import axios from 'axios'

const request = axios.create({
  baseURL: process.env.SERVICES_API_URL,
  headers: {
    authentication: process.env.SERVICES_API_STATIC_TOKEN,
  },
})

export default request
