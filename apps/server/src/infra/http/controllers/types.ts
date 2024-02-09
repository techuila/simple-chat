import { Request, Response, Router } from 'express'

export interface IBaseController {
  router: Router

  get(req: Request, res: Response): void

  post(req: Request, res: Response): void

  put?(req: Request, res: Response): void

  delete?(req: Request, res: Response): void
}
