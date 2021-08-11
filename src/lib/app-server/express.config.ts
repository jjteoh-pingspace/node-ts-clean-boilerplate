import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import helmet from 'helmet'
import path from 'path'
import { useContainer, useExpressServer } from 'routing-controllers'
import Container from 'typedi'
import { APIError } from '../exceptions/api-error.exception'

export class ExpressConfig {
  app: express.Express

  constructor() {
    this.app = express()
    this._registerMiddleWares()
    this._setUpControllers()
  }

  private _registerMiddleWares() {
    this.app.use(cors())
    this.app.use(urlencoded({ extended: true }))
    this.app.use(json())
    this.app.use(helmet())
    this.app.use(this._handleException)
  }

  private _handleException(
    err: Error,
    req: express.Request,
    res: express.Response,
    next,
  ) {
    const isAPIError = err instanceof APIError
    const apiError = isAPIError
      ? err
      : new APIError({
          message: err.message,
          stack: err.stack,
          statusCode: 501,
        })

    if (err.hasOwnProperty('thrown')) {
      res.status(apiError['status']).send({ error: apiError.message })
    }

    next()
  }

  private _setUpControllers() {
    let controllerPath = path.join(
      path.resolve('dist', 'src/presentation/controllers'),
      '/*.controller.js',
    )

    // bind src/ in watch mode
    if (process.env.NODE_ENV === 'development') {
      controllerPath = path.join(
        path.resolve('src', 'presentation/controllers'),
        '/*.controller.ts',
      )
    }

    useContainer(Container)
    useExpressServer(this.app, {
      controllers: [controllerPath],
      cors: true,
    })
  }
}
