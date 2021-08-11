export class MissingParamException extends Error {
  constructor(paramName: string) {
    super(`${paramName} not found`)
  }
}
