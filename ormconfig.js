import config from '@/config'

export default {
  name: 'default',
  type: 'mysql',
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  synchronize: config.typeorm.synchronize,
  migrationsRun: true,
  logging: config.typeorm.logging,
  migrations: [config.typeorm.migrations],
  entities: [config.typeorm.entities],
  cli: {
    migrationsDir: config.typeorm.migrationsDir,
    entitiesDir: config.typeorm.entitiesDir,
  },
}
