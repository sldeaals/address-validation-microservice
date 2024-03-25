import express, { Response } from 'express';

const app = express();

app.use(express.json());

app.use((res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((res: Response) => {
  res.status(500).json({ error: 'Internal server error' });
});

export default app;
