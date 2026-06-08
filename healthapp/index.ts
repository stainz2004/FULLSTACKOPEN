import express from 'express';
import { bmiCalculator } from './bmiCalculator.ts';
import { Request, Response } from 'express';
import { calculator, type Operation } from './calculator.ts';
import { type TrainingResponse, calculateExercises, type ExerciseRequest } from './exerciseCalculator.ts';

interface BmiQuery {
    height: string
    weight: string
}

interface BmiQueryResponse {
    weight: number
    height: number
    bmi: string
}

interface ErrorResponse {
    error: string
}

const app = express();

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
app.post('/exercises', (req:  Request<{}, {}, ExerciseRequest>, res: Response<TrainingResponse | ErrorResponse>) => {
    const { daily_exercises, target} = req.body;

    if (!daily_exercises || target === undefined) {
        res.status(400).send({ error: 'parameters missing' });
        return;
    }

    try {
        const result = calculateExercises(target, daily_exercises);
        res.send(result);
    } catch (e: unknown) {
        res.status(400).send({ error: (e as Error).message });
    }
});

app.post('/calculate', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
    const { value1, value2, op } = req.body;

    if ( !value1 || isNaN(Number(value1)) ) {    
     return res.status(400).send({ error: '...'});  
    }

    const result = calculator(Number(value1), Number(value2), op as Operation);
    return res.send({ result });
});

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
    res.send("Hello Full Stack!");
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
app.get('/bmi', (req: Request<{}, {}, {}, BmiQuery>, res: Response<BmiQueryResponse | ErrorResponse>) => {
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);

    if (isNaN(weight) || isNaN(height)) {
        res.status(400).send({ error: "malformatted parameters"});
        return;
    }

    const bmi: string = bmiCalculator(weight, height);

    const response: BmiQueryResponse = {
        weight,
        height,
        bmi
    };

    res.status(200).send(response);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});