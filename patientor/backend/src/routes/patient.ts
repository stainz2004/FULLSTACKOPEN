import express from "express";
import { getPatients, addPatient } from "../services/patientService.ts";
import { type Patient } from "../types/types.ts";

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(getPatients())
})

router.post('/', (req, res) => {
    try {
        const patient: Patient | undefined = addPatient(req.body);
        res.status(201).json(patient);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: "Invalid request" });
        }
    }
})

export default router