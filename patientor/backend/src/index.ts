import express from 'express';
import cors from 'cors';
import diagnosisRouter from './routes/diagnosis.ts'
import patientRouter from './routes/patient.ts'

const app = express();
app.use(cors({ origin: 'http://localhost:5173'}));
app.use(express.json());

const PORT = 3001;

app.use('/api/diagnoses', diagnosisRouter);
app.use('/api/patients', patientRouter)

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});