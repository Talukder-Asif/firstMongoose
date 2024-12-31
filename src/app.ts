import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1/student', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Server!');
});

export default app;
