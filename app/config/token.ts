import { Request, Response, Next } from 'restify'
import errs from 'restify-errors'
import dotenv from 'dotenv'
dotenv.config()

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
