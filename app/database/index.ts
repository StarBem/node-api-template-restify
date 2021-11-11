import { createConnection, ConnectionOptions } from 'typeorm'
import config from '../../ormconfig'

// @ts-ignore
const connectionOptions: ConnectionOptions = { ...config }

const connection = createConnection(connectionOptions)

export default connection
