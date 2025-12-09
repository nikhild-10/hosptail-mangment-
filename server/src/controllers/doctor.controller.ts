import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const getAllDoctors = async (req: Request, res: Response) => {
    try {
        const doctors = await prisma.doctor.findMany({
            include: {
                user: { select: { name: true, email: true } }
            }
        });
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctors' });
    }
};
