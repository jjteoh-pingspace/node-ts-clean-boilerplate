import { AppController } from '../../../src/presentation/controllers/app.controller'

describe(`presentation/app/controller tests`, () => {
  describe(`get`, () => {
    let appController: AppController

    beforeEach(() => {
      appController = new AppController()
    })

    it(`should reply with "Server Alive" message`, async () => {
      const reponse = await appController.ping()
      expect(reponse).toContain(`Server Alive`)
    })
  })
})
