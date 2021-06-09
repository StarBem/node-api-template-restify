import { createConnection, ConnectionOptions } from 'typeorm'
import dotenv from 'dotenv'
import config from '../../ormconfig'

dotenv.config()

// @ts-ignore
const connectionOptions: ConnectionOptions = { ...config }

const connection = createConnection(connectionOptions)

export default connection
