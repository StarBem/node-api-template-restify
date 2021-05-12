import dotenv from 'dotenv'
dotenv.config()

export default {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  logging: ['query', 'error'],
  logger: 'file',
  migrations: ['./app/database/migrations/**.ts'],
  entities: ['./app/api/entities/**.ts'],
  cli: {
    migrationsDir: './app/database/migrations',
  },
}
