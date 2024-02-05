import { Router } from 'express';

export class RootRoutes {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  getRoutes(): Router {
    this.router.post(
      '/',(req,res) => {
        res.json({
            ok: true
        })

      }
    );
    return this.router;
  }
}
