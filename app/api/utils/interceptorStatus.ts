export const verifyStatus = (status: string) => {
  const defaultStatus = {
    Inativo: 0,
    Ativo: 1,
    Excluido: 2,
  }

  return defaultStatus[status]
}
