// src/index.ts
import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import { logMiddleware } from './logger';

const app = express();
const PORT = 3000;

app.use((req: Request, res: Response, next: NextFunction) => {
  logMiddleware(req);
  next();
});

app.use(express.json());

//Routes for API requests
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});