import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const getMyProfile = async (req: Request & { user?: any }, res: Response) => {
    try {
        const userId = req.user.id;
        const patient = await prisma.patient.findUnique({
            where: { userId },
            include: { user: { select: { name: true, email: true, phone: true } } }
        });

        if (!patient) return res.status(404).json({ message: 'Patient profile not found' });

        res.json(patient);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile' });
    }
};

export const updateProfile = async (req: Request & { user?: any }, res: Response) => {
    try {
        const userId = req.user.id;
        const { dob, gender, bloodGroup, address, allergies, chronicDiseases, emergencyContact } = req.body;

        const patient = await prisma.patient.update({
            where: { userId },
            data: {
                dob: dob ? new Date(dob) : undefined,
                gender,
                bloodGroup,
                address,
                allergies,
                chronicDiseases,
                emergencyContact
            }
        });

        res.json(patient);
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile' });
    }
};
