import { Request, Response, Next } from 'restify'
import jwt from 'jsonwebtoken'
import errors from 'restify-errors'
import config from '@/config'
import constants from '@/constants'

export const decodeJwt = (req: Request, res: Response, next: Next) => {
  const { authorization } = req.headers
  const parts = authorization.split(' ')

  let uuid = ''

  jwt.verify(parts[1], config.secret, (err, decoded: any) => {
    if (decoded) {
      uuid = decoded.uuid
    }
  })

  // @ts-ignore
  req.userUUID = uuid

  return next()
}

export default (req: Request, res: Response, next: Next) => {
  const token = config.authentication
  const { authentication } = req.headers

  if (authentication && authentication !== token) {
    return next(new errors.ForbiddenError(constants.general[403]))
  }

  return next()
}
