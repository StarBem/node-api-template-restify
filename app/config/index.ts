import dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

export default {
  secret: process.env.SECRET,
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  servicesUrl: process.env.SERVICES_API_URL,
  authentication: process.env.SERVICES_API_STATIC_TOKEN,
  database: {
    connection: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: process.env.TYPEORM_PORT,
  },
  typeorm: {
    synchronize: process.env.TYPEORM_SYNCHRONIZE,
    logging: process.env.TYPEORM_LOGGING,
    migrations: process.env.TYPEORM_MIGRATIONS,
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
    entities: process.env.TYPEORM_ENTITIES,
    entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
}
