import express from 'express';
import cors from 'cors';
import diagnosisRouter from './routes/diagnosis.ts'

const app = express();
app.use(cors({ origin: 'http://localhost:5173'}));
app.use(express.json());

const PORT = 3001;

app.use('/api/diagnoses', diagnosisRouter);

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});