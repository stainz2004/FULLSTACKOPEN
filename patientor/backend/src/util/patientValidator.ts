import { type PatientCreate, Gender } from "../types/types.ts";


export const validatePatientCreate = (body: unknown): PatientCreate => {
    if (!body || typeof body !== 'object') {
        throw new Error("Body is not an object");
    }

    if (!('name' in body) || !('dateOfBirth' in body) || !('ssn' in body) || !('gender' in body) || !('occupation' in body)) {
        throw new Error("Something is missing from the body");
    }

    if (!body.name || !isString(body.name)) {
        throw new Error("No name given to the mf.")
    }

    if (!body.dateOfBirth || !isString(body.dateOfBirth) || !isDate(body.dateOfBirth)) {
        throw new Error("No date")
    }

    if (!body.ssn || !isString(body.ssn)) {
        throw new Error("ssn missing")
    }

    if (!body.gender || !isGender(body.gender)) {
        throw new Error("Gender wrong!")
    }

    if (!body.occupation || !isString(body.occupation)) {
        throw new Error("Error!")
    }

    return {
        name: body.name,
        dateOfBirth: body.dateOfBirth,
        ssn: body.ssn,
        gender: body.gender,
        occupation: body.occupation
    };
}

const isString = (text: unknown): text is string => {
    return typeof text == 'string' || text instanceof String;
}

const isDate = (date: unknown) => {
    return isDate(date);
}

const isGender = (gender: unknown): gender is Gender => {
    return Object.values(Gender).includes(gender as Gender);
}