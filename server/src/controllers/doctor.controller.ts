import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const getAllDoctors = async (req: Request, res: Response) => {
    try {
        const { specialization } = req.query;

        const whereClause: any = {};
        if (specialization) {
            whereClause.specialization = specialization as string;
        }

        const doctors = await prisma.doctor.findMany({
            where: whereClause,
            include: {
                user: { select: { name: true, email: true } }
            }
        });

        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctors' });
    }
};

export const getDoctorStats = async (req: Request & { user?: any }, res: Response) => {
    try {
        const userId = req.user.id;
        const doctor = await prisma.doctor.findUnique({ where: { userId } });

        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

        const [appointmentCount, patientCount] = await Promise.all([
            prisma.appointment.count({ where: { doctorId: doctor.id, status: 'SCHEDULED' } }),
            prisma.appointment.count({ where: { doctorId: doctor.id } }) // Simplified unique patient logic
        ]);

        res.json({
            pendingAppointments: appointmentCount,
            totalPatients: patientCount,
            revenue: 0 // Placeholder
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching stats' });
    }
};
