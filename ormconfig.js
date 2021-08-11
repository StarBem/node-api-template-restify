import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

export default {
  name: 'default',
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  migrationsRun: true,
  logging: true,
  migrations: [process.env.TYPEORM_MIGRATIONS],
  entities: [process.env.TYPEORM_ENTITIES],
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
    entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
  },
}
