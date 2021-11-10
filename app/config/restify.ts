import restify, { Server } from 'restify'
import corsMiddleware from 'cors'
import os from 'os'

// Routes
import defaultRoutes from '@/routes/default.routes'

const cors = corsMiddleware({
  credentials: true,
  origin: function (origin: any, callback: any) {
    callback(null, origin)
  },
})

export function MyError(message: string) {
  this.message = message
  Error.captureStackTrace(this, MyError)
}

MyError.prototype = Object.create(Error.prototype)
MyError.prototype.constructor = MyError

export default (): Server => {
  const app = restify.createServer({
    name: 'Starbem Template MS',
    version: '1.0.0',
  })

  app.use(cors)
  app.use(restify.plugins.acceptParser(app.acceptable))
  app.use(restify.plugins.queryParser())
  app.use(restify.plugins.bodyParser())
  app.use(
    restify.plugins.bodyParser({
      uploadDir: os.tmpdir(),
      multiples: true,
    })
  )

  defaultRoutes(app)

  app.on('restifyError', (req: any, res: any, err: any, cb: any) => {
    return cb()
  })

  return app
}
