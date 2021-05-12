import server from './config/restify'
import dotenv from 'dotenv'

dotenv.config()

const app = server()
const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`🚀 Listening at ${app.name} ${app.url}`)
})
