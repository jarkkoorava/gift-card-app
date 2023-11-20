import { Request, Response, NextFunction } from 'express';

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Method ${req.method}`);
  console.log(`Body: ${req.body}`);
  next();
}

export const unknownEndpoint = (_req: Request, res: Response) => {
  res.status(404).send({error: '404'});
}
