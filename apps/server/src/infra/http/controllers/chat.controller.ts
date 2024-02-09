import express, { Request, Response, Router } from 'express'
import { IBaseController } from './types'

export class ChatController implements IBaseController {
  router: Router

  constructor() {
    this.router = express.Router()

    this.router.get('/', this.get)
    this.router.post('/', this.post)
  }

  public get(req: Request, res: Response) {
    res.send('Hello from chat controller')
  }

  public post(req: Request, res: Response) {
    res.send('Hello from chat controller')
  }
}
