import config from 'config'
import figlet from 'figlet'
import { Server } from 'http'
import { ExpressConfig } from './express.config'

export class Application {
  server: Server
  express: ExpressConfig

  constructor() {
    this.express = new ExpressConfig()

    const httpPort = config.get(`express.http-port`)

    this.server = this.express.app.listen(httpPort, () => {
      this._showAppBanner()
    })
  }

  private _showAppBanner() {
    figlet(`WELCOME`, (err, data) => {
      if (err) {
        console.info(`service: My Service`)
        console.error(`⚠error: failed to start server`)
        console.error(err)
        return
      }

      const expressRoute = `${config.get(`express.protocol`)}://${config.get(
        `express.host`,
      )}:${config.get(`express.http-port`)}`

      console.info(data)
      console.log(`${new Date()}`)
      console.log(`service: My Service`)
      console.log(`version: ${config.get(`version`)}`)
      console.log(`environment: ${process.env.NODE_ENV}`)
      console.log(`Express routes: ${expressRoute}`)
    })
  }
}
