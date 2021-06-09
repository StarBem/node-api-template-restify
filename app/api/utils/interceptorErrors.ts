import errors from 'restify-errors'

export default {
  verifyErrors: (err: any) => {
    if (err instanceof TypeError) {
      return new errors.BadRequestError(err)
    } else {
      const { code, message } = err.response.data

      if (code === 400) {
        return new errors.BadRequestError(err)
      }

      if (code === 401) {
        return new errors.UnauthorizedError(err)
      }

      if (code === 403) {
        return new errors.ForbiddenError(err)
      }

      if (code === 404) {
        return new errors.NotFoundError(message)
      }

      // declarações para manipular quaisquer exceções não especificadas
      // passa o objeto de exceção para o manipulador de erro
      return new errors.InternalServerError(err)
    }
  },
}
