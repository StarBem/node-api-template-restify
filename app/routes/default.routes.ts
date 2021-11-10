import restify, { Server } from 'restify'

const defaultRoutes = (app: Server): void => {
  app.get(
    '/status',
    restify.plugins.conditionalHandler([
      {
        version: '1.0.0',
        handler: (req, res, next) => {
          res.send({
            hello: 'Api rodando',
            requestedVersion: req.version(),
            matchedVersion: req.matchedVersion(),
          })
          return next()
        },
      },
    ])
  )
}

export default defaultRoutes
