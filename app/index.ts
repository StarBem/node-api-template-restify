import 'reflect-metadata'
import * as Sentry from '@sentry/node'
import { RewriteFrames } from '@sentry/integrations'
import server from '@/config/restify'
import connection from '@/database'
import logger from '@/config/logger'
import config from '@/config'

const app = server()
const port = config.port || 3333

connection
  .then((conn) => {
    logger.info(`🚀 Database connected on ${conn.options.database}!`)

    app.listen(port, () => {
      logger.info(`🚀 Listening at ${app.name} ${app.url}`)

      Sentry.init({
        dsn: config.sentry.dsn,
        tracesSampleRate: 1.0,
        integrations: [
          new RewriteFrames({
            root: global.__dirname,
          }),
        ],
      })
    })
  })
  .catch((err) => logger.error('Connection Error: ', err))
