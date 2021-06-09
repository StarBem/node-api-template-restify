import dotenv from 'dotenv'
import server from '@config/restify'
import connection from '@database/index'
import 'reflect-metadata'

dotenv.config()

const app = server()
const port = process.env.PORT || 3333

connection
  .then((conn) => {
    console.log(`🚀 Database connected on ${conn.options.database}!`)

    app.listen(port, () => {
      console.log(`🚀 Listening at ${app.name} ${app.url}`)
    })
  })
  .catch((err) => console.log('Connection Error: ', err))
