import { Get, JsonController } from 'routing-controllers'
import { Service } from 'typedi'

@JsonController('/')
@Service()
export class AppController {
  @Get()
  async ping() {
    return `Server Alive | ${new Date()}`
  }
}
