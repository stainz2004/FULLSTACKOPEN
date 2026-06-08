import patientData from '../../data/patients.ts'
import { type PublicPatient, type PatientCreate, type Patient } from '../types/types.ts'
import { v1 as uuid } from 'uuid';
import { validatePatientCreate } from '../util/patientValidator.ts';



export const getPatients = (): PublicPatient[] => {
     return patientData.map(({ ssn: _ssn, ...rest }) => rest);
}

export const addPatient = (patientC: undefined): Patient | undefined => {
    try {
        const patientCreate: PatientCreate = validatePatientCreate(patientC);
        const newPatient: Patient = {
            id: uuid(),
            ...patientCreate
        };
        patientData.push(newPatient);
        return newPatient;
    } catch (error) {
        throw error
    }
}