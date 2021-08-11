export class APIError extends Error {
  message: string
  stack?: string
  statusCode: number

  constructor({ message, stack, statusCode }) {
    super(message)
    this.message = message
    this.stack = stack
    this.statusCode = statusCode
  }
}
