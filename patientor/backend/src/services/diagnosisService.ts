import { type Diagnosis } from "../types/types.ts";
import Diagnoses from '../../data/diagnoses.ts'

export const getAllDiagnoses = (): Diagnosis[] => {
    return Diagnoses;
}
