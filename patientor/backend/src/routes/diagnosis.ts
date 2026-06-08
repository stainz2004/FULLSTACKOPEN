import express, { Response } from 'express';
import { Diagnosis } from '../types/types.ts';
import diagnoses from '../../data/diagnoses.ts';

const router = express.Router();

router.get('/', (_req, res: Response<Diagnosis[]>) => {
    res.send(diagnoses);
});

export default router;