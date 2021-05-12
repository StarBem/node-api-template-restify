import restify, { Server } from 'restify'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

// Routes
import defaultRoutes from '@routes/default.routes'

export default (): Server => {
  const app = restify.createServer({
    name: 'Starbem Payment MS',
    version: '1.0.0',
  })

  app.use(cors())
  app.use(restify.plugins.acceptParser(app.acceptable))
  app.use(restify.plugins.queryParser())
  app.use(restify.plugins.bodyParser())

  defaultRoutes(app)

  return app
}
