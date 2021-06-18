import { Request, Response, Next } from 'restify'
import jwt from 'jsonwebtoken'
import errs from 'restify-errors'
import dotenv from 'dotenv'
dotenv.config()

dotenv.config()

export const decodeJwt = (req: Request, res: Response, next: Next) => {
  const { authorization } = req.headers
  const parts = authorization.split(' ')

  let uuid = ''

  jwt.verify(parts[1], process.env.SECRET, (err, decoded: any) => {
    if (decoded) {
      uuid = decoded.uuid
    }
  })

  // @ts-ignore
  req.userUUID = uuid

  return next()
}

export default (req: Request, res: Response, next: Next) => {
  const token = process.env.STATIC_TOKEN
  const { authentication } = req.headers

  if (authentication && authentication !== token) {
    return next(
      new errs.ForbiddenError(
        'Você não tem permissão para acessar este serviço!'
      )
    )
  }

  return next()
}
