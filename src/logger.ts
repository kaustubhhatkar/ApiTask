import { Request } from 'express';

export const logMiddleware = (req: Request) => {
  const timestamp = new Date().toLocaleString();
  const method = req.method;
  const url = req.originalUrl;
  console.log(`[${timestamp}] ${method} ${url}`);
};
