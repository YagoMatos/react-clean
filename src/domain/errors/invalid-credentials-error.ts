export class InvalidCredencialError extends Error {
  constructor () {
    super('Credenciais Inválidas')
    this.name = 'InvalidCredencialError'
  }
}
