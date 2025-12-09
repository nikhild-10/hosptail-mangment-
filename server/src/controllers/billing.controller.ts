import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const createBill = async (req: Request, res: Response) => {
    try {
        const { patientId, appointmentId, totalAmount, items } = req.body;

        const bill = await prisma.bill.create({
            data: {
                patientId,
                appointmentId,
                totalAmount,
                status: 'UNPAID',
                items: {
                    create: items // Expects array of { description, quantity, unitPrice, amount }
                }
            },
            include: { items: true }
        });

        res.status(201).json(bill);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating bill' });
    }
};

export const getMyBills = async (req: Request & { user?: any }, res: Response) => {
    try {
        const userId = req.user.id;
        const patient = await prisma.patient.findUnique({ where: { userId } });

        if (!patient) return res.status(404).json({ message: 'Patient not found' });

        const bills = await prisma.bill.findMany({
            where: { patientId: patient.id },
            include: { items: true },
            orderBy: { date: 'desc' }
        });

        res.json(bills);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bills' });
    }
};
