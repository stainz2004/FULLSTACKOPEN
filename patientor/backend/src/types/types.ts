
export interface Diagnosis {
    code: string
    name: string
    latin?: string
}

export interface Patient {
    id: string
    name: string
    dateOfBirth: string
    ssn: string
    gender: string
    occupation: string
}

export const Gender = {
    Male : "male",
    Female : "female",
    Other : "other"
} as const

export type Gender = typeof Gender[keyof typeof Gender];

export type PatientCreate = Omit<Patient, "id">;

export type PublicPatient = Omit<Patient, "ssn">;
