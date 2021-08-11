import errors from 'restify-errors'

export const mountError = (code: number, message: string) => {
  return {
    response: {
      code,
      data: { errors: [{ message }] },
    },
  }
}

export default {
  verifyErrors: (err: any) => {
    if (err instanceof TypeError) {
      return new errors.BadRequestError(err)
    } else {
      const { code, status } = err.response || err.response?.data

      console.log(err.response)

      if (code === 400 || status === 400) {
        return new errors.BadRequestError(
          { statusCode: 400 },
          err.response?.data?.errors[0].message ||
            'Algum parametro necessario não foi passado!'
        )
      }

      if (code === 401 || status === 401) {
        return new errors.UnauthorizedError(
          {
            statusCode: 401,
          },
          err.response?.data?.errors[0].message ||
            'Você não tem permissão para acessar este serviço!'
        )
      }

      if (code === 403 || status === 403) {
        return new errors.ForbiddenError(
          {
            statusCode: 403,
          },
          err.response?.data?.errors[0].message ||
            'Você não tem autorização para acessar este serviço!'
        )
      }

      if (code === 404 || status === 404) {
        return new errors.NotFoundError(
          {
            statusCode: 404,
          },
          err.response?.data?.errors[0].message ||
            'Não foi possivel encontrar o que você está solicitando!'
        )
      }

      // declarações para manipular quaisquer exceções não especificadas
      // passa o objeto de exceção para o manipulador de erro
      return new errors.InternalServerError(
        {
          statusCode: 500,
        },
        'Ocorreu um erro interno de servidor, tente novamente ou entre em contato com o administrador do sistema!'
      )
    }
  },
}
