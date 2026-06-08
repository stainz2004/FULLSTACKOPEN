import express, { Response } from 'express';
import { type Diagnosis } from '../types/types.ts';
import { getAllDiagnoses } from '../services/diagnosisService.ts';

const router = express.Router();

router.get('/', (_req, res: Response<Diagnosis[]>) => {
    res.send(getAllDiagnoses());
});

export default router;