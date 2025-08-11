import { NextFunction, Request, Response } from 'express';

export async function logRequest(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  console.info(`Request @ ${req.url} - ${Date.now()}`);

  // Delay requests for dev purposes on non-prod
  if ((process.env.NODE_ENV ?? 'development') !== 'production') {
    await new Promise((r) => setTimeout(r, 700));
  }

  return next();
}
