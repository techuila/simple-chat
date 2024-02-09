import express from 'express'
import { IBaseController } from './controllers/types'

export class App {
  private app: express.Application
  private port: number

  constructor(controllers: IBaseController[], port: number) {
    this.app = express()
    this.port = port

    this.initializeMiddlewares()
    this.initializeControllers(controllers)
  }

  private initializeMiddlewares() {
    this.app.use(express.json())
  }

  private initializeControllers(controllers: IBaseController[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router)
    })
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}`)
    })
  }
}
