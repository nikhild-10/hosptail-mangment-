import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const createAppointment = async (req: Request & { user?: any }, res: Response) => {
    try {
        const { doctorId, date, type, notes } = req.body;
        const patientUserId = req.user.id;

        const patient = await prisma.patient.findUnique({ where: { userId: patientUserId } });
        if (!patient) return res.status(404).json({ message: 'Patient profile not found' });

        // Check availability (Mock logic: just check if slot is taken)
        const existing = await prisma.appointment.findFirst({
            where: { doctorId, date: new Date(date) }
        });

        if (existing) {
            return res.status(409).json({ message: 'Slot not available' });
        }

        const appointment = await prisma.appointment.create({
            data: {
                patientId: patient.id,
                doctorId,
                date: new Date(date),
                type,
                notes,
                status: 'SCHEDULED'
            }
        });

        res.status(201).json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating appointment' });
    }
};

export const getMyAppointments = async (req: Request & { user?: any }, res: Response) => {
    try {
        const userId = req.user.id;
        const role = req.user.role;

        let whereClause = {};
        if (role === 'PATIENT') {
            const patient = await prisma.patient.findUnique({ where: { userId } });
            if (!patient) return res.status(404).json({ message: 'Patient profile not found' });
            whereClause = { patientId: patient.id };
        } else if (role === 'DOCTOR') {
            const doctor = await prisma.doctor.findUnique({ where: { userId } });
            if (!doctor) return res.status(404).json({ message: 'Doctor profile not found' });
            whereClause = { doctorId: doctor.id };
        }

        const appointments = await prisma.appointment.findMany({
            where: whereClause,
            include: {
                doctor: { include: { user: { select: { name: true } } } },
                patient: { include: { user: { select: { name: true } } } }
            },
            orderBy: { date: 'desc' }
        });

        res.json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching appointments' });
    }
};
